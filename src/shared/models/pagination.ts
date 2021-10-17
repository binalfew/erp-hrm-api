import { Type } from '@nestjs/common';
import { Field, Int, ObjectType } from '@nestjs/graphql';

interface IEdgeType<T> {
  cursor: number;
  node: T;
}

export interface IPaginatedResponseType<T> {
  edges: IEdgeType<T>[];
  nodes: T[];
  totalCount: number;
  hasNextPage: boolean;
  startCursor: number;
  endCursor: number;
}

export function PaginatedResponse<T>(
  classRef: Type<T>,
): Type<IPaginatedResponseType<T>> {
  @ObjectType(`${classRef.name}Edge`)
  abstract class EdgeType {
    @Field(() => String)
    cursor: number;

    @Field(() => classRef)
    node: T;
  }

  @ObjectType({ isAbstract: true })
  abstract class PaginatedResponseType implements IPaginatedResponseType<T> {
    @Field(() => [EdgeType])
    edges: EdgeType[];

    @Field(() => [classRef])
    nodes: T[];

    @Field(() => Int)
    totalCount: number;

    @Field(() => Boolean)
    hasNextPage: boolean;

    @Field(() => Int)
    startCursor: number;

    @Field(() => Int)
    endCursor: number;
  }
  return PaginatedResponseType as Type<IPaginatedResponseType<T>>;
}

export const paginate = async (prisma: any, args: any) => {
  const limit = args.take > 100 ? 100 : args.take;
  // take 1 extra node
  const take = Math.abs(limit + 1);

  // if there's a cursor, decode it
  const cursor = args.cursor ? args.cursor : null;

  // if there's a cursor, we need to apply a skip
  const skip = cursor ? 1 : 0;

  // set up args for findMany
  const prismaArgs: any = {
    take,
    skip,
  };

  // if there's a decoded cursor, apply that to the args
  if (cursor) {
    prismaArgs.cursor = cursor;
  }

  if (args.where && Object.keys(args.where).length !== 0) {
    prismaArgs.where = args.where;
  }

  const nodes = await prisma.findMany(prismaArgs);

  // if the total number of nodes is more than the clamped value of "limit" there is a next page
  const hasNextPage = nodes.length > limit;

  // before returning, discard the last entry from the nodes
  if (hasNextPage) nodes.pop();

  const startCursor = nodes.length > 0 ? nodes[0]['id'] : 0;
  const endCursor = nodes.length > 0 ? nodes[nodes.length - 1].id : 0;
  const edges = nodes.map((node) => ({ cursor: node.id, node }));
  const totalCount = await prisma.count();

  return {
    totalCount,
    edges,
    nodes,
    hasNextPage,
    startCursor,
    endCursor,
  };
};

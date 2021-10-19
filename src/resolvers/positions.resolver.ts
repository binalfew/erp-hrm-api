import { Args, Mutation, ObjectType, Query, Resolver } from '@nestjs/graphql';
import {
  CreateOnePositionArgs,
  FindManyPositionArgs,
  FindUniquePositionArgs,
  Position,
  UpdateOnePositionArgs,
} from 'src/@generated/position';
import { DataService } from 'src/data/data.service';
import { paginate, Paginated } from 'src/shared/models/pagination';

@ObjectType()
export class PaginatedPosition extends Paginated(Position) {}

@Resolver(() => Position)
export class PositionsResolver {
  constructor(private readonly data: DataService) {}

  @Query(() => Position, { name: 'position', nullable: true })
  async getPosition(@Args() args: FindUniquePositionArgs): Promise<Position> {
    return this.data.position.findUnique({ where: args.where });
  }

  @Query(() => PaginatedPosition, { name: 'positions' })
  async getPositions(
    @Args() args: FindManyPositionArgs,
  ): Promise<PaginatedPosition> {
    return paginate(this.data.position, args);
  }

  @Mutation(() => Position)
  async createPosition(@Args() args: CreateOnePositionArgs): Promise<Position> {
    return this.data.position.create({
      data: args.data,
    });
  }

  @Mutation(() => Position)
  async updatePosition(@Args() args: UpdateOnePositionArgs): Promise<Position> {
    return this.data.position.update({ where: args.where, data: args.data });
  }

  @Mutation(() => Position)
  async deletePosition(
    @Args() args: FindUniquePositionArgs,
  ): Promise<Position> {
    return this.data.position.delete({ where: args.where });
  }
}

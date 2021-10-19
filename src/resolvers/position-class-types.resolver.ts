import { Args, Mutation, ObjectType, Query, Resolver } from '@nestjs/graphql';
import {
  CreateOnePositionClassTypeArgs,
  FindManyPositionClassTypeArgs,
  FindUniquePositionClassTypeArgs,
  PositionClassType,
  UpdateOnePositionClassTypeArgs,
} from 'src/@generated/position-class-type';
import { DataService } from 'src/data/data.service';
import { paginate, Paginated } from 'src/shared/models/pagination';

@ObjectType()
export class PaginatedPositionClassType extends Paginated(PositionClassType) {}

@Resolver(() => PositionClassType)
export class PositionClassTypesResolver {
  constructor(private readonly data: DataService) {}

  @Query(() => PositionClassType, { name: 'positionClassType', nullable: true })
  async getPositionClassType(
    @Args() args: FindUniquePositionClassTypeArgs,
  ): Promise<PositionClassType> {
    return this.data.positionClassType.findUnique({ where: args.where });
  }

  @Query(() => PaginatedPositionClassType, { name: 'positionClassTypes' })
  async getPositionClassTypes(
    @Args() args: FindManyPositionClassTypeArgs,
  ): Promise<PaginatedPositionClassType> {
    return paginate(this.data.positionClassType, args);
  }

  @Mutation(() => PositionClassType)
  async createPositionClassType(
    @Args() args: CreateOnePositionClassTypeArgs,
  ): Promise<PositionClassType> {
    return this.data.positionClassType.create({
      data: args.data,
    });
  }

  @Mutation(() => PositionClassType)
  async updatePositionClassType(
    @Args() args: UpdateOnePositionClassTypeArgs,
  ): Promise<PositionClassType> {
    return this.data.positionClassType.update({
      where: args.where,
      data: args.data,
    });
  }

  @Mutation(() => PositionClassType)
  async deletePositionClassType(
    @Args() args: FindUniquePositionClassTypeArgs,
  ): Promise<PositionClassType> {
    return this.data.positionClassType.delete({ where: args.where });
  }
}

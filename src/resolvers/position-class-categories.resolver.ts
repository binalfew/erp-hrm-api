import { Args, Mutation, ObjectType, Query, Resolver } from '@nestjs/graphql';
import {
  CreateOnePositionClassCategoryArgs,
  FindManyPositionClassCategoryArgs,
  FindUniquePositionClassCategoryArgs,
  PositionClassCategory,
  UpdateOnePositionClassCategoryArgs,
} from 'src/@generated/position-class-category';
import { DataService } from 'src/data/data.service';
import { paginate, Paginated } from 'src/shared/models/pagination';

@ObjectType()
export class PaginatedPositionClassCategory extends Paginated(
  PositionClassCategory,
) {}

@Resolver(() => PositionClassCategory)
export class PositionClassCategoriesResolver {
  constructor(private readonly data: DataService) {}

  @Query(() => PositionClassCategory, {
    name: 'positionClassCategory',
    nullable: true,
  })
  async getPositionClassCategory(
    @Args() args: FindUniquePositionClassCategoryArgs,
  ): Promise<PositionClassCategory> {
    return this.data.positionClassCategory.findUnique({ where: args.where });
  }

  @Query(() => PaginatedPositionClassCategory, {
    name: 'positionClassCategories',
  })
  async getPositionClassCategories(
    @Args() args: FindManyPositionClassCategoryArgs,
  ): Promise<PaginatedPositionClassCategory> {
    return paginate(this.data.positionClassCategory, args);
  }

  @Mutation(() => PositionClassCategory)
  async createPositionClassCategory(
    @Args() args: CreateOnePositionClassCategoryArgs,
  ): Promise<PositionClassCategory> {
    return this.data.positionClassCategory.create({
      data: args.data,
    });
  }

  @Mutation(() => PositionClassCategory)
  async updatePositionClassCategory(
    @Args() args: UpdateOnePositionClassCategoryArgs,
  ): Promise<PositionClassCategory> {
    return this.data.positionClassCategory.update({
      where: args.where,
      data: args.data,
    });
  }

  @Mutation(() => PositionClassCategory)
  async deletePositionClassCategory(
    @Args() args: FindUniquePositionClassCategoryArgs,
  ): Promise<PositionClassCategory> {
    return this.data.positionClassCategory.delete({ where: args.where });
  }
}

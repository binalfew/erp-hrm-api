import { Args, Mutation, ObjectType, Query, Resolver } from '@nestjs/graphql';
import {
  CreateOnePositionClassArgs,
  FindManyPositionClassArgs,
  FindUniquePositionClassArgs,
  PositionClass,
  UpdateOnePositionClassArgs,
} from 'src/@generated/position-class';
import { DataService } from 'src/data/data.service';
import { paginate, Paginated } from 'src/shared/models/pagination';

@ObjectType()
export class PaginatedPositionClass extends Paginated(PositionClass) {}

@Resolver(() => PositionClass)
export class PositionClassesResolver {
  constructor(private readonly data: DataService) {}

  @Query(() => PositionClass, { name: 'positionClass', nullable: true })
  async getPositionClass(
    @Args() args: FindUniquePositionClassArgs,
  ): Promise<PositionClass> {
    return this.data.positionClass.findUnique({ where: args.where });
  }

  @Query(() => PaginatedPositionClass, { name: 'positionClasses' })
  async getPositionClasses(
    @Args() args: FindManyPositionClassArgs,
  ): Promise<PaginatedPositionClass> {
    return paginate(this.data.positionClass, args);
  }

  @Mutation(() => PositionClass)
  async createPositionClass(
    @Args() args: CreateOnePositionClassArgs,
  ): Promise<PositionClass> {
    return this.data.positionClass.create({
      data: args.data,
    });
  }

  @Mutation(() => PositionClass)
  async updatePositionClass(
    @Args() args: UpdateOnePositionClassArgs,
  ): Promise<PositionClass> {
    return this.data.positionClass.update({
      where: args.where,
      data: args.data,
    });
  }

  @Mutation(() => PositionClass)
  async deletePositionClass(
    @Args() args: FindUniquePositionClassArgs,
  ): Promise<PositionClass> {
    return this.data.positionClass.delete({ where: args.where });
  }
}

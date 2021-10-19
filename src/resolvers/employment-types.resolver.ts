import { Args, Mutation, ObjectType, Query, Resolver } from '@nestjs/graphql';
import {
  CreateOneEmploymentTypeArgs,
  FindManyEmploymentTypeArgs,
  FindUniqueEmploymentTypeArgs,
  EmploymentType,
  UpdateOneEmploymentTypeArgs,
} from 'src/@generated/employment-type';
import { DataService } from 'src/data/data.service';
import { paginate, Paginated } from 'src/shared/models/pagination';

@ObjectType()
export class PaginatedEmploymentType extends Paginated(EmploymentType) {}

@Resolver(() => EmploymentType)
export class EmploymentTypesResolver {
  constructor(private readonly data: DataService) {}

  @Query(() => EmploymentType, { name: 'employmentType', nullable: true })
  async getEmploymentType(
    @Args() args: FindUniqueEmploymentTypeArgs,
  ): Promise<EmploymentType> {
    return this.data.employmentType.findUnique({ where: args.where });
  }

  @Query(() => PaginatedEmploymentType, { name: 'employmentTypes' })
  async getEmploymentTypes(
    @Args() args: FindManyEmploymentTypeArgs,
  ): Promise<PaginatedEmploymentType> {
    return paginate(this.data.employmentType, args);
  }

  @Mutation(() => EmploymentType)
  async createEmploymentType(
    @Args() args: CreateOneEmploymentTypeArgs,
  ): Promise<EmploymentType> {
    return this.data.employmentType.create({
      data: args.data,
    });
  }

  @Mutation(() => EmploymentType)
  async updateEmploymentType(
    @Args() args: UpdateOneEmploymentTypeArgs,
  ): Promise<EmploymentType> {
    return this.data.employmentType.update({
      where: args.where,
      data: args.data,
    });
  }

  @Mutation(() => EmploymentType)
  async deleteEmploymentType(
    @Args() args: FindUniqueEmploymentTypeArgs,
  ): Promise<EmploymentType> {
    return this.data.employmentType.delete({ where: args.where });
  }
}

import { Args, Mutation, ObjectType, Query, Resolver } from '@nestjs/graphql';
import {
  CreateOneEmploymentNatureArgs,
  FindManyEmploymentNatureArgs,
  FindUniqueEmploymentNatureArgs,
  EmploymentNature,
  UpdateOneEmploymentNatureArgs,
} from 'src/@generated/employment-nature';
import { DataService } from 'src/data/data.service';
import { paginate, Paginated } from 'src/shared/models/pagination';

@ObjectType()
export class PaginatedEmploymentNature extends Paginated(EmploymentNature) {}

@Resolver(() => EmploymentNature)
export class EmploymentNaturesResolver {
  constructor(private readonly data: DataService) {}

  @Query(() => EmploymentNature, { name: 'employmentNature', nullable: true })
  async getEmploymentNature(
    @Args() args: FindUniqueEmploymentNatureArgs,
  ): Promise<EmploymentNature> {
    return this.data.employmentNature.findUnique({ where: args.where });
  }

  @Query(() => PaginatedEmploymentNature, { name: 'employmentNatures' })
  async getEmploymentNatures(
    @Args() args: FindManyEmploymentNatureArgs,
  ): Promise<PaginatedEmploymentNature> {
    return paginate(this.data.employmentNature, args);
  }

  @Mutation(() => EmploymentNature)
  async createEmploymentNature(
    @Args() args: CreateOneEmploymentNatureArgs,
  ): Promise<EmploymentNature> {
    return this.data.employmentNature.create({
      data: args.data,
    });
  }

  @Mutation(() => EmploymentNature)
  async updateEmploymentNature(
    @Args() args: UpdateOneEmploymentNatureArgs,
  ): Promise<EmploymentNature> {
    return this.data.employmentNature.update({
      where: args.where,
      data: args.data,
    });
  }

  @Mutation(() => EmploymentNature)
  async deleteEmploymentNature(
    @Args() args: FindUniqueEmploymentNatureArgs,
  ): Promise<EmploymentNature> {
    return this.data.employmentNature.delete({ where: args.where });
  }
}

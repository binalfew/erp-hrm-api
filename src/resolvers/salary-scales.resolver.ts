import { Args, Mutation, ObjectType, Query, Resolver } from '@nestjs/graphql';
import {
  CreateOneSalaryScaleArgs,
  FindManySalaryScaleArgs,
  FindUniqueSalaryScaleArgs,
  SalaryScale,
  UpdateOneSalaryScaleArgs,
} from 'src/@generated/salary-scale';
import { DataService } from 'src/data/data.service';
import { paginate, Paginated } from 'src/shared/models/pagination';

@ObjectType()
export class PaginatedSalaryScale extends Paginated(SalaryScale) {}

@Resolver(() => SalaryScale)
export class SalaryScalesResolver {
  constructor(private readonly data: DataService) {}

  @Query(() => SalaryScale, { name: 'salaryScale', nullable: true })
  async getSalaryScale(
    @Args() args: FindUniqueSalaryScaleArgs,
  ): Promise<SalaryScale> {
    return this.data.salaryScale.findUnique({ where: args.where });
  }

  @Query(() => PaginatedSalaryScale, { name: 'salaryScales' })
  async getSalaryScales(
    @Args() args: FindManySalaryScaleArgs,
  ): Promise<PaginatedSalaryScale> {
    return paginate(this.data.salaryScale, args);
  }

  @Mutation(() => SalaryScale)
  async createSalaryScale(
    @Args() args: CreateOneSalaryScaleArgs,
  ): Promise<SalaryScale> {
    return this.data.salaryScale.create({
      data: args.data,
    });
  }

  @Mutation(() => SalaryScale)
  async updateSalaryScale(
    @Args() args: UpdateOneSalaryScaleArgs,
  ): Promise<SalaryScale> {
    return this.data.salaryScale.update({ where: args.where, data: args.data });
  }

  @Mutation(() => SalaryScale)
  async deleteSalaryScale(
    @Args() args: FindUniqueSalaryScaleArgs,
  ): Promise<SalaryScale> {
    return this.data.salaryScale.delete({ where: args.where });
  }
}

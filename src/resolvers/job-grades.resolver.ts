import { Args, Mutation, ObjectType, Query, Resolver } from '@nestjs/graphql';
import {
  CreateOneJobGradeArgs,
  FindManyJobGradeArgs,
  FindUniqueJobGradeArgs,
  JobGrade,
  UpdateOneJobGradeArgs,
} from 'src/@generated/job-grade';
import { DataService } from 'src/data/data.service';
import { paginate, Paginated } from 'src/shared/models/pagination';

@ObjectType()
export class PaginatedJobGrade extends Paginated(JobGrade) {}

@Resolver(() => JobGrade)
export class JobGradesResolver {
  constructor(private readonly data: DataService) {}

  @Query(() => JobGrade, { name: 'jobGrade', nullable: true })
  async getJobGrade(@Args() args: FindUniqueJobGradeArgs): Promise<JobGrade> {
    return this.data.jobGrade.findUnique({ where: args.where });
  }

  @Query(() => PaginatedJobGrade, { name: 'jobGrades' })
  async getJobGrades(
    @Args() args: FindManyJobGradeArgs,
  ): Promise<PaginatedJobGrade> {
    return paginate(this.data.jobGrade, args);
  }

  @Mutation(() => JobGrade)
  async createJobGrade(@Args() args: CreateOneJobGradeArgs): Promise<JobGrade> {
    return this.data.jobGrade.create({
      data: args.data,
    });
  }

  @Mutation(() => JobGrade)
  async updateJobGrade(@Args() args: UpdateOneJobGradeArgs): Promise<JobGrade> {
    return this.data.jobGrade.update({ where: args.where, data: args.data });
  }

  @Mutation(() => JobGrade)
  async deleteJobGrade(
    @Args() args: FindUniqueJobGradeArgs,
  ): Promise<JobGrade> {
    return this.data.jobGrade.delete({ where: args.where });
  }
}

import { Args, Mutation, ObjectType, Query, Resolver } from '@nestjs/graphql';
import {
  CreateOneJobStepArgs,
  FindManyJobStepArgs,
  FindUniqueJobStepArgs,
  JobStep,
  UpdateOneJobStepArgs,
} from 'src/@generated/job-step';
import { DataService } from 'src/data/data.service';
import { paginate, Paginated } from 'src/shared/models/pagination';

@ObjectType()
export class PaginatedJobStep extends Paginated(JobStep) {}

@Resolver(() => JobStep)
export class JobStepsResolver {
  constructor(private readonly data: DataService) {}

  @Query(() => JobStep, { name: 'jobStep', nullable: true })
  async getJobStep(@Args() args: FindUniqueJobStepArgs): Promise<JobStep> {
    return this.data.jobStep.findUnique({ where: args.where });
  }

  @Query(() => PaginatedJobStep, { name: 'jobSteps' })
  async getJobSteps(
    @Args() args: FindManyJobStepArgs,
  ): Promise<PaginatedJobStep> {
    return paginate(this.data.jobStep, args);
  }

  @Mutation(() => JobStep)
  async createJobStep(@Args() args: CreateOneJobStepArgs): Promise<JobStep> {
    return this.data.jobStep.create({
      data: args.data,
    });
  }

  @Mutation(() => JobStep)
  async updateJobStep(@Args() args: UpdateOneJobStepArgs): Promise<JobStep> {
    return this.data.jobStep.update({ where: args.where, data: args.data });
  }

  @Mutation(() => JobStep)
  async deleteJobStep(@Args() args: FindUniqueJobStepArgs): Promise<JobStep> {
    return this.data.jobStep.delete({ where: args.where });
  }
}

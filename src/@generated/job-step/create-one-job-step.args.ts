import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobStepCreateInput } from './job-step-create.input';

@ArgsType()
export class CreateOneJobStepArgs {
  @Field(() => JobStepCreateInput, { nullable: false })
  data!: JobStepCreateInput;
}

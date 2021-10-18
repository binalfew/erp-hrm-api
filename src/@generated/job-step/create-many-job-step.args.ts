import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobStepCreateManyInput } from './job-step-create-many.input';

@ArgsType()
export class CreateManyJobStepArgs {
  @Field(() => [JobStepCreateManyInput], { nullable: false })
  data!: Array<JobStepCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobStepUpdateInput } from './job-step-update.input';
import { JobStepWhereUniqueInput } from './job-step-where-unique.input';

@ArgsType()
export class UpdateOneJobStepArgs {
  @Field(() => JobStepUpdateInput, { nullable: false })
  data!: JobStepUpdateInput;

  @Field(() => JobStepWhereUniqueInput, { nullable: false })
  where!: JobStepWhereUniqueInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobStepWhereUniqueInput } from './job-step-where-unique.input';

@ArgsType()
export class FindUniqueJobStepArgs {
  @Field(() => JobStepWhereUniqueInput, { nullable: false })
  where!: JobStepWhereUniqueInput;
}

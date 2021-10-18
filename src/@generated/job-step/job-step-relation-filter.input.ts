import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobStepWhereInput } from './job-step-where.input';

@InputType()
export class JobStepRelationFilter {
  @Field(() => JobStepWhereInput, { nullable: true })
  is?: JobStepWhereInput;

  @Field(() => JobStepWhereInput, { nullable: true })
  isNot?: JobStepWhereInput;
}

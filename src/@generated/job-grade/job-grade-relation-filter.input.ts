import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobGradeWhereInput } from './job-grade-where.input';

@InputType()
export class JobGradeRelationFilter {
  @Field(() => JobGradeWhereInput, { nullable: true })
  is?: JobGradeWhereInput;

  @Field(() => JobGradeWhereInput, { nullable: true })
  isNot?: JobGradeWhereInput;
}

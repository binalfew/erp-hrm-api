import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobGradeCreateInput } from './job-grade-create.input';

@ArgsType()
export class CreateOneJobGradeArgs {
  @Field(() => JobGradeCreateInput, { nullable: false })
  data!: JobGradeCreateInput;
}

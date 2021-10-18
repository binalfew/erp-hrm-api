import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobGradeCreateManyInput } from './job-grade-create-many.input';

@ArgsType()
export class CreateManyJobGradeArgs {
  @Field(() => [JobGradeCreateManyInput], { nullable: false })
  data!: Array<JobGradeCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

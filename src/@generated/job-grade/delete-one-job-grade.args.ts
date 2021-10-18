import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobGradeWhereUniqueInput } from './job-grade-where-unique.input';

@ArgsType()
export class DeleteOneJobGradeArgs {
  @Field(() => JobGradeWhereUniqueInput, { nullable: false })
  where!: JobGradeWhereUniqueInput;
}

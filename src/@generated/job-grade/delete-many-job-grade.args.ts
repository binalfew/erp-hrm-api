import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobGradeWhereInput } from './job-grade-where.input';

@ArgsType()
export class DeleteManyJobGradeArgs {
  @Field(() => JobGradeWhereInput, { nullable: true })
  where?: JobGradeWhereInput;
}

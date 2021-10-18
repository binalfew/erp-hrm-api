import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobGradeUpdateManyMutationInput } from './job-grade-update-many-mutation.input';
import { JobGradeWhereInput } from './job-grade-where.input';

@ArgsType()
export class UpdateManyJobGradeArgs {
  @Field(() => JobGradeUpdateManyMutationInput, { nullable: false })
  data!: JobGradeUpdateManyMutationInput;

  @Field(() => JobGradeWhereInput, { nullable: true })
  where?: JobGradeWhereInput;
}

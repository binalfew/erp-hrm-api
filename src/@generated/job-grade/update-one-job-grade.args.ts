import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobGradeUpdateInput } from './job-grade-update.input';
import { JobGradeWhereUniqueInput } from './job-grade-where-unique.input';

@ArgsType()
export class UpdateOneJobGradeArgs {

    @Field(() => JobGradeUpdateInput, {nullable:false})
    data!: JobGradeUpdateInput;

    @Field(() => JobGradeWhereUniqueInput, {nullable:false})
    where!: JobGradeWhereUniqueInput;
}

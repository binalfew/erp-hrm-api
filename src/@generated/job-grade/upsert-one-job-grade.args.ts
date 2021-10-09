import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobGradeWhereUniqueInput } from './job-grade-where-unique.input';
import { JobGradeCreateInput } from './job-grade-create.input';
import { JobGradeUpdateInput } from './job-grade-update.input';

@ArgsType()
export class UpsertOneJobGradeArgs {

    @Field(() => JobGradeWhereUniqueInput, {nullable:false})
    where!: JobGradeWhereUniqueInput;

    @Field(() => JobGradeCreateInput, {nullable:false})
    create!: JobGradeCreateInput;

    @Field(() => JobGradeUpdateInput, {nullable:false})
    update!: JobGradeUpdateInput;
}

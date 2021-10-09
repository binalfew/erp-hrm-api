import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobStepWhereUniqueInput } from './job-step-where-unique.input';
import { JobStepCreateInput } from './job-step-create.input';
import { JobStepUpdateInput } from './job-step-update.input';

@ArgsType()
export class UpsertOneJobStepArgs {

    @Field(() => JobStepWhereUniqueInput, {nullable:false})
    where!: JobStepWhereUniqueInput;

    @Field(() => JobStepCreateInput, {nullable:false})
    create!: JobStepCreateInput;

    @Field(() => JobStepUpdateInput, {nullable:false})
    update!: JobStepUpdateInput;
}

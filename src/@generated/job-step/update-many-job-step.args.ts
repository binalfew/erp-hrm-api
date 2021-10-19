import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobStepUpdateManyMutationInput } from './job-step-update-many-mutation.input';
import { JobStepWhereInput } from './job-step-where.input';

@ArgsType()
export class UpdateManyJobStepArgs {

    @Field(() => JobStepUpdateManyMutationInput, {nullable:false})
    data!: JobStepUpdateManyMutationInput;

    @Field(() => JobStepWhereInput, {nullable:true})
    where?: JobStepWhereInput;
}

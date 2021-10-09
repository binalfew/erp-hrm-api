import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobStepWhereInput } from './job-step-where.input';

@ArgsType()
export class DeleteManyJobStepArgs {

    @Field(() => JobStepWhereInput, {nullable:true})
    where?: JobStepWhereInput;
}

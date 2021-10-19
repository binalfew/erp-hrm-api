import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobStepWhereInput } from './job-step-where.input';
import { JobStepOrderByWithRelationInput } from './job-step-order-by-with-relation.input';
import { JobStepWhereUniqueInput } from './job-step-where-unique.input';
import { Int } from '@nestjs/graphql';
import { JobStepScalarFieldEnum } from './job-step-scalar-field.enum';

@ArgsType()
export class FindManyJobStepArgs {

    @Field(() => JobStepWhereInput, {nullable:true})
    where?: JobStepWhereInput;

    @Field(() => [JobStepOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<JobStepOrderByWithRelationInput>;

    @Field(() => JobStepWhereUniqueInput, {nullable:true})
    cursor?: JobStepWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [JobStepScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof JobStepScalarFieldEnum>;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobStepWhereInput } from './job-step-where.input';
import { JobStepOrderByWithRelationInput } from './job-step-order-by-with-relation.input';
import { JobStepWhereUniqueInput } from './job-step-where-unique.input';
import { Int } from '@nestjs/graphql';
import { JobStepCountAggregateInput } from './job-step-count-aggregate.input';
import { JobStepAvgAggregateInput } from './job-step-avg-aggregate.input';
import { JobStepSumAggregateInput } from './job-step-sum-aggregate.input';
import { JobStepMinAggregateInput } from './job-step-min-aggregate.input';
import { JobStepMaxAggregateInput } from './job-step-max-aggregate.input';

@ArgsType()
export class JobStepAggregateArgs {

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

    @Field(() => JobStepCountAggregateInput, {nullable:true})
    _count?: JobStepCountAggregateInput;

    @Field(() => JobStepAvgAggregateInput, {nullable:true})
    _avg?: JobStepAvgAggregateInput;

    @Field(() => JobStepSumAggregateInput, {nullable:true})
    _sum?: JobStepSumAggregateInput;

    @Field(() => JobStepMinAggregateInput, {nullable:true})
    _min?: JobStepMinAggregateInput;

    @Field(() => JobStepMaxAggregateInput, {nullable:true})
    _max?: JobStepMaxAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { JobStepCountAggregate } from './job-step-count-aggregate.output';
import { JobStepAvgAggregate } from './job-step-avg-aggregate.output';
import { JobStepSumAggregate } from './job-step-sum-aggregate.output';
import { JobStepMinAggregate } from './job-step-min-aggregate.output';
import { JobStepMaxAggregate } from './job-step-max-aggregate.output';

@ObjectType()
export class AggregateJobStep {

    @Field(() => JobStepCountAggregate, {nullable:true})
    _count?: JobStepCountAggregate;

    @Field(() => JobStepAvgAggregate, {nullable:true})
    _avg?: JobStepAvgAggregate;

    @Field(() => JobStepSumAggregate, {nullable:true})
    _sum?: JobStepSumAggregate;

    @Field(() => JobStepMinAggregate, {nullable:true})
    _min?: JobStepMinAggregate;

    @Field(() => JobStepMaxAggregate, {nullable:true})
    _max?: JobStepMaxAggregate;
}

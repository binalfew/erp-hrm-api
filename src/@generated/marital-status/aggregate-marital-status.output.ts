import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MaritalStatusCountAggregate } from './marital-status-count-aggregate.output';
import { MaritalStatusAvgAggregate } from './marital-status-avg-aggregate.output';
import { MaritalStatusSumAggregate } from './marital-status-sum-aggregate.output';
import { MaritalStatusMinAggregate } from './marital-status-min-aggregate.output';
import { MaritalStatusMaxAggregate } from './marital-status-max-aggregate.output';

@ObjectType()
export class AggregateMaritalStatus {

    @Field(() => MaritalStatusCountAggregate, {nullable:true})
    _count?: MaritalStatusCountAggregate;

    @Field(() => MaritalStatusAvgAggregate, {nullable:true})
    _avg?: MaritalStatusAvgAggregate;

    @Field(() => MaritalStatusSumAggregate, {nullable:true})
    _sum?: MaritalStatusSumAggregate;

    @Field(() => MaritalStatusMinAggregate, {nullable:true})
    _min?: MaritalStatusMinAggregate;

    @Field(() => MaritalStatusMaxAggregate, {nullable:true})
    _max?: MaritalStatusMaxAggregate;
}

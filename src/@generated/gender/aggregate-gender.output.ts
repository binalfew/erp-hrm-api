import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GenderCountAggregate } from './gender-count-aggregate.output';
import { GenderAvgAggregate } from './gender-avg-aggregate.output';
import { GenderSumAggregate } from './gender-sum-aggregate.output';
import { GenderMinAggregate } from './gender-min-aggregate.output';
import { GenderMaxAggregate } from './gender-max-aggregate.output';

@ObjectType()
export class AggregateGender {

    @Field(() => GenderCountAggregate, {nullable:true})
    _count?: GenderCountAggregate;

    @Field(() => GenderAvgAggregate, {nullable:true})
    _avg?: GenderAvgAggregate;

    @Field(() => GenderSumAggregate, {nullable:true})
    _sum?: GenderSumAggregate;

    @Field(() => GenderMinAggregate, {nullable:true})
    _min?: GenderMinAggregate;

    @Field(() => GenderMaxAggregate, {nullable:true})
    _max?: GenderMaxAggregate;
}

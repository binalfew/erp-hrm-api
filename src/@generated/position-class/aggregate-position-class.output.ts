import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PositionClassCountAggregate } from './position-class-count-aggregate.output';
import { PositionClassAvgAggregate } from './position-class-avg-aggregate.output';
import { PositionClassSumAggregate } from './position-class-sum-aggregate.output';
import { PositionClassMinAggregate } from './position-class-min-aggregate.output';
import { PositionClassMaxAggregate } from './position-class-max-aggregate.output';

@ObjectType()
export class AggregatePositionClass {

    @Field(() => PositionClassCountAggregate, {nullable:true})
    _count?: PositionClassCountAggregate;

    @Field(() => PositionClassAvgAggregate, {nullable:true})
    _avg?: PositionClassAvgAggregate;

    @Field(() => PositionClassSumAggregate, {nullable:true})
    _sum?: PositionClassSumAggregate;

    @Field(() => PositionClassMinAggregate, {nullable:true})
    _min?: PositionClassMinAggregate;

    @Field(() => PositionClassMaxAggregate, {nullable:true})
    _max?: PositionClassMaxAggregate;
}

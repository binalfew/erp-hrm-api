import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PositionCountAggregate } from './position-count-aggregate.output';
import { PositionAvgAggregate } from './position-avg-aggregate.output';
import { PositionSumAggregate } from './position-sum-aggregate.output';
import { PositionMinAggregate } from './position-min-aggregate.output';
import { PositionMaxAggregate } from './position-max-aggregate.output';

@ObjectType()
export class AggregatePosition {
  @Field(() => PositionCountAggregate, { nullable: true })
  _count?: PositionCountAggregate;

  @Field(() => PositionAvgAggregate, { nullable: true })
  _avg?: PositionAvgAggregate;

  @Field(() => PositionSumAggregate, { nullable: true })
  _sum?: PositionSumAggregate;

  @Field(() => PositionMinAggregate, { nullable: true })
  _min?: PositionMinAggregate;

  @Field(() => PositionMaxAggregate, { nullable: true })
  _max?: PositionMaxAggregate;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PositionClassTypeCountAggregate } from './position-class-type-count-aggregate.output';
import { PositionClassTypeAvgAggregate } from './position-class-type-avg-aggregate.output';
import { PositionClassTypeSumAggregate } from './position-class-type-sum-aggregate.output';
import { PositionClassTypeMinAggregate } from './position-class-type-min-aggregate.output';
import { PositionClassTypeMaxAggregate } from './position-class-type-max-aggregate.output';

@ObjectType()
export class AggregatePositionClassType {
  @Field(() => PositionClassTypeCountAggregate, { nullable: true })
  _count?: PositionClassTypeCountAggregate;

  @Field(() => PositionClassTypeAvgAggregate, { nullable: true })
  _avg?: PositionClassTypeAvgAggregate;

  @Field(() => PositionClassTypeSumAggregate, { nullable: true })
  _sum?: PositionClassTypeSumAggregate;

  @Field(() => PositionClassTypeMinAggregate, { nullable: true })
  _min?: PositionClassTypeMinAggregate;

  @Field(() => PositionClassTypeMaxAggregate, { nullable: true })
  _max?: PositionClassTypeMaxAggregate;
}

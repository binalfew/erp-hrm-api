import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { PositionClassTypeCountAggregate } from './position-class-type-count-aggregate.output';
import { PositionClassTypeAvgAggregate } from './position-class-type-avg-aggregate.output';
import { PositionClassTypeSumAggregate } from './position-class-type-sum-aggregate.output';
import { PositionClassTypeMinAggregate } from './position-class-type-min-aggregate.output';
import { PositionClassTypeMaxAggregate } from './position-class-type-max-aggregate.output';

@ObjectType()
export class PositionClassTypeGroupBy {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  code!: string;

  @Field(() => GraphQLJSON, { nullable: true })
  locales?: any;

  @Field(() => Boolean, { nullable: false })
  deleted!: boolean;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

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

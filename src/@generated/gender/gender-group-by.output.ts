import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { GenderCountAggregate } from './gender-count-aggregate.output';
import { GenderAvgAggregate } from './gender-avg-aggregate.output';
import { GenderSumAggregate } from './gender-sum-aggregate.output';
import { GenderMinAggregate } from './gender-min-aggregate.output';
import { GenderMaxAggregate } from './gender-max-aggregate.output';

@ObjectType()
export class GenderGroupBy {
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

  @Field(() => GenderCountAggregate, { nullable: true })
  _count?: GenderCountAggregate;

  @Field(() => GenderAvgAggregate, { nullable: true })
  _avg?: GenderAvgAggregate;

  @Field(() => GenderSumAggregate, { nullable: true })
  _sum?: GenderSumAggregate;

  @Field(() => GenderMinAggregate, { nullable: true })
  _min?: GenderMinAggregate;

  @Field(() => GenderMaxAggregate, { nullable: true })
  _max?: GenderMaxAggregate;
}

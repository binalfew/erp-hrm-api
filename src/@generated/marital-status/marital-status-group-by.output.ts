import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { MaritalStatusCountAggregate } from './marital-status-count-aggregate.output';
import { MaritalStatusAvgAggregate } from './marital-status-avg-aggregate.output';
import { MaritalStatusSumAggregate } from './marital-status-sum-aggregate.output';
import { MaritalStatusMinAggregate } from './marital-status-min-aggregate.output';
import { MaritalStatusMaxAggregate } from './marital-status-max-aggregate.output';

@ObjectType()
export class MaritalStatusGroupBy {
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

  @Field(() => MaritalStatusCountAggregate, { nullable: true })
  _count?: MaritalStatusCountAggregate;

  @Field(() => MaritalStatusAvgAggregate, { nullable: true })
  _avg?: MaritalStatusAvgAggregate;

  @Field(() => MaritalStatusSumAggregate, { nullable: true })
  _sum?: MaritalStatusSumAggregate;

  @Field(() => MaritalStatusMinAggregate, { nullable: true })
  _min?: MaritalStatusMinAggregate;

  @Field(() => MaritalStatusMaxAggregate, { nullable: true })
  _max?: MaritalStatusMaxAggregate;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { NationalityCountAggregate } from './nationality-count-aggregate.output';
import { NationalityAvgAggregate } from './nationality-avg-aggregate.output';
import { NationalitySumAggregate } from './nationality-sum-aggregate.output';
import { NationalityMinAggregate } from './nationality-min-aggregate.output';
import { NationalityMaxAggregate } from './nationality-max-aggregate.output';

@ObjectType()
export class NationalityGroupBy {
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

  @Field(() => NationalityCountAggregate, { nullable: true })
  _count?: NationalityCountAggregate;

  @Field(() => NationalityAvgAggregate, { nullable: true })
  _avg?: NationalityAvgAggregate;

  @Field(() => NationalitySumAggregate, { nullable: true })
  _sum?: NationalitySumAggregate;

  @Field(() => NationalityMinAggregate, { nullable: true })
  _min?: NationalityMinAggregate;

  @Field(() => NationalityMaxAggregate, { nullable: true })
  _max?: NationalityMaxAggregate;
}

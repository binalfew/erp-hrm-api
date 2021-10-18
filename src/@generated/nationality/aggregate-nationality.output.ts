import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { NationalityCountAggregate } from './nationality-count-aggregate.output';
import { NationalityAvgAggregate } from './nationality-avg-aggregate.output';
import { NationalitySumAggregate } from './nationality-sum-aggregate.output';
import { NationalityMinAggregate } from './nationality-min-aggregate.output';
import { NationalityMaxAggregate } from './nationality-max-aggregate.output';

@ObjectType()
export class AggregateNationality {
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

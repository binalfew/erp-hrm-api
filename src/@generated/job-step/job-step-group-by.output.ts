import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { JobStepCountAggregate } from './job-step-count-aggregate.output';
import { JobStepAvgAggregate } from './job-step-avg-aggregate.output';
import { JobStepSumAggregate } from './job-step-sum-aggregate.output';
import { JobStepMinAggregate } from './job-step-min-aggregate.output';
import { JobStepMaxAggregate } from './job-step-max-aggregate.output';

@ObjectType()
export class JobStepGroupBy {
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

  @Field(() => JobStepCountAggregate, { nullable: true })
  _count?: JobStepCountAggregate;

  @Field(() => JobStepAvgAggregate, { nullable: true })
  _avg?: JobStepAvgAggregate;

  @Field(() => JobStepSumAggregate, { nullable: true })
  _sum?: JobStepSumAggregate;

  @Field(() => JobStepMinAggregate, { nullable: true })
  _min?: JobStepMinAggregate;

  @Field(() => JobStepMaxAggregate, { nullable: true })
  _max?: JobStepMaxAggregate;
}

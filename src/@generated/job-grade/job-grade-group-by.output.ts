import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { JobGradeCountAggregate } from './job-grade-count-aggregate.output';
import { JobGradeAvgAggregate } from './job-grade-avg-aggregate.output';
import { JobGradeSumAggregate } from './job-grade-sum-aggregate.output';
import { JobGradeMinAggregate } from './job-grade-min-aggregate.output';
import { JobGradeMaxAggregate } from './job-grade-max-aggregate.output';

@ObjectType()
export class JobGradeGroupBy {
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

  @Field(() => JobGradeCountAggregate, { nullable: true })
  _count?: JobGradeCountAggregate;

  @Field(() => JobGradeAvgAggregate, { nullable: true })
  _avg?: JobGradeAvgAggregate;

  @Field(() => JobGradeSumAggregate, { nullable: true })
  _sum?: JobGradeSumAggregate;

  @Field(() => JobGradeMinAggregate, { nullable: true })
  _min?: JobGradeMinAggregate;

  @Field(() => JobGradeMaxAggregate, { nullable: true })
  _max?: JobGradeMaxAggregate;
}

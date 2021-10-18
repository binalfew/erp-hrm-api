import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { JobGradeCountAggregate } from './job-grade-count-aggregate.output';
import { JobGradeAvgAggregate } from './job-grade-avg-aggregate.output';
import { JobGradeSumAggregate } from './job-grade-sum-aggregate.output';
import { JobGradeMinAggregate } from './job-grade-min-aggregate.output';
import { JobGradeMaxAggregate } from './job-grade-max-aggregate.output';

@ObjectType()
export class AggregateJobGrade {
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

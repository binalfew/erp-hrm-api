import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobStepWhereInput } from './job-step-where.input';
import { JobStepOrderByWithAggregationInput } from './job-step-order-by-with-aggregation.input';
import { JobStepScalarFieldEnum } from './job-step-scalar-field.enum';
import { JobStepScalarWhereWithAggregatesInput } from './job-step-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { JobStepCountAggregateInput } from './job-step-count-aggregate.input';
import { JobStepAvgAggregateInput } from './job-step-avg-aggregate.input';
import { JobStepSumAggregateInput } from './job-step-sum-aggregate.input';
import { JobStepMinAggregateInput } from './job-step-min-aggregate.input';
import { JobStepMaxAggregateInput } from './job-step-max-aggregate.input';

@ArgsType()
export class JobStepGroupByArgs {
  @Field(() => JobStepWhereInput, { nullable: true })
  where?: JobStepWhereInput;

  @Field(() => [JobStepOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<JobStepOrderByWithAggregationInput>;

  @Field(() => [JobStepScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof JobStepScalarFieldEnum>;

  @Field(() => JobStepScalarWhereWithAggregatesInput, { nullable: true })
  having?: JobStepScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => JobStepCountAggregateInput, { nullable: true })
  _count?: JobStepCountAggregateInput;

  @Field(() => JobStepAvgAggregateInput, { nullable: true })
  _avg?: JobStepAvgAggregateInput;

  @Field(() => JobStepSumAggregateInput, { nullable: true })
  _sum?: JobStepSumAggregateInput;

  @Field(() => JobStepMinAggregateInput, { nullable: true })
  _min?: JobStepMinAggregateInput;

  @Field(() => JobStepMaxAggregateInput, { nullable: true })
  _max?: JobStepMaxAggregateInput;
}

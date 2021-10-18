import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { JobStepCountOrderByAggregateInput } from './job-step-count-order-by-aggregate.input';
import { JobStepAvgOrderByAggregateInput } from './job-step-avg-order-by-aggregate.input';
import { JobStepMaxOrderByAggregateInput } from './job-step-max-order-by-aggregate.input';
import { JobStepMinOrderByAggregateInput } from './job-step-min-order-by-aggregate.input';
import { JobStepSumOrderByAggregateInput } from './job-step-sum-order-by-aggregate.input';

@InputType()
export class JobStepOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  code?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  locales?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  deleted?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => JobStepCountOrderByAggregateInput, { nullable: true })
  _count?: JobStepCountOrderByAggregateInput;

  @Field(() => JobStepAvgOrderByAggregateInput, { nullable: true })
  _avg?: JobStepAvgOrderByAggregateInput;

  @Field(() => JobStepMaxOrderByAggregateInput, { nullable: true })
  _max?: JobStepMaxOrderByAggregateInput;

  @Field(() => JobStepMinOrderByAggregateInput, { nullable: true })
  _min?: JobStepMinOrderByAggregateInput;

  @Field(() => JobStepSumOrderByAggregateInput, { nullable: true })
  _sum?: JobStepSumOrderByAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EmploymentTypeCountOrderByAggregateInput } from './employment-type-count-order-by-aggregate.input';
import { EmploymentTypeAvgOrderByAggregateInput } from './employment-type-avg-order-by-aggregate.input';
import { EmploymentTypeMaxOrderByAggregateInput } from './employment-type-max-order-by-aggregate.input';
import { EmploymentTypeMinOrderByAggregateInput } from './employment-type-min-order-by-aggregate.input';
import { EmploymentTypeSumOrderByAggregateInput } from './employment-type-sum-order-by-aggregate.input';

@InputType()
export class EmploymentTypeOrderByWithAggregationInput {
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

  @Field(() => EmploymentTypeCountOrderByAggregateInput, { nullable: true })
  _count?: EmploymentTypeCountOrderByAggregateInput;

  @Field(() => EmploymentTypeAvgOrderByAggregateInput, { nullable: true })
  _avg?: EmploymentTypeAvgOrderByAggregateInput;

  @Field(() => EmploymentTypeMaxOrderByAggregateInput, { nullable: true })
  _max?: EmploymentTypeMaxOrderByAggregateInput;

  @Field(() => EmploymentTypeMinOrderByAggregateInput, { nullable: true })
  _min?: EmploymentTypeMinOrderByAggregateInput;

  @Field(() => EmploymentTypeSumOrderByAggregateInput, { nullable: true })
  _sum?: EmploymentTypeSumOrderByAggregateInput;
}

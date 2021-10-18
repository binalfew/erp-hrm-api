import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NationalityCountOrderByAggregateInput } from './nationality-count-order-by-aggregate.input';
import { NationalityAvgOrderByAggregateInput } from './nationality-avg-order-by-aggregate.input';
import { NationalityMaxOrderByAggregateInput } from './nationality-max-order-by-aggregate.input';
import { NationalityMinOrderByAggregateInput } from './nationality-min-order-by-aggregate.input';
import { NationalitySumOrderByAggregateInput } from './nationality-sum-order-by-aggregate.input';

@InputType()
export class NationalityOrderByWithAggregationInput {
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

  @Field(() => NationalityCountOrderByAggregateInput, { nullable: true })
  _count?: NationalityCountOrderByAggregateInput;

  @Field(() => NationalityAvgOrderByAggregateInput, { nullable: true })
  _avg?: NationalityAvgOrderByAggregateInput;

  @Field(() => NationalityMaxOrderByAggregateInput, { nullable: true })
  _max?: NationalityMaxOrderByAggregateInput;

  @Field(() => NationalityMinOrderByAggregateInput, { nullable: true })
  _min?: NationalityMinOrderByAggregateInput;

  @Field(() => NationalitySumOrderByAggregateInput, { nullable: true })
  _sum?: NationalitySumOrderByAggregateInput;
}

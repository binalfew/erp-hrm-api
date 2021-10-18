import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PositionClassCategoryCountOrderByAggregateInput } from './position-class-category-count-order-by-aggregate.input';
import { PositionClassCategoryAvgOrderByAggregateInput } from './position-class-category-avg-order-by-aggregate.input';
import { PositionClassCategoryMaxOrderByAggregateInput } from './position-class-category-max-order-by-aggregate.input';
import { PositionClassCategoryMinOrderByAggregateInput } from './position-class-category-min-order-by-aggregate.input';
import { PositionClassCategorySumOrderByAggregateInput } from './position-class-category-sum-order-by-aggregate.input';

@InputType()
export class PositionClassCategoryOrderByWithAggregationInput {
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

  @Field(() => PositionClassCategoryCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: PositionClassCategoryCountOrderByAggregateInput;

  @Field(() => PositionClassCategoryAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: PositionClassCategoryAvgOrderByAggregateInput;

  @Field(() => PositionClassCategoryMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: PositionClassCategoryMaxOrderByAggregateInput;

  @Field(() => PositionClassCategoryMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: PositionClassCategoryMinOrderByAggregateInput;

  @Field(() => PositionClassCategorySumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: PositionClassCategorySumOrderByAggregateInput;
}

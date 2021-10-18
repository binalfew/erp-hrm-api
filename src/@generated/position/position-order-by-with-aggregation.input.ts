import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PositionCountOrderByAggregateInput } from './position-count-order-by-aggregate.input';
import { PositionAvgOrderByAggregateInput } from './position-avg-order-by-aggregate.input';
import { PositionMaxOrderByAggregateInput } from './position-max-order-by-aggregate.input';
import { PositionMinOrderByAggregateInput } from './position-min-order-by-aggregate.input';
import { PositionSumOrderByAggregateInput } from './position-sum-order-by-aggregate.input';

@InputType()
export class PositionOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  code?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  positionClassId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  departmentId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  vacant?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  deleted?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => PositionCountOrderByAggregateInput, { nullable: true })
  _count?: PositionCountOrderByAggregateInput;

  @Field(() => PositionAvgOrderByAggregateInput, { nullable: true })
  _avg?: PositionAvgOrderByAggregateInput;

  @Field(() => PositionMaxOrderByAggregateInput, { nullable: true })
  _max?: PositionMaxOrderByAggregateInput;

  @Field(() => PositionMinOrderByAggregateInput, { nullable: true })
  _min?: PositionMinOrderByAggregateInput;

  @Field(() => PositionSumOrderByAggregateInput, { nullable: true })
  _sum?: PositionSumOrderByAggregateInput;
}

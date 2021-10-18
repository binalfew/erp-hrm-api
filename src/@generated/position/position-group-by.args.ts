import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionWhereInput } from './position-where.input';
import { PositionOrderByWithAggregationInput } from './position-order-by-with-aggregation.input';
import { PositionScalarFieldEnum } from './position-scalar-field.enum';
import { PositionScalarWhereWithAggregatesInput } from './position-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PositionCountAggregateInput } from './position-count-aggregate.input';
import { PositionAvgAggregateInput } from './position-avg-aggregate.input';
import { PositionSumAggregateInput } from './position-sum-aggregate.input';
import { PositionMinAggregateInput } from './position-min-aggregate.input';
import { PositionMaxAggregateInput } from './position-max-aggregate.input';

@ArgsType()
export class PositionGroupByArgs {
  @Field(() => PositionWhereInput, { nullable: true })
  where?: PositionWhereInput;

  @Field(() => [PositionOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<PositionOrderByWithAggregationInput>;

  @Field(() => [PositionScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof PositionScalarFieldEnum>;

  @Field(() => PositionScalarWhereWithAggregatesInput, { nullable: true })
  having?: PositionScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => PositionCountAggregateInput, { nullable: true })
  _count?: PositionCountAggregateInput;

  @Field(() => PositionAvgAggregateInput, { nullable: true })
  _avg?: PositionAvgAggregateInput;

  @Field(() => PositionSumAggregateInput, { nullable: true })
  _sum?: PositionSumAggregateInput;

  @Field(() => PositionMinAggregateInput, { nullable: true })
  _min?: PositionMinAggregateInput;

  @Field(() => PositionMaxAggregateInput, { nullable: true })
  _max?: PositionMaxAggregateInput;
}

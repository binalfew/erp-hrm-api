import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaritalStatusWhereInput } from './marital-status-where.input';
import { MaritalStatusOrderByWithAggregationInput } from './marital-status-order-by-with-aggregation.input';
import { MaritalStatusScalarFieldEnum } from './marital-status-scalar-field.enum';
import { MaritalStatusScalarWhereWithAggregatesInput } from './marital-status-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MaritalStatusCountAggregateInput } from './marital-status-count-aggregate.input';
import { MaritalStatusAvgAggregateInput } from './marital-status-avg-aggregate.input';
import { MaritalStatusSumAggregateInput } from './marital-status-sum-aggregate.input';
import { MaritalStatusMinAggregateInput } from './marital-status-min-aggregate.input';
import { MaritalStatusMaxAggregateInput } from './marital-status-max-aggregate.input';

@ArgsType()
export class MaritalStatusGroupByArgs {
  @Field(() => MaritalStatusWhereInput, { nullable: true })
  where?: MaritalStatusWhereInput;

  @Field(() => [MaritalStatusOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<MaritalStatusOrderByWithAggregationInput>;

  @Field(() => [MaritalStatusScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof MaritalStatusScalarFieldEnum>;

  @Field(() => MaritalStatusScalarWhereWithAggregatesInput, { nullable: true })
  having?: MaritalStatusScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => MaritalStatusCountAggregateInput, { nullable: true })
  _count?: MaritalStatusCountAggregateInput;

  @Field(() => MaritalStatusAvgAggregateInput, { nullable: true })
  _avg?: MaritalStatusAvgAggregateInput;

  @Field(() => MaritalStatusSumAggregateInput, { nullable: true })
  _sum?: MaritalStatusSumAggregateInput;

  @Field(() => MaritalStatusMinAggregateInput, { nullable: true })
  _min?: MaritalStatusMinAggregateInput;

  @Field(() => MaritalStatusMaxAggregateInput, { nullable: true })
  _max?: MaritalStatusMaxAggregateInput;
}

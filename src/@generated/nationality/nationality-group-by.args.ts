import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NationalityWhereInput } from './nationality-where.input';
import { NationalityOrderByWithAggregationInput } from './nationality-order-by-with-aggregation.input';
import { NationalityScalarFieldEnum } from './nationality-scalar-field.enum';
import { NationalityScalarWhereWithAggregatesInput } from './nationality-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { NationalityCountAggregateInput } from './nationality-count-aggregate.input';
import { NationalityAvgAggregateInput } from './nationality-avg-aggregate.input';
import { NationalitySumAggregateInput } from './nationality-sum-aggregate.input';
import { NationalityMinAggregateInput } from './nationality-min-aggregate.input';
import { NationalityMaxAggregateInput } from './nationality-max-aggregate.input';

@ArgsType()
export class NationalityGroupByArgs {
  @Field(() => NationalityWhereInput, { nullable: true })
  where?: NationalityWhereInput;

  @Field(() => [NationalityOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<NationalityOrderByWithAggregationInput>;

  @Field(() => [NationalityScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof NationalityScalarFieldEnum>;

  @Field(() => NationalityScalarWhereWithAggregatesInput, { nullable: true })
  having?: NationalityScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => NationalityCountAggregateInput, { nullable: true })
  _count?: NationalityCountAggregateInput;

  @Field(() => NationalityAvgAggregateInput, { nullable: true })
  _avg?: NationalityAvgAggregateInput;

  @Field(() => NationalitySumAggregateInput, { nullable: true })
  _sum?: NationalitySumAggregateInput;

  @Field(() => NationalityMinAggregateInput, { nullable: true })
  _min?: NationalityMinAggregateInput;

  @Field(() => NationalityMaxAggregateInput, { nullable: true })
  _max?: NationalityMaxAggregateInput;
}

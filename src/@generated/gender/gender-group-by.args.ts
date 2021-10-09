import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenderWhereInput } from './gender-where.input';
import { GenderOrderByWithAggregationInput } from './gender-order-by-with-aggregation.input';
import { GenderScalarFieldEnum } from './gender-scalar-field.enum';
import { GenderScalarWhereWithAggregatesInput } from './gender-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { GenderCountAggregateInput } from './gender-count-aggregate.input';
import { GenderAvgAggregateInput } from './gender-avg-aggregate.input';
import { GenderSumAggregateInput } from './gender-sum-aggregate.input';
import { GenderMinAggregateInput } from './gender-min-aggregate.input';
import { GenderMaxAggregateInput } from './gender-max-aggregate.input';

@ArgsType()
export class GenderGroupByArgs {

    @Field(() => GenderWhereInput, {nullable:true})
    where?: GenderWhereInput;

    @Field(() => [GenderOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<GenderOrderByWithAggregationInput>;

    @Field(() => [GenderScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof GenderScalarFieldEnum>;

    @Field(() => GenderScalarWhereWithAggregatesInput, {nullable:true})
    having?: GenderScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GenderCountAggregateInput, {nullable:true})
    _count?: GenderCountAggregateInput;

    @Field(() => GenderAvgAggregateInput, {nullable:true})
    _avg?: GenderAvgAggregateInput;

    @Field(() => GenderSumAggregateInput, {nullable:true})
    _sum?: GenderSumAggregateInput;

    @Field(() => GenderMinAggregateInput, {nullable:true})
    _min?: GenderMinAggregateInput;

    @Field(() => GenderMaxAggregateInput, {nullable:true})
    _max?: GenderMaxAggregateInput;
}

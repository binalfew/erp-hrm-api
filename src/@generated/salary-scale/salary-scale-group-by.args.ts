import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryScaleWhereInput } from './salary-scale-where.input';
import { SalaryScaleOrderByWithAggregationInput } from './salary-scale-order-by-with-aggregation.input';
import { SalaryScaleScalarFieldEnum } from './salary-scale-scalar-field.enum';
import { SalaryScaleScalarWhereWithAggregatesInput } from './salary-scale-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SalaryScaleCountAggregateInput } from './salary-scale-count-aggregate.input';
import { SalaryScaleAvgAggregateInput } from './salary-scale-avg-aggregate.input';
import { SalaryScaleSumAggregateInput } from './salary-scale-sum-aggregate.input';
import { SalaryScaleMinAggregateInput } from './salary-scale-min-aggregate.input';
import { SalaryScaleMaxAggregateInput } from './salary-scale-max-aggregate.input';

@ArgsType()
export class SalaryScaleGroupByArgs {

    @Field(() => SalaryScaleWhereInput, {nullable:true})
    where?: SalaryScaleWhereInput;

    @Field(() => [SalaryScaleOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SalaryScaleOrderByWithAggregationInput>;

    @Field(() => [SalaryScaleScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SalaryScaleScalarFieldEnum>;

    @Field(() => SalaryScaleScalarWhereWithAggregatesInput, {nullable:true})
    having?: SalaryScaleScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SalaryScaleCountAggregateInput, {nullable:true})
    _count?: SalaryScaleCountAggregateInput;

    @Field(() => SalaryScaleAvgAggregateInput, {nullable:true})
    _avg?: SalaryScaleAvgAggregateInput;

    @Field(() => SalaryScaleSumAggregateInput, {nullable:true})
    _sum?: SalaryScaleSumAggregateInput;

    @Field(() => SalaryScaleMinAggregateInput, {nullable:true})
    _min?: SalaryScaleMinAggregateInput;

    @Field(() => SalaryScaleMaxAggregateInput, {nullable:true})
    _max?: SalaryScaleMaxAggregateInput;
}

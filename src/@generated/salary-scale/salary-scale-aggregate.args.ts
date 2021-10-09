import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryScaleWhereInput } from './salary-scale-where.input';
import { SalaryScaleOrderByWithRelationInput } from './salary-scale-order-by-with-relation.input';
import { SalaryScaleWhereUniqueInput } from './salary-scale-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SalaryScaleCountAggregateInput } from './salary-scale-count-aggregate.input';
import { SalaryScaleAvgAggregateInput } from './salary-scale-avg-aggregate.input';
import { SalaryScaleSumAggregateInput } from './salary-scale-sum-aggregate.input';
import { SalaryScaleMinAggregateInput } from './salary-scale-min-aggregate.input';
import { SalaryScaleMaxAggregateInput } from './salary-scale-max-aggregate.input';

@ArgsType()
export class SalaryScaleAggregateArgs {

    @Field(() => SalaryScaleWhereInput, {nullable:true})
    where?: SalaryScaleWhereInput;

    @Field(() => [SalaryScaleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SalaryScaleOrderByWithRelationInput>;

    @Field(() => SalaryScaleWhereUniqueInput, {nullable:true})
    cursor?: SalaryScaleWhereUniqueInput;

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

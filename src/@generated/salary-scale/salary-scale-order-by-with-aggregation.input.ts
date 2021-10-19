import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SalaryScaleCountOrderByAggregateInput } from './salary-scale-count-order-by-aggregate.input';
import { SalaryScaleAvgOrderByAggregateInput } from './salary-scale-avg-order-by-aggregate.input';
import { SalaryScaleMaxOrderByAggregateInput } from './salary-scale-max-order-by-aggregate.input';
import { SalaryScaleMinOrderByAggregateInput } from './salary-scale-min-order-by-aggregate.input';
import { SalaryScaleSumOrderByAggregateInput } from './salary-scale-sum-order-by-aggregate.input';

@InputType()
export class SalaryScaleOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    jobGradeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    jobStepId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    salary?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SalaryScaleCountOrderByAggregateInput, {nullable:true})
    _count?: SalaryScaleCountOrderByAggregateInput;

    @Field(() => SalaryScaleAvgOrderByAggregateInput, {nullable:true})
    _avg?: SalaryScaleAvgOrderByAggregateInput;

    @Field(() => SalaryScaleMaxOrderByAggregateInput, {nullable:true})
    _max?: SalaryScaleMaxOrderByAggregateInput;

    @Field(() => SalaryScaleMinOrderByAggregateInput, {nullable:true})
    _min?: SalaryScaleMinOrderByAggregateInput;

    @Field(() => SalaryScaleSumOrderByAggregateInput, {nullable:true})
    _sum?: SalaryScaleSumOrderByAggregateInput;
}

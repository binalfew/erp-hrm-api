import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EmploymentNatureCountOrderByAggregateInput } from './employment-nature-count-order-by-aggregate.input';
import { EmploymentNatureAvgOrderByAggregateInput } from './employment-nature-avg-order-by-aggregate.input';
import { EmploymentNatureMaxOrderByAggregateInput } from './employment-nature-max-order-by-aggregate.input';
import { EmploymentNatureMinOrderByAggregateInput } from './employment-nature-min-order-by-aggregate.input';
import { EmploymentNatureSumOrderByAggregateInput } from './employment-nature-sum-order-by-aggregate.input';

@InputType()
export class EmploymentNatureOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => EmploymentNatureCountOrderByAggregateInput, {nullable:true})
    _count?: EmploymentNatureCountOrderByAggregateInput;

    @Field(() => EmploymentNatureAvgOrderByAggregateInput, {nullable:true})
    _avg?: EmploymentNatureAvgOrderByAggregateInput;

    @Field(() => EmploymentNatureMaxOrderByAggregateInput, {nullable:true})
    _max?: EmploymentNatureMaxOrderByAggregateInput;

    @Field(() => EmploymentNatureMinOrderByAggregateInput, {nullable:true})
    _min?: EmploymentNatureMinOrderByAggregateInput;

    @Field(() => EmploymentNatureSumOrderByAggregateInput, {nullable:true})
    _sum?: EmploymentNatureSumOrderByAggregateInput;
}

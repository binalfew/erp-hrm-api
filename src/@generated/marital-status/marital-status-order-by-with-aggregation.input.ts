import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MaritalStatusCountOrderByAggregateInput } from './marital-status-count-order-by-aggregate.input';
import { MaritalStatusAvgOrderByAggregateInput } from './marital-status-avg-order-by-aggregate.input';
import { MaritalStatusMaxOrderByAggregateInput } from './marital-status-max-order-by-aggregate.input';
import { MaritalStatusMinOrderByAggregateInput } from './marital-status-min-order-by-aggregate.input';
import { MaritalStatusSumOrderByAggregateInput } from './marital-status-sum-order-by-aggregate.input';

@InputType()
export class MaritalStatusOrderByWithAggregationInput {

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

    @Field(() => MaritalStatusCountOrderByAggregateInput, {nullable:true})
    _count?: MaritalStatusCountOrderByAggregateInput;

    @Field(() => MaritalStatusAvgOrderByAggregateInput, {nullable:true})
    _avg?: MaritalStatusAvgOrderByAggregateInput;

    @Field(() => MaritalStatusMaxOrderByAggregateInput, {nullable:true})
    _max?: MaritalStatusMaxOrderByAggregateInput;

    @Field(() => MaritalStatusMinOrderByAggregateInput, {nullable:true})
    _min?: MaritalStatusMinOrderByAggregateInput;

    @Field(() => MaritalStatusSumOrderByAggregateInput, {nullable:true})
    _sum?: MaritalStatusSumOrderByAggregateInput;
}

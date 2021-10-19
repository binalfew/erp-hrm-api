import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GenderCountOrderByAggregateInput } from './gender-count-order-by-aggregate.input';
import { GenderAvgOrderByAggregateInput } from './gender-avg-order-by-aggregate.input';
import { GenderMaxOrderByAggregateInput } from './gender-max-order-by-aggregate.input';
import { GenderMinOrderByAggregateInput } from './gender-min-order-by-aggregate.input';
import { GenderSumOrderByAggregateInput } from './gender-sum-order-by-aggregate.input';

@InputType()
export class GenderOrderByWithAggregationInput {

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

    @Field(() => GenderCountOrderByAggregateInput, {nullable:true})
    _count?: GenderCountOrderByAggregateInput;

    @Field(() => GenderAvgOrderByAggregateInput, {nullable:true})
    _avg?: GenderAvgOrderByAggregateInput;

    @Field(() => GenderMaxOrderByAggregateInput, {nullable:true})
    _max?: GenderMaxOrderByAggregateInput;

    @Field(() => GenderMinOrderByAggregateInput, {nullable:true})
    _min?: GenderMinOrderByAggregateInput;

    @Field(() => GenderSumOrderByAggregateInput, {nullable:true})
    _sum?: GenderSumOrderByAggregateInput;
}

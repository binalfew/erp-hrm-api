import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PositionClassTypeCountOrderByAggregateInput } from './position-class-type-count-order-by-aggregate.input';
import { PositionClassTypeAvgOrderByAggregateInput } from './position-class-type-avg-order-by-aggregate.input';
import { PositionClassTypeMaxOrderByAggregateInput } from './position-class-type-max-order-by-aggregate.input';
import { PositionClassTypeMinOrderByAggregateInput } from './position-class-type-min-order-by-aggregate.input';
import { PositionClassTypeSumOrderByAggregateInput } from './position-class-type-sum-order-by-aggregate.input';

@InputType()
export class PositionClassTypeOrderByWithAggregationInput {

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

    @Field(() => PositionClassTypeCountOrderByAggregateInput, {nullable:true})
    _count?: PositionClassTypeCountOrderByAggregateInput;

    @Field(() => PositionClassTypeAvgOrderByAggregateInput, {nullable:true})
    _avg?: PositionClassTypeAvgOrderByAggregateInput;

    @Field(() => PositionClassTypeMaxOrderByAggregateInput, {nullable:true})
    _max?: PositionClassTypeMaxOrderByAggregateInput;

    @Field(() => PositionClassTypeMinOrderByAggregateInput, {nullable:true})
    _min?: PositionClassTypeMinOrderByAggregateInput;

    @Field(() => PositionClassTypeSumOrderByAggregateInput, {nullable:true})
    _sum?: PositionClassTypeSumOrderByAggregateInput;
}

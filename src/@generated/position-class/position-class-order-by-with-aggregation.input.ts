import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PositionClassCountOrderByAggregateInput } from './position-class-count-order-by-aggregate.input';
import { PositionClassAvgOrderByAggregateInput } from './position-class-avg-order-by-aggregate.input';
import { PositionClassMaxOrderByAggregateInput } from './position-class-max-order-by-aggregate.input';
import { PositionClassMinOrderByAggregateInput } from './position-class-min-order-by-aggregate.input';
import { PositionClassSumOrderByAggregateInput } from './position-class-sum-order-by-aggregate.input';

@InputType()
export class PositionClassOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    genderId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    positionClassTypeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    positionClassCategoryId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    salaryScaleId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    minimumAge?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    maximumAge?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    monthlyWorkingHours?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    salary?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    specification?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => PositionClassCountOrderByAggregateInput, {nullable:true})
    _count?: PositionClassCountOrderByAggregateInput;

    @Field(() => PositionClassAvgOrderByAggregateInput, {nullable:true})
    _avg?: PositionClassAvgOrderByAggregateInput;

    @Field(() => PositionClassMaxOrderByAggregateInput, {nullable:true})
    _max?: PositionClassMaxOrderByAggregateInput;

    @Field(() => PositionClassMinOrderByAggregateInput, {nullable:true})
    _min?: PositionClassMinOrderByAggregateInput;

    @Field(() => PositionClassSumOrderByAggregateInput, {nullable:true})
    _sum?: PositionClassSumOrderByAggregateInput;
}

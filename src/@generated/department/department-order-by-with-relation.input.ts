import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DepartmentOrderByRelationAggregateInput } from './department-order-by-relation-aggregate.input';
import { PositionOrderByRelationAggregateInput } from '../position/position-order-by-relation-aggregate.input';

@InputType()
export class DepartmentOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    parentId?: keyof typeof SortOrder;

    @Field(() => DepartmentOrderByWithRelationInput, {nullable:true})
    parent?: DepartmentOrderByWithRelationInput;

    @Field(() => DepartmentOrderByRelationAggregateInput, {nullable:true})
    children?: DepartmentOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => PositionOrderByRelationAggregateInput, {nullable:true})
    positions?: PositionOrderByRelationAggregateInput;
}

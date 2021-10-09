import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PositionClassOrderByRelationAggregateInput } from '../position-class/position-class-order-by-relation-aggregate.input';
import { EmployeeOrderByRelationAggregateInput } from '../employee/employee-order-by-relation-aggregate.input';

@InputType()
export class GenderOrderByWithRelationInput {

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

    @Field(() => PositionClassOrderByRelationAggregateInput, {nullable:true})
    positionClasses?: PositionClassOrderByRelationAggregateInput;

    @Field(() => EmployeeOrderByRelationAggregateInput, {nullable:true})
    employees?: EmployeeOrderByRelationAggregateInput;
}

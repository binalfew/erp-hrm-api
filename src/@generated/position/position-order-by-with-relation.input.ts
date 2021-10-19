import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PositionClassOrderByWithRelationInput } from '../position-class/position-class-order-by-with-relation.input';
import { DepartmentOrderByWithRelationInput } from '../department/department-order-by-with-relation.input';

@InputType()
export class PositionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => PositionClassOrderByWithRelationInput, {nullable:true})
    positionClass?: PositionClassOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    positionClassId?: keyof typeof SortOrder;

    @Field(() => DepartmentOrderByWithRelationInput, {nullable:true})
    department?: DepartmentOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    departmentId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    vacant?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { DepartmentUncheckedCreateNestedManyWithoutParentInput } from './department-unchecked-create-nested-many-without-parent.input';

@InputType()
export class DepartmentUncheckedCreateWithoutPositionsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;

    @Field(() => Int, {nullable:true})
    parentId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DepartmentUncheckedCreateNestedManyWithoutParentInput, {nullable:true})
    children?: DepartmentUncheckedCreateNestedManyWithoutParentInput;
}
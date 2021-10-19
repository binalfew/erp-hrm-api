import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { GraphQLJSON } from 'graphql-type-json';
import { DepartmentCreateNestedOneWithoutChildrenInput } from './department-create-nested-one-without-children.input';
import { PositionCreateNestedManyWithoutDepartmentInput } from '../position/position-create-nested-many-without-department.input';

@InputType()
export class DepartmentCreateWithoutChildrenInput {

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    name!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    code!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DepartmentCreateNestedOneWithoutChildrenInput, {nullable:true})
    parent?: DepartmentCreateNestedOneWithoutChildrenInput;

    @Field(() => PositionCreateNestedManyWithoutDepartmentInput, {nullable:true})
    positions?: PositionCreateNestedManyWithoutDepartmentInput;
}

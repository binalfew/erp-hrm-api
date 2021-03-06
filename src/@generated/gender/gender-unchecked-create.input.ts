import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { GraphQLJSON } from 'graphql-type-json';
import { PositionClassUncheckedCreateNestedManyWithoutGenderInput } from '../position-class/position-class-unchecked-create-nested-many-without-gender.input';
import { EmployeeUncheckedCreateNestedManyWithoutGenderInput } from '../employee/employee-unchecked-create-nested-many-without-gender.input';

@InputType()
export class GenderUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    name!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    code!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;

    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PositionClassUncheckedCreateNestedManyWithoutGenderInput, {nullable:true})
    positionClasses?: PositionClassUncheckedCreateNestedManyWithoutGenderInput;

    @Field(() => EmployeeUncheckedCreateNestedManyWithoutGenderInput, {nullable:true})
    employees?: EmployeeUncheckedCreateNestedManyWithoutGenderInput;
}

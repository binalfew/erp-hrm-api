import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { GenderCreateNestedOneWithoutEmployeesInput } from '../gender/gender-create-nested-one-without-employees.input';
import { NationalityCreateNestedOneWithoutEmployeesInput } from '../nationality/nationality-create-nested-one-without-employees.input';
import { MaritalStatusCreateNestedOneWithoutEmployeesInput } from '../marital-status/marital-status-create-nested-one-without-employees.input';
import { EmploymentTypeCreateNestedOneWithoutEmployeesInput } from '../employment-type/employment-type-create-nested-one-without-employees.input';

@InputType()
export class EmployeeCreateWithoutEmploymentNatureInput {

    @Field(() => GraphQLJSON, {nullable:false})
    firstName!: any;

    @Field(() => GraphQLJSON, {nullable:false})
    lastName!: any;

    @Field(() => GraphQLJSON, {nullable:false})
    grandfatherName!: any;

    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;

    @Field(() => Date, {nullable:true})
    dateOfBirth?: Date | string;

    @Field(() => String, {nullable:false})
    placeOfBirth!: string;

    @Field(() => String, {nullable:false})
    countryOfBirth!: string;

    @Field(() => String, {nullable:false})
    idNumber!: string;

    @Field(() => String, {nullable:false})
    passportNumber!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    Phone!: string;

    @Field(() => String, {nullable:false})
    emergencyContact!: string;

    @Field(() => String, {nullable:false})
    emergencyPhone!: string;

    @Field(() => Int, {nullable:false})
    numberOfChildren!: number;

    @Field(() => Date, {nullable:true})
    employmentDate?: Date | string;

    @Field(() => Date, {nullable:true})
    probationDate?: Date | string;

    @Field(() => Date, {nullable:true})
    retirementDate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => GenderCreateNestedOneWithoutEmployeesInput, {nullable:true})
    gender?: GenderCreateNestedOneWithoutEmployeesInput;

    @Field(() => NationalityCreateNestedOneWithoutEmployeesInput, {nullable:true})
    nationality?: NationalityCreateNestedOneWithoutEmployeesInput;

    @Field(() => MaritalStatusCreateNestedOneWithoutEmployeesInput, {nullable:true})
    maritalStatus?: MaritalStatusCreateNestedOneWithoutEmployeesInput;

    @Field(() => EmploymentTypeCreateNestedOneWithoutEmployeesInput, {nullable:true})
    employmentType?: EmploymentTypeCreateNestedOneWithoutEmployeesInput;
}

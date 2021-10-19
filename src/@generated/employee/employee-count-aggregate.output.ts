import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EmployeeCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    firstName!: number;

    @Field(() => Int, {nullable:false})
    lastName!: number;

    @Field(() => Int, {nullable:false})
    grandfatherName!: number;

    @Field(() => Int, {nullable:false})
    locales!: number;

    @Field(() => Int, {nullable:false})
    genderId!: number;

    @Field(() => Int, {nullable:false})
    nationalityId!: number;

    @Field(() => Int, {nullable:false})
    maritalStatusId!: number;

    @Field(() => Int, {nullable:false})
    employmentTypeId!: number;

    @Field(() => Int, {nullable:false})
    employmentNatureId!: number;

    @Field(() => Int, {nullable:false})
    dateOfBirth!: number;

    @Field(() => Int, {nullable:false})
    placeOfBirth!: number;

    @Field(() => Int, {nullable:false})
    countryOfBirth!: number;

    @Field(() => Int, {nullable:false})
    idNumber!: number;

    @Field(() => Int, {nullable:false})
    passportNumber!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @Field(() => Int, {nullable:false})
    Phone!: number;

    @Field(() => Int, {nullable:false})
    emergencyContact!: number;

    @Field(() => Int, {nullable:false})
    emergencyPhone!: number;

    @Field(() => Int, {nullable:false})
    numberOfChildren!: number;

    @Field(() => Int, {nullable:false})
    employmentDate!: number;

    @Field(() => Int, {nullable:false})
    probationDate!: number;

    @Field(() => Int, {nullable:false})
    retirementDate!: number;

    @Field(() => Int, {nullable:false})
    deleted!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

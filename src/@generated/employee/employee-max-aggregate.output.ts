import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EmployeeMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    genderId?: number;

    @Field(() => Int, {nullable:true})
    nationalityId?: number;

    @Field(() => Int, {nullable:true})
    maritalStatusId?: number;

    @Field(() => Int, {nullable:true})
    employmentTypeId?: number;

    @Field(() => Int, {nullable:true})
    employmentNatureId?: number;

    @Field(() => Date, {nullable:true})
    dateOfBirth?: Date | string;

    @Field(() => String, {nullable:true})
    placeOfBirth?: string;

    @Field(() => String, {nullable:true})
    countryOfBirth?: string;

    @Field(() => String, {nullable:true})
    idNumber?: string;

    @Field(() => String, {nullable:true})
    passportNumber?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    Phone?: string;

    @Field(() => String, {nullable:true})
    emergencyContact?: string;

    @Field(() => String, {nullable:true})
    emergencyPhone?: string;

    @Field(() => Int, {nullable:true})
    numberOfChildren?: number;

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
}

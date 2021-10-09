import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Gender } from '../gender/gender.model';
import { Int } from '@nestjs/graphql';
import { Nationality } from '../nationality/nationality.model';
import { MaritalStatus } from '../marital-status/marital-status.model';
import { EmploymentType } from '../employment-type/employment-type.model';
import { EmploymentNature } from '../employment-nature/employment-nature.model';

@ObjectType()
export class Employee {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => GraphQLJSON, {nullable:false})
    firstName!: any;

    @Field(() => GraphQLJSON, {nullable:false})
    lastName!: any;

    @Field(() => GraphQLJSON, {nullable:false})
    grandfatherName!: any;

    @Field(() => GraphQLJSON, {nullable:true})
    locales!: any | null;

    @Field(() => Gender, {nullable:true})
    gender?: Gender | null;

    @Field(() => Int, {nullable:true})
    genderId!: number | null;

    @Field(() => Nationality, {nullable:true})
    nationality?: Nationality | null;

    @Field(() => Int, {nullable:true})
    nationalityId!: number | null;

    @Field(() => MaritalStatus, {nullable:true})
    maritalStatus?: MaritalStatus | null;

    @Field(() => Int, {nullable:true})
    maritalStatusId!: number | null;

    @Field(() => EmploymentType, {nullable:true})
    employmentType?: EmploymentType | null;

    @Field(() => Int, {nullable:true})
    employmentTypeId!: number | null;

    @Field(() => EmploymentNature, {nullable:true})
    employmentNature?: EmploymentNature | null;

    @Field(() => Int, {nullable:true})
    employmentNatureId!: number | null;

    @Field(() => Date, {nullable:false})
    dateOfBirth!: Date;

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

    @Field(() => Date, {nullable:false})
    employmentDate!: Date;

    @Field(() => Date, {nullable:false})
    probationDate!: Date;

    @Field(() => Date, {nullable:false})
    retirementDate!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    deleted!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}

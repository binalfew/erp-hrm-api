import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { EmployeeCountAggregate } from './employee-count-aggregate.output';
import { EmployeeAvgAggregate } from './employee-avg-aggregate.output';
import { EmployeeSumAggregate } from './employee-sum-aggregate.output';
import { EmployeeMinAggregate } from './employee-min-aggregate.output';
import { EmployeeMaxAggregate } from './employee-max-aggregate.output';

@ObjectType()
export class EmployeeGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => GraphQLJSON, {nullable:false})
    firstName!: any;

    @Field(() => GraphQLJSON, {nullable:false})
    lastName!: any;

    @Field(() => GraphQLJSON, {nullable:false})
    grandfatherName!: any;

    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;

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

    @Field(() => Date, {nullable:false})
    dateOfBirth!: Date | string;

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
    employmentDate!: Date | string;

    @Field(() => Date, {nullable:false})
    probationDate!: Date | string;

    @Field(() => Date, {nullable:false})
    retirementDate!: Date | string;

    @Field(() => Boolean, {nullable:false})
    deleted!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => EmployeeCountAggregate, {nullable:true})
    _count?: EmployeeCountAggregate;

    @Field(() => EmployeeAvgAggregate, {nullable:true})
    _avg?: EmployeeAvgAggregate;

    @Field(() => EmployeeSumAggregate, {nullable:true})
    _sum?: EmployeeSumAggregate;

    @Field(() => EmployeeMinAggregate, {nullable:true})
    _min?: EmployeeMinAggregate;

    @Field(() => EmployeeMaxAggregate, {nullable:true})
    _max?: EmployeeMaxAggregate;
}

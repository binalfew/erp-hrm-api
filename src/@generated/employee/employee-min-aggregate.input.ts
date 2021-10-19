import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EmployeeMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    genderId?: true;

    @Field(() => Boolean, {nullable:true})
    nationalityId?: true;

    @Field(() => Boolean, {nullable:true})
    maritalStatusId?: true;

    @Field(() => Boolean, {nullable:true})
    employmentTypeId?: true;

    @Field(() => Boolean, {nullable:true})
    employmentNatureId?: true;

    @Field(() => Boolean, {nullable:true})
    dateOfBirth?: true;

    @Field(() => Boolean, {nullable:true})
    placeOfBirth?: true;

    @Field(() => Boolean, {nullable:true})
    countryOfBirth?: true;

    @Field(() => Boolean, {nullable:true})
    idNumber?: true;

    @Field(() => Boolean, {nullable:true})
    passportNumber?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    Phone?: true;

    @Field(() => Boolean, {nullable:true})
    emergencyContact?: true;

    @Field(() => Boolean, {nullable:true})
    emergencyPhone?: true;

    @Field(() => Boolean, {nullable:true})
    numberOfChildren?: true;

    @Field(() => Boolean, {nullable:true})
    employmentDate?: true;

    @Field(() => Boolean, {nullable:true})
    probationDate?: true;

    @Field(() => Boolean, {nullable:true})
    retirementDate?: true;

    @Field(() => Boolean, {nullable:true})
    deleted?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

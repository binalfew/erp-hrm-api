import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class EmployeeScalarWhereInput {

    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    AND?: Array<EmployeeScalarWhereInput>;

    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    OR?: Array<EmployeeScalarWhereInput>;

    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    NOT?: Array<EmployeeScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => JsonFilter, {nullable:true})
    firstName?: JsonFilter;

    @Field(() => JsonFilter, {nullable:true})
    lastName?: JsonFilter;

    @Field(() => JsonFilter, {nullable:true})
    grandfatherName?: JsonFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    locales?: JsonNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    genderId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    nationalityId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    maritalStatusId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    employmentTypeId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    employmentNatureId?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    dateOfBirth?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    placeOfBirth?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    countryOfBirth?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    idNumber?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    passportNumber?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    Phone?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    emergencyContact?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    emergencyPhone?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    numberOfChildren?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    employmentDate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    probationDate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    retirementDate?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    deleted?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}

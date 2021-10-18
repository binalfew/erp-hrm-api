import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { GenderRelationFilter } from '../gender/gender-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { NationalityRelationFilter } from '../nationality/nationality-relation-filter.input';
import { MaritalStatusRelationFilter } from '../marital-status/marital-status-relation-filter.input';
import { EmploymentTypeRelationFilter } from '../employment-type/employment-type-relation-filter.input';
import { EmploymentNatureRelationFilter } from '../employment-nature/employment-nature-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class EmployeeWhereInput {
  @Field(() => [EmployeeWhereInput], { nullable: true })
  AND?: Array<EmployeeWhereInput>;

  @Field(() => [EmployeeWhereInput], { nullable: true })
  OR?: Array<EmployeeWhereInput>;

  @Field(() => [EmployeeWhereInput], { nullable: true })
  NOT?: Array<EmployeeWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => JsonFilter, { nullable: true })
  firstName?: JsonFilter;

  @Field(() => JsonFilter, { nullable: true })
  lastName?: JsonFilter;

  @Field(() => JsonFilter, { nullable: true })
  grandfatherName?: JsonFilter;

  @Field(() => JsonNullableFilter, { nullable: true })
  locales?: JsonNullableFilter;

  @Field(() => GenderRelationFilter, { nullable: true })
  gender?: GenderRelationFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  genderId?: IntNullableFilter;

  @Field(() => NationalityRelationFilter, { nullable: true })
  nationality?: NationalityRelationFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  nationalityId?: IntNullableFilter;

  @Field(() => MaritalStatusRelationFilter, { nullable: true })
  maritalStatus?: MaritalStatusRelationFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  maritalStatusId?: IntNullableFilter;

  @Field(() => EmploymentTypeRelationFilter, { nullable: true })
  employmentType?: EmploymentTypeRelationFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  employmentTypeId?: IntNullableFilter;

  @Field(() => EmploymentNatureRelationFilter, { nullable: true })
  employmentNature?: EmploymentNatureRelationFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  employmentNatureId?: IntNullableFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  dateOfBirth?: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  placeOfBirth?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  countryOfBirth?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  idNumber?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  passportNumber?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  email?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  Phone?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  emergencyContact?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  emergencyPhone?: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  numberOfChildren?: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  employmentDate?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  probationDate?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  retirementDate?: DateTimeFilter;

  @Field(() => BoolFilter, { nullable: true })
  deleted?: BoolFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;
}

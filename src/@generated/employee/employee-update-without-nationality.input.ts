import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { GenderUpdateOneWithoutEmployeesInput } from '../gender/gender-update-one-without-employees.input';
import { MaritalStatusUpdateOneWithoutEmployeesInput } from '../marital-status/marital-status-update-one-without-employees.input';
import { EmploymentTypeUpdateOneWithoutEmployeesInput } from '../employment-type/employment-type-update-one-without-employees.input';
import { EmploymentNatureUpdateOneWithoutEmployeesInput } from '../employment-nature/employment-nature-update-one-without-employees.input';

@InputType()
export class EmployeeUpdateWithoutNationalityInput {
  @Field(() => GraphQLJSON, { nullable: true })
  firstName?: any;

  @Field(() => GraphQLJSON, { nullable: true })
  lastName?: any;

  @Field(() => GraphQLJSON, { nullable: true })
  grandfatherName?: any;

  @Field(() => GraphQLJSON, { nullable: true })
  locales?: any;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  dateOfBirth?: DateTimeFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  placeOfBirth?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  countryOfBirth?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  idNumber?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  passportNumber?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  Phone?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  emergencyContact?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  emergencyPhone?: StringFieldUpdateOperationsInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  numberOfChildren?: IntFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  employmentDate?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  probationDate?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  retirementDate?: DateTimeFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  deleted?: BoolFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => GenderUpdateOneWithoutEmployeesInput, { nullable: true })
  gender?: GenderUpdateOneWithoutEmployeesInput;

  @Field(() => MaritalStatusUpdateOneWithoutEmployeesInput, { nullable: true })
  maritalStatus?: MaritalStatusUpdateOneWithoutEmployeesInput;

  @Field(() => EmploymentTypeUpdateOneWithoutEmployeesInput, { nullable: true })
  employmentType?: EmploymentTypeUpdateOneWithoutEmployeesInput;

  @Field(() => EmploymentNatureUpdateOneWithoutEmployeesInput, {
    nullable: true,
  })
  employmentNature?: EmploymentNatureUpdateOneWithoutEmployeesInput;
}

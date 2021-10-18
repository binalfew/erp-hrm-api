import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GenderOrderByWithRelationInput } from '../gender/gender-order-by-with-relation.input';
import { NationalityOrderByWithRelationInput } from '../nationality/nationality-order-by-with-relation.input';
import { MaritalStatusOrderByWithRelationInput } from '../marital-status/marital-status-order-by-with-relation.input';
import { EmploymentTypeOrderByWithRelationInput } from '../employment-type/employment-type-order-by-with-relation.input';
import { EmploymentNatureOrderByWithRelationInput } from '../employment-nature/employment-nature-order-by-with-relation.input';

@InputType()
export class EmployeeOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  firstName?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  lastName?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  grandfatherName?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  locales?: keyof typeof SortOrder;

  @Field(() => GenderOrderByWithRelationInput, { nullable: true })
  gender?: GenderOrderByWithRelationInput;

  @Field(() => SortOrder, { nullable: true })
  genderId?: keyof typeof SortOrder;

  @Field(() => NationalityOrderByWithRelationInput, { nullable: true })
  nationality?: NationalityOrderByWithRelationInput;

  @Field(() => SortOrder, { nullable: true })
  nationalityId?: keyof typeof SortOrder;

  @Field(() => MaritalStatusOrderByWithRelationInput, { nullable: true })
  maritalStatus?: MaritalStatusOrderByWithRelationInput;

  @Field(() => SortOrder, { nullable: true })
  maritalStatusId?: keyof typeof SortOrder;

  @Field(() => EmploymentTypeOrderByWithRelationInput, { nullable: true })
  employmentType?: EmploymentTypeOrderByWithRelationInput;

  @Field(() => SortOrder, { nullable: true })
  employmentTypeId?: keyof typeof SortOrder;

  @Field(() => EmploymentNatureOrderByWithRelationInput, { nullable: true })
  employmentNature?: EmploymentNatureOrderByWithRelationInput;

  @Field(() => SortOrder, { nullable: true })
  employmentNatureId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  dateOfBirth?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  placeOfBirth?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  countryOfBirth?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  idNumber?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  passportNumber?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  Phone?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  emergencyContact?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  emergencyPhone?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  numberOfChildren?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  employmentDate?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  probationDate?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  retirementDate?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  deleted?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

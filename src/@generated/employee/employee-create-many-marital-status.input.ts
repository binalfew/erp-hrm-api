import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class EmployeeCreateManyMaritalStatusInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => GraphQLJSON, { nullable: false })
  firstName!: any;

  @Field(() => GraphQLJSON, { nullable: false })
  lastName!: any;

  @Field(() => GraphQLJSON, { nullable: false })
  grandfatherName!: any;

  @Field(() => GraphQLJSON, { nullable: true })
  locales?: any;

  @Field(() => Int, { nullable: true })
  genderId?: number;

  @Field(() => Int, { nullable: true })
  nationalityId?: number;

  @Field(() => Int, { nullable: true })
  employmentTypeId?: number;

  @Field(() => Int, { nullable: true })
  employmentNatureId?: number;

  @Field(() => Date, { nullable: true })
  dateOfBirth?: Date | string;

  @Field(() => String, { nullable: false })
  placeOfBirth!: string;

  @Field(() => String, { nullable: false })
  countryOfBirth!: string;

  @Field(() => String, { nullable: false })
  idNumber!: string;

  @Field(() => String, { nullable: false })
  passportNumber!: string;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  Phone!: string;

  @Field(() => String, { nullable: false })
  emergencyContact!: string;

  @Field(() => String, { nullable: false })
  emergencyPhone!: string;

  @Field(() => Int, { nullable: false })
  numberOfChildren!: number;

  @Field(() => Date, { nullable: true })
  employmentDate?: Date | string;

  @Field(() => Date, { nullable: true })
  probationDate?: Date | string;

  @Field(() => Date, { nullable: true })
  retirementDate?: Date | string;

  @Field(() => Boolean, { nullable: true })
  deleted?: boolean;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

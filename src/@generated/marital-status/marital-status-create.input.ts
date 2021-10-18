import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { EmployeeCreateNestedManyWithoutMaritalStatusInput } from '../employee/employee-create-nested-many-without-marital-status.input';

@InputType()
export class MaritalStatusCreateInput {
  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  code!: string;

  @Field(() => GraphQLJSON, { nullable: true })
  locales?: any;

  @Field(() => Boolean, { nullable: true })
  deleted?: boolean;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => EmployeeCreateNestedManyWithoutMaritalStatusInput, {
    nullable: true,
  })
  employees?: EmployeeCreateNestedManyWithoutMaritalStatusInput;
}

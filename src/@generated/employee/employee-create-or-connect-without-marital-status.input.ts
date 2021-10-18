import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeCreateWithoutMaritalStatusInput } from './employee-create-without-marital-status.input';

@InputType()
export class EmployeeCreateOrConnectWithoutMaritalStatusInput {
  @Field(() => EmployeeWhereUniqueInput, { nullable: false })
  where!: EmployeeWhereUniqueInput;

  @Field(() => EmployeeCreateWithoutMaritalStatusInput, { nullable: false })
  create!: EmployeeCreateWithoutMaritalStatusInput;
}

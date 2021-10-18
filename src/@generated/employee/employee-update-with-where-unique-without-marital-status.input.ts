import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutMaritalStatusInput } from './employee-update-without-marital-status.input';

@InputType()
export class EmployeeUpdateWithWhereUniqueWithoutMaritalStatusInput {
  @Field(() => EmployeeWhereUniqueInput, { nullable: false })
  where!: EmployeeWhereUniqueInput;

  @Field(() => EmployeeUpdateWithoutMaritalStatusInput, { nullable: false })
  data!: EmployeeUpdateWithoutMaritalStatusInput;
}

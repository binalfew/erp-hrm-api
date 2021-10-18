import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmploymentTypeCreateWithoutEmployeesInput } from './employment-type-create-without-employees.input';
import { EmploymentTypeCreateOrConnectWithoutEmployeesInput } from './employment-type-create-or-connect-without-employees.input';
import { EmploymentTypeWhereUniqueInput } from './employment-type-where-unique.input';

@InputType()
export class EmploymentTypeCreateNestedOneWithoutEmployeesInput {
  @Field(() => EmploymentTypeCreateWithoutEmployeesInput, { nullable: true })
  create?: EmploymentTypeCreateWithoutEmployeesInput;

  @Field(() => EmploymentTypeCreateOrConnectWithoutEmployeesInput, {
    nullable: true,
  })
  connectOrCreate?: EmploymentTypeCreateOrConnectWithoutEmployeesInput;

  @Field(() => EmploymentTypeWhereUniqueInput, { nullable: true })
  connect?: EmploymentTypeWhereUniqueInput;
}

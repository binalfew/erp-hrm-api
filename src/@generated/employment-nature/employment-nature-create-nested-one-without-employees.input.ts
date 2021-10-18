import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmploymentNatureCreateWithoutEmployeesInput } from './employment-nature-create-without-employees.input';
import { EmploymentNatureCreateOrConnectWithoutEmployeesInput } from './employment-nature-create-or-connect-without-employees.input';
import { EmploymentNatureWhereUniqueInput } from './employment-nature-where-unique.input';

@InputType()
export class EmploymentNatureCreateNestedOneWithoutEmployeesInput {
  @Field(() => EmploymentNatureCreateWithoutEmployeesInput, { nullable: true })
  create?: EmploymentNatureCreateWithoutEmployeesInput;

  @Field(() => EmploymentNatureCreateOrConnectWithoutEmployeesInput, {
    nullable: true,
  })
  connectOrCreate?: EmploymentNatureCreateOrConnectWithoutEmployeesInput;

  @Field(() => EmploymentNatureWhereUniqueInput, { nullable: true })
  connect?: EmploymentNatureWhereUniqueInput;
}

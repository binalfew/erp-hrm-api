import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmploymentTypeCreateWithoutEmployeesInput } from './employment-type-create-without-employees.input';
import { EmploymentTypeCreateOrConnectWithoutEmployeesInput } from './employment-type-create-or-connect-without-employees.input';
import { EmploymentTypeUpsertWithoutEmployeesInput } from './employment-type-upsert-without-employees.input';
import { EmploymentTypeWhereUniqueInput } from './employment-type-where-unique.input';
import { EmploymentTypeUpdateWithoutEmployeesInput } from './employment-type-update-without-employees.input';

@InputType()
export class EmploymentTypeUpdateOneWithoutEmployeesInput {
  @Field(() => EmploymentTypeCreateWithoutEmployeesInput, { nullable: true })
  create?: EmploymentTypeCreateWithoutEmployeesInput;

  @Field(() => EmploymentTypeCreateOrConnectWithoutEmployeesInput, {
    nullable: true,
  })
  connectOrCreate?: EmploymentTypeCreateOrConnectWithoutEmployeesInput;

  @Field(() => EmploymentTypeUpsertWithoutEmployeesInput, { nullable: true })
  upsert?: EmploymentTypeUpsertWithoutEmployeesInput;

  @Field(() => EmploymentTypeWhereUniqueInput, { nullable: true })
  connect?: EmploymentTypeWhereUniqueInput;

  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;

  @Field(() => Boolean, { nullable: true })
  delete?: boolean;

  @Field(() => EmploymentTypeUpdateWithoutEmployeesInput, { nullable: true })
  update?: EmploymentTypeUpdateWithoutEmployeesInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaritalStatusCreateWithoutEmployeesInput } from './marital-status-create-without-employees.input';
import { MaritalStatusCreateOrConnectWithoutEmployeesInput } from './marital-status-create-or-connect-without-employees.input';
import { MaritalStatusWhereUniqueInput } from './marital-status-where-unique.input';

@InputType()
export class MaritalStatusCreateNestedOneWithoutEmployeesInput {
  @Field(() => MaritalStatusCreateWithoutEmployeesInput, { nullable: true })
  create?: MaritalStatusCreateWithoutEmployeesInput;

  @Field(() => MaritalStatusCreateOrConnectWithoutEmployeesInput, {
    nullable: true,
  })
  connectOrCreate?: MaritalStatusCreateOrConnectWithoutEmployeesInput;

  @Field(() => MaritalStatusWhereUniqueInput, { nullable: true })
  connect?: MaritalStatusWhereUniqueInput;
}

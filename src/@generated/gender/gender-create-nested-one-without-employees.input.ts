import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenderCreateWithoutEmployeesInput } from './gender-create-without-employees.input';
import { GenderCreateOrConnectWithoutEmployeesInput } from './gender-create-or-connect-without-employees.input';
import { GenderWhereUniqueInput } from './gender-where-unique.input';

@InputType()
export class GenderCreateNestedOneWithoutEmployeesInput {
  @Field(() => GenderCreateWithoutEmployeesInput, { nullable: true })
  create?: GenderCreateWithoutEmployeesInput;

  @Field(() => GenderCreateOrConnectWithoutEmployeesInput, { nullable: true })
  connectOrCreate?: GenderCreateOrConnectWithoutEmployeesInput;

  @Field(() => GenderWhereUniqueInput, { nullable: true })
  connect?: GenderWhereUniqueInput;
}

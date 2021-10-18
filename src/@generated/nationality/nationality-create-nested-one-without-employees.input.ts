import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NationalityCreateWithoutEmployeesInput } from './nationality-create-without-employees.input';
import { NationalityCreateOrConnectWithoutEmployeesInput } from './nationality-create-or-connect-without-employees.input';
import { NationalityWhereUniqueInput } from './nationality-where-unique.input';

@InputType()
export class NationalityCreateNestedOneWithoutEmployeesInput {
  @Field(() => NationalityCreateWithoutEmployeesInput, { nullable: true })
  create?: NationalityCreateWithoutEmployeesInput;

  @Field(() => NationalityCreateOrConnectWithoutEmployeesInput, {
    nullable: true,
  })
  connectOrCreate?: NationalityCreateOrConnectWithoutEmployeesInput;

  @Field(() => NationalityWhereUniqueInput, { nullable: true })
  connect?: NationalityWhereUniqueInput;
}

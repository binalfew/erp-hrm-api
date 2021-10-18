import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NationalityCreateWithoutEmployeesInput } from './nationality-create-without-employees.input';
import { NationalityCreateOrConnectWithoutEmployeesInput } from './nationality-create-or-connect-without-employees.input';
import { NationalityUpsertWithoutEmployeesInput } from './nationality-upsert-without-employees.input';
import { NationalityWhereUniqueInput } from './nationality-where-unique.input';
import { NationalityUpdateWithoutEmployeesInput } from './nationality-update-without-employees.input';

@InputType()
export class NationalityUpdateOneWithoutEmployeesInput {
  @Field(() => NationalityCreateWithoutEmployeesInput, { nullable: true })
  create?: NationalityCreateWithoutEmployeesInput;

  @Field(() => NationalityCreateOrConnectWithoutEmployeesInput, {
    nullable: true,
  })
  connectOrCreate?: NationalityCreateOrConnectWithoutEmployeesInput;

  @Field(() => NationalityUpsertWithoutEmployeesInput, { nullable: true })
  upsert?: NationalityUpsertWithoutEmployeesInput;

  @Field(() => NationalityWhereUniqueInput, { nullable: true })
  connect?: NationalityWhereUniqueInput;

  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;

  @Field(() => Boolean, { nullable: true })
  delete?: boolean;

  @Field(() => NationalityUpdateWithoutEmployeesInput, { nullable: true })
  update?: NationalityUpdateWithoutEmployeesInput;
}

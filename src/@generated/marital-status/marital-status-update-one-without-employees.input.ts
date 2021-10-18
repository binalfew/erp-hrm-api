import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaritalStatusCreateWithoutEmployeesInput } from './marital-status-create-without-employees.input';
import { MaritalStatusCreateOrConnectWithoutEmployeesInput } from './marital-status-create-or-connect-without-employees.input';
import { MaritalStatusUpsertWithoutEmployeesInput } from './marital-status-upsert-without-employees.input';
import { MaritalStatusWhereUniqueInput } from './marital-status-where-unique.input';
import { MaritalStatusUpdateWithoutEmployeesInput } from './marital-status-update-without-employees.input';

@InputType()
export class MaritalStatusUpdateOneWithoutEmployeesInput {
  @Field(() => MaritalStatusCreateWithoutEmployeesInput, { nullable: true })
  create?: MaritalStatusCreateWithoutEmployeesInput;

  @Field(() => MaritalStatusCreateOrConnectWithoutEmployeesInput, {
    nullable: true,
  })
  connectOrCreate?: MaritalStatusCreateOrConnectWithoutEmployeesInput;

  @Field(() => MaritalStatusUpsertWithoutEmployeesInput, { nullable: true })
  upsert?: MaritalStatusUpsertWithoutEmployeesInput;

  @Field(() => MaritalStatusWhereUniqueInput, { nullable: true })
  connect?: MaritalStatusWhereUniqueInput;

  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;

  @Field(() => Boolean, { nullable: true })
  delete?: boolean;

  @Field(() => MaritalStatusUpdateWithoutEmployeesInput, { nullable: true })
  update?: MaritalStatusUpdateWithoutEmployeesInput;
}

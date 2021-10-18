import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaritalStatusUpdateWithoutEmployeesInput } from './marital-status-update-without-employees.input';
import { MaritalStatusCreateWithoutEmployeesInput } from './marital-status-create-without-employees.input';

@InputType()
export class MaritalStatusUpsertWithoutEmployeesInput {
  @Field(() => MaritalStatusUpdateWithoutEmployeesInput, { nullable: false })
  update!: MaritalStatusUpdateWithoutEmployeesInput;

  @Field(() => MaritalStatusCreateWithoutEmployeesInput, { nullable: false })
  create!: MaritalStatusCreateWithoutEmployeesInput;
}

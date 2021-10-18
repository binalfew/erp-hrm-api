import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaritalStatusWhereUniqueInput } from './marital-status-where-unique.input';
import { MaritalStatusCreateWithoutEmployeesInput } from './marital-status-create-without-employees.input';

@InputType()
export class MaritalStatusCreateOrConnectWithoutEmployeesInput {
  @Field(() => MaritalStatusWhereUniqueInput, { nullable: false })
  where!: MaritalStatusWhereUniqueInput;

  @Field(() => MaritalStatusCreateWithoutEmployeesInput, { nullable: false })
  create!: MaritalStatusCreateWithoutEmployeesInput;
}

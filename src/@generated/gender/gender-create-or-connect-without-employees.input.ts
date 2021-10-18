import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenderWhereUniqueInput } from './gender-where-unique.input';
import { GenderCreateWithoutEmployeesInput } from './gender-create-without-employees.input';

@InputType()
export class GenderCreateOrConnectWithoutEmployeesInput {
  @Field(() => GenderWhereUniqueInput, { nullable: false })
  where!: GenderWhereUniqueInput;

  @Field(() => GenderCreateWithoutEmployeesInput, { nullable: false })
  create!: GenderCreateWithoutEmployeesInput;
}

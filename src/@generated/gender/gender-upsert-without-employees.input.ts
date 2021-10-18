import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenderUpdateWithoutEmployeesInput } from './gender-update-without-employees.input';
import { GenderCreateWithoutEmployeesInput } from './gender-create-without-employees.input';

@InputType()
export class GenderUpsertWithoutEmployeesInput {
  @Field(() => GenderUpdateWithoutEmployeesInput, { nullable: false })
  update!: GenderUpdateWithoutEmployeesInput;

  @Field(() => GenderCreateWithoutEmployeesInput, { nullable: false })
  create!: GenderCreateWithoutEmployeesInput;
}

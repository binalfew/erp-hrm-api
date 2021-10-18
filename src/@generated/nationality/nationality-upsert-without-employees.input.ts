import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NationalityUpdateWithoutEmployeesInput } from './nationality-update-without-employees.input';
import { NationalityCreateWithoutEmployeesInput } from './nationality-create-without-employees.input';

@InputType()
export class NationalityUpsertWithoutEmployeesInput {
  @Field(() => NationalityUpdateWithoutEmployeesInput, { nullable: false })
  update!: NationalityUpdateWithoutEmployeesInput;

  @Field(() => NationalityCreateWithoutEmployeesInput, { nullable: false })
  create!: NationalityCreateWithoutEmployeesInput;
}

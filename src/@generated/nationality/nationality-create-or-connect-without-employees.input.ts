import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NationalityWhereUniqueInput } from './nationality-where-unique.input';
import { NationalityCreateWithoutEmployeesInput } from './nationality-create-without-employees.input';

@InputType()
export class NationalityCreateOrConnectWithoutEmployeesInput {
  @Field(() => NationalityWhereUniqueInput, { nullable: false })
  where!: NationalityWhereUniqueInput;

  @Field(() => NationalityCreateWithoutEmployeesInput, { nullable: false })
  create!: NationalityCreateWithoutEmployeesInput;
}

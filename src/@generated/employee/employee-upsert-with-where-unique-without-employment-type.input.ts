import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutEmploymentTypeInput } from './employee-update-without-employment-type.input';
import { EmployeeCreateWithoutEmploymentTypeInput } from './employee-create-without-employment-type.input';

@InputType()
export class EmployeeUpsertWithWhereUniqueWithoutEmploymentTypeInput {
  @Field(() => EmployeeWhereUniqueInput, { nullable: false })
  where!: EmployeeWhereUniqueInput;

  @Field(() => EmployeeUpdateWithoutEmploymentTypeInput, { nullable: false })
  update!: EmployeeUpdateWithoutEmploymentTypeInput;

  @Field(() => EmployeeCreateWithoutEmploymentTypeInput, { nullable: false })
  create!: EmployeeCreateWithoutEmploymentTypeInput;
}

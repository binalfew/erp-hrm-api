import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutEmploymentNatureInput } from './employee-update-without-employment-nature.input';
import { EmployeeCreateWithoutEmploymentNatureInput } from './employee-create-without-employment-nature.input';

@InputType()
export class EmployeeUpsertWithWhereUniqueWithoutEmploymentNatureInput {
  @Field(() => EmployeeWhereUniqueInput, { nullable: false })
  where!: EmployeeWhereUniqueInput;

  @Field(() => EmployeeUpdateWithoutEmploymentNatureInput, { nullable: false })
  update!: EmployeeUpdateWithoutEmploymentNatureInput;

  @Field(() => EmployeeCreateWithoutEmploymentNatureInput, { nullable: false })
  create!: EmployeeCreateWithoutEmploymentNatureInput;
}

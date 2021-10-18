import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutEmploymentNatureInput } from './employee-update-without-employment-nature.input';

@InputType()
export class EmployeeUpdateWithWhereUniqueWithoutEmploymentNatureInput {
  @Field(() => EmployeeWhereUniqueInput, { nullable: false })
  where!: EmployeeWhereUniqueInput;

  @Field(() => EmployeeUpdateWithoutEmploymentNatureInput, { nullable: false })
  data!: EmployeeUpdateWithoutEmploymentNatureInput;
}

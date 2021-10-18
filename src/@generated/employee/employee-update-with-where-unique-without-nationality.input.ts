import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutNationalityInput } from './employee-update-without-nationality.input';

@InputType()
export class EmployeeUpdateWithWhereUniqueWithoutNationalityInput {
  @Field(() => EmployeeWhereUniqueInput, { nullable: false })
  where!: EmployeeWhereUniqueInput;

  @Field(() => EmployeeUpdateWithoutNationalityInput, { nullable: false })
  data!: EmployeeUpdateWithoutNationalityInput;
}

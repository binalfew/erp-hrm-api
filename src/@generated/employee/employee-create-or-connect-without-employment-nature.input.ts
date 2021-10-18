import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeCreateWithoutEmploymentNatureInput } from './employee-create-without-employment-nature.input';

@InputType()
export class EmployeeCreateOrConnectWithoutEmploymentNatureInput {
  @Field(() => EmployeeWhereUniqueInput, { nullable: false })
  where!: EmployeeWhereUniqueInput;

  @Field(() => EmployeeCreateWithoutEmploymentNatureInput, { nullable: false })
  create!: EmployeeCreateWithoutEmploymentNatureInput;
}

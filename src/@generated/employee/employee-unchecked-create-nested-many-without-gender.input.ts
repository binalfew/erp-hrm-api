import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutGenderInput } from './employee-create-without-gender.input';
import { EmployeeCreateOrConnectWithoutGenderInput } from './employee-create-or-connect-without-gender.input';
import { EmployeeCreateManyGenderInputEnvelope } from './employee-create-many-gender-input-envelope.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@InputType()
export class EmployeeUncheckedCreateNestedManyWithoutGenderInput {
  @Field(() => [EmployeeCreateWithoutGenderInput], { nullable: true })
  create?: Array<EmployeeCreateWithoutGenderInput>;

  @Field(() => [EmployeeCreateOrConnectWithoutGenderInput], { nullable: true })
  connectOrCreate?: Array<EmployeeCreateOrConnectWithoutGenderInput>;

  @Field(() => EmployeeCreateManyGenderInputEnvelope, { nullable: true })
  createMany?: EmployeeCreateManyGenderInputEnvelope;

  @Field(() => [EmployeeWhereUniqueInput], { nullable: true })
  connect?: Array<EmployeeWhereUniqueInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutMaritalStatusInput } from './employee-create-without-marital-status.input';
import { EmployeeCreateOrConnectWithoutMaritalStatusInput } from './employee-create-or-connect-without-marital-status.input';
import { EmployeeCreateManyMaritalStatusInputEnvelope } from './employee-create-many-marital-status-input-envelope.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@InputType()
export class EmployeeUncheckedCreateNestedManyWithoutMaritalStatusInput {
  @Field(() => [EmployeeCreateWithoutMaritalStatusInput], { nullable: true })
  create?: Array<EmployeeCreateWithoutMaritalStatusInput>;

  @Field(() => [EmployeeCreateOrConnectWithoutMaritalStatusInput], {
    nullable: true,
  })
  connectOrCreate?: Array<EmployeeCreateOrConnectWithoutMaritalStatusInput>;

  @Field(() => EmployeeCreateManyMaritalStatusInputEnvelope, { nullable: true })
  createMany?: EmployeeCreateManyMaritalStatusInputEnvelope;

  @Field(() => [EmployeeWhereUniqueInput], { nullable: true })
  connect?: Array<EmployeeWhereUniqueInput>;
}

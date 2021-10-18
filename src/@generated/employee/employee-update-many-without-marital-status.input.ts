import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutMaritalStatusInput } from './employee-create-without-marital-status.input';
import { EmployeeCreateOrConnectWithoutMaritalStatusInput } from './employee-create-or-connect-without-marital-status.input';
import { EmployeeUpsertWithWhereUniqueWithoutMaritalStatusInput } from './employee-upsert-with-where-unique-without-marital-status.input';
import { EmployeeCreateManyMaritalStatusInputEnvelope } from './employee-create-many-marital-status-input-envelope.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithWhereUniqueWithoutMaritalStatusInput } from './employee-update-with-where-unique-without-marital-status.input';
import { EmployeeUpdateManyWithWhereWithoutMaritalStatusInput } from './employee-update-many-with-where-without-marital-status.input';
import { EmployeeScalarWhereInput } from './employee-scalar-where.input';

@InputType()
export class EmployeeUpdateManyWithoutMaritalStatusInput {
  @Field(() => [EmployeeCreateWithoutMaritalStatusInput], { nullable: true })
  create?: Array<EmployeeCreateWithoutMaritalStatusInput>;

  @Field(() => [EmployeeCreateOrConnectWithoutMaritalStatusInput], {
    nullable: true,
  })
  connectOrCreate?: Array<EmployeeCreateOrConnectWithoutMaritalStatusInput>;

  @Field(() => [EmployeeUpsertWithWhereUniqueWithoutMaritalStatusInput], {
    nullable: true,
  })
  upsert?: Array<EmployeeUpsertWithWhereUniqueWithoutMaritalStatusInput>;

  @Field(() => EmployeeCreateManyMaritalStatusInputEnvelope, { nullable: true })
  createMany?: EmployeeCreateManyMaritalStatusInputEnvelope;

  @Field(() => [EmployeeWhereUniqueInput], { nullable: true })
  connect?: Array<EmployeeWhereUniqueInput>;

  @Field(() => [EmployeeWhereUniqueInput], { nullable: true })
  set?: Array<EmployeeWhereUniqueInput>;

  @Field(() => [EmployeeWhereUniqueInput], { nullable: true })
  disconnect?: Array<EmployeeWhereUniqueInput>;

  @Field(() => [EmployeeWhereUniqueInput], { nullable: true })
  delete?: Array<EmployeeWhereUniqueInput>;

  @Field(() => [EmployeeUpdateWithWhereUniqueWithoutMaritalStatusInput], {
    nullable: true,
  })
  update?: Array<EmployeeUpdateWithWhereUniqueWithoutMaritalStatusInput>;

  @Field(() => [EmployeeUpdateManyWithWhereWithoutMaritalStatusInput], {
    nullable: true,
  })
  updateMany?: Array<EmployeeUpdateManyWithWhereWithoutMaritalStatusInput>;

  @Field(() => [EmployeeScalarWhereInput], { nullable: true })
  deleteMany?: Array<EmployeeScalarWhereInput>;
}

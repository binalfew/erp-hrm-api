import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutGenderInput } from './employee-create-without-gender.input';
import { EmployeeCreateOrConnectWithoutGenderInput } from './employee-create-or-connect-without-gender.input';
import { EmployeeUpsertWithWhereUniqueWithoutGenderInput } from './employee-upsert-with-where-unique-without-gender.input';
import { EmployeeCreateManyGenderInputEnvelope } from './employee-create-many-gender-input-envelope.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithWhereUniqueWithoutGenderInput } from './employee-update-with-where-unique-without-gender.input';
import { EmployeeUpdateManyWithWhereWithoutGenderInput } from './employee-update-many-with-where-without-gender.input';
import { EmployeeScalarWhereInput } from './employee-scalar-where.input';

@InputType()
export class EmployeeUncheckedUpdateManyWithoutGenderInput {
  @Field(() => [EmployeeCreateWithoutGenderInput], { nullable: true })
  create?: Array<EmployeeCreateWithoutGenderInput>;

  @Field(() => [EmployeeCreateOrConnectWithoutGenderInput], { nullable: true })
  connectOrCreate?: Array<EmployeeCreateOrConnectWithoutGenderInput>;

  @Field(() => [EmployeeUpsertWithWhereUniqueWithoutGenderInput], {
    nullable: true,
  })
  upsert?: Array<EmployeeUpsertWithWhereUniqueWithoutGenderInput>;

  @Field(() => EmployeeCreateManyGenderInputEnvelope, { nullable: true })
  createMany?: EmployeeCreateManyGenderInputEnvelope;

  @Field(() => [EmployeeWhereUniqueInput], { nullable: true })
  connect?: Array<EmployeeWhereUniqueInput>;

  @Field(() => [EmployeeWhereUniqueInput], { nullable: true })
  set?: Array<EmployeeWhereUniqueInput>;

  @Field(() => [EmployeeWhereUniqueInput], { nullable: true })
  disconnect?: Array<EmployeeWhereUniqueInput>;

  @Field(() => [EmployeeWhereUniqueInput], { nullable: true })
  delete?: Array<EmployeeWhereUniqueInput>;

  @Field(() => [EmployeeUpdateWithWhereUniqueWithoutGenderInput], {
    nullable: true,
  })
  update?: Array<EmployeeUpdateWithWhereUniqueWithoutGenderInput>;

  @Field(() => [EmployeeUpdateManyWithWhereWithoutGenderInput], {
    nullable: true,
  })
  updateMany?: Array<EmployeeUpdateManyWithWhereWithoutGenderInput>;

  @Field(() => [EmployeeScalarWhereInput], { nullable: true })
  deleteMany?: Array<EmployeeScalarWhereInput>;
}

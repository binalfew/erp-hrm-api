import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutNationalityInput } from './employee-create-without-nationality.input';
import { EmployeeCreateOrConnectWithoutNationalityInput } from './employee-create-or-connect-without-nationality.input';
import { EmployeeUpsertWithWhereUniqueWithoutNationalityInput } from './employee-upsert-with-where-unique-without-nationality.input';
import { EmployeeCreateManyNationalityInputEnvelope } from './employee-create-many-nationality-input-envelope.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithWhereUniqueWithoutNationalityInput } from './employee-update-with-where-unique-without-nationality.input';
import { EmployeeUpdateManyWithWhereWithoutNationalityInput } from './employee-update-many-with-where-without-nationality.input';
import { EmployeeScalarWhereInput } from './employee-scalar-where.input';

@InputType()
export class EmployeeUncheckedUpdateManyWithoutNationalityInput {
  @Field(() => [EmployeeCreateWithoutNationalityInput], { nullable: true })
  create?: Array<EmployeeCreateWithoutNationalityInput>;

  @Field(() => [EmployeeCreateOrConnectWithoutNationalityInput], {
    nullable: true,
  })
  connectOrCreate?: Array<EmployeeCreateOrConnectWithoutNationalityInput>;

  @Field(() => [EmployeeUpsertWithWhereUniqueWithoutNationalityInput], {
    nullable: true,
  })
  upsert?: Array<EmployeeUpsertWithWhereUniqueWithoutNationalityInput>;

  @Field(() => EmployeeCreateManyNationalityInputEnvelope, { nullable: true })
  createMany?: EmployeeCreateManyNationalityInputEnvelope;

  @Field(() => [EmployeeWhereUniqueInput], { nullable: true })
  connect?: Array<EmployeeWhereUniqueInput>;

  @Field(() => [EmployeeWhereUniqueInput], { nullable: true })
  set?: Array<EmployeeWhereUniqueInput>;

  @Field(() => [EmployeeWhereUniqueInput], { nullable: true })
  disconnect?: Array<EmployeeWhereUniqueInput>;

  @Field(() => [EmployeeWhereUniqueInput], { nullable: true })
  delete?: Array<EmployeeWhereUniqueInput>;

  @Field(() => [EmployeeUpdateWithWhereUniqueWithoutNationalityInput], {
    nullable: true,
  })
  update?: Array<EmployeeUpdateWithWhereUniqueWithoutNationalityInput>;

  @Field(() => [EmployeeUpdateManyWithWhereWithoutNationalityInput], {
    nullable: true,
  })
  updateMany?: Array<EmployeeUpdateManyWithWhereWithoutNationalityInput>;

  @Field(() => [EmployeeScalarWhereInput], { nullable: true })
  deleteMany?: Array<EmployeeScalarWhereInput>;
}

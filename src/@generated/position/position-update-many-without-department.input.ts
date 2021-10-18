import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionCreateWithoutDepartmentInput } from './position-create-without-department.input';
import { PositionCreateOrConnectWithoutDepartmentInput } from './position-create-or-connect-without-department.input';
import { PositionUpsertWithWhereUniqueWithoutDepartmentInput } from './position-upsert-with-where-unique-without-department.input';
import { PositionCreateManyDepartmentInputEnvelope } from './position-create-many-department-input-envelope.input';
import { PositionWhereUniqueInput } from './position-where-unique.input';
import { PositionUpdateWithWhereUniqueWithoutDepartmentInput } from './position-update-with-where-unique-without-department.input';
import { PositionUpdateManyWithWhereWithoutDepartmentInput } from './position-update-many-with-where-without-department.input';
import { PositionScalarWhereInput } from './position-scalar-where.input';

@InputType()
export class PositionUpdateManyWithoutDepartmentInput {
  @Field(() => [PositionCreateWithoutDepartmentInput], { nullable: true })
  create?: Array<PositionCreateWithoutDepartmentInput>;

  @Field(() => [PositionCreateOrConnectWithoutDepartmentInput], {
    nullable: true,
  })
  connectOrCreate?: Array<PositionCreateOrConnectWithoutDepartmentInput>;

  @Field(() => [PositionUpsertWithWhereUniqueWithoutDepartmentInput], {
    nullable: true,
  })
  upsert?: Array<PositionUpsertWithWhereUniqueWithoutDepartmentInput>;

  @Field(() => PositionCreateManyDepartmentInputEnvelope, { nullable: true })
  createMany?: PositionCreateManyDepartmentInputEnvelope;

  @Field(() => [PositionWhereUniqueInput], { nullable: true })
  connect?: Array<PositionWhereUniqueInput>;

  @Field(() => [PositionWhereUniqueInput], { nullable: true })
  set?: Array<PositionWhereUniqueInput>;

  @Field(() => [PositionWhereUniqueInput], { nullable: true })
  disconnect?: Array<PositionWhereUniqueInput>;

  @Field(() => [PositionWhereUniqueInput], { nullable: true })
  delete?: Array<PositionWhereUniqueInput>;

  @Field(() => [PositionUpdateWithWhereUniqueWithoutDepartmentInput], {
    nullable: true,
  })
  update?: Array<PositionUpdateWithWhereUniqueWithoutDepartmentInput>;

  @Field(() => [PositionUpdateManyWithWhereWithoutDepartmentInput], {
    nullable: true,
  })
  updateMany?: Array<PositionUpdateManyWithWhereWithoutDepartmentInput>;

  @Field(() => [PositionScalarWhereInput], { nullable: true })
  deleteMany?: Array<PositionScalarWhereInput>;
}

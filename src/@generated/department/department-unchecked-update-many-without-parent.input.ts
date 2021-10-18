import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutParentInput } from './department-create-without-parent.input';
import { DepartmentCreateOrConnectWithoutParentInput } from './department-create-or-connect-without-parent.input';
import { DepartmentUpsertWithWhereUniqueWithoutParentInput } from './department-upsert-with-where-unique-without-parent.input';
import { DepartmentCreateManyParentInputEnvelope } from './department-create-many-parent-input-envelope.input';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { DepartmentUpdateWithWhereUniqueWithoutParentInput } from './department-update-with-where-unique-without-parent.input';
import { DepartmentUpdateManyWithWhereWithoutParentInput } from './department-update-many-with-where-without-parent.input';
import { DepartmentScalarWhereInput } from './department-scalar-where.input';

@InputType()
export class DepartmentUncheckedUpdateManyWithoutParentInput {
  @Field(() => [DepartmentCreateWithoutParentInput], { nullable: true })
  create?: Array<DepartmentCreateWithoutParentInput>;

  @Field(() => [DepartmentCreateOrConnectWithoutParentInput], {
    nullable: true,
  })
  connectOrCreate?: Array<DepartmentCreateOrConnectWithoutParentInput>;

  @Field(() => [DepartmentUpsertWithWhereUniqueWithoutParentInput], {
    nullable: true,
  })
  upsert?: Array<DepartmentUpsertWithWhereUniqueWithoutParentInput>;

  @Field(() => DepartmentCreateManyParentInputEnvelope, { nullable: true })
  createMany?: DepartmentCreateManyParentInputEnvelope;

  @Field(() => [DepartmentWhereUniqueInput], { nullable: true })
  connect?: Array<DepartmentWhereUniqueInput>;

  @Field(() => [DepartmentWhereUniqueInput], { nullable: true })
  set?: Array<DepartmentWhereUniqueInput>;

  @Field(() => [DepartmentWhereUniqueInput], { nullable: true })
  disconnect?: Array<DepartmentWhereUniqueInput>;

  @Field(() => [DepartmentWhereUniqueInput], { nullable: true })
  delete?: Array<DepartmentWhereUniqueInput>;

  @Field(() => [DepartmentUpdateWithWhereUniqueWithoutParentInput], {
    nullable: true,
  })
  update?: Array<DepartmentUpdateWithWhereUniqueWithoutParentInput>;

  @Field(() => [DepartmentUpdateManyWithWhereWithoutParentInput], {
    nullable: true,
  })
  updateMany?: Array<DepartmentUpdateManyWithWhereWithoutParentInput>;

  @Field(() => [DepartmentScalarWhereInput], { nullable: true })
  deleteMany?: Array<DepartmentScalarWhereInput>;
}

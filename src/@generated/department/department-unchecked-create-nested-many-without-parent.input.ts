import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutParentInput } from './department-create-without-parent.input';
import { DepartmentCreateOrConnectWithoutParentInput } from './department-create-or-connect-without-parent.input';
import { DepartmentCreateManyParentInputEnvelope } from './department-create-many-parent-input-envelope.input';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';

@InputType()
export class DepartmentUncheckedCreateNestedManyWithoutParentInput {
  @Field(() => [DepartmentCreateWithoutParentInput], { nullable: true })
  create?: Array<DepartmentCreateWithoutParentInput>;

  @Field(() => [DepartmentCreateOrConnectWithoutParentInput], {
    nullable: true,
  })
  connectOrCreate?: Array<DepartmentCreateOrConnectWithoutParentInput>;

  @Field(() => DepartmentCreateManyParentInputEnvelope, { nullable: true })
  createMany?: DepartmentCreateManyParentInputEnvelope;

  @Field(() => [DepartmentWhereUniqueInput], { nullable: true })
  connect?: Array<DepartmentWhereUniqueInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutChildrenInput } from './department-create-without-children.input';
import { DepartmentCreateOrConnectWithoutChildrenInput } from './department-create-or-connect-without-children.input';
import { DepartmentUpsertWithoutChildrenInput } from './department-upsert-without-children.input';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { DepartmentUpdateWithoutChildrenInput } from './department-update-without-children.input';

@InputType()
export class DepartmentUpdateOneWithoutChildrenInput {
  @Field(() => DepartmentCreateWithoutChildrenInput, { nullable: true })
  create?: DepartmentCreateWithoutChildrenInput;

  @Field(() => DepartmentCreateOrConnectWithoutChildrenInput, {
    nullable: true,
  })
  connectOrCreate?: DepartmentCreateOrConnectWithoutChildrenInput;

  @Field(() => DepartmentUpsertWithoutChildrenInput, { nullable: true })
  upsert?: DepartmentUpsertWithoutChildrenInput;

  @Field(() => DepartmentWhereUniqueInput, { nullable: true })
  connect?: DepartmentWhereUniqueInput;

  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;

  @Field(() => Boolean, { nullable: true })
  delete?: boolean;

  @Field(() => DepartmentUpdateWithoutChildrenInput, { nullable: true })
  update?: DepartmentUpdateWithoutChildrenInput;
}

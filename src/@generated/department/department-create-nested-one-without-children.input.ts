import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutChildrenInput } from './department-create-without-children.input';
import { DepartmentCreateOrConnectWithoutChildrenInput } from './department-create-or-connect-without-children.input';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';

@InputType()
export class DepartmentCreateNestedOneWithoutChildrenInput {
  @Field(() => DepartmentCreateWithoutChildrenInput, { nullable: true })
  create?: DepartmentCreateWithoutChildrenInput;

  @Field(() => DepartmentCreateOrConnectWithoutChildrenInput, {
    nullable: true,
  })
  connectOrCreate?: DepartmentCreateOrConnectWithoutChildrenInput;

  @Field(() => DepartmentWhereUniqueInput, { nullable: true })
  connect?: DepartmentWhereUniqueInput;
}

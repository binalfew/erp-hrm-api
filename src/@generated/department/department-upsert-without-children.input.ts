import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentUpdateWithoutChildrenInput } from './department-update-without-children.input';
import { DepartmentCreateWithoutChildrenInput } from './department-create-without-children.input';

@InputType()
export class DepartmentUpsertWithoutChildrenInput {
  @Field(() => DepartmentUpdateWithoutChildrenInput, { nullable: false })
  update!: DepartmentUpdateWithoutChildrenInput;

  @Field(() => DepartmentCreateWithoutChildrenInput, { nullable: false })
  create!: DepartmentCreateWithoutChildrenInput;
}

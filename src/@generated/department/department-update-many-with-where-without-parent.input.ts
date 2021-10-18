import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentScalarWhereInput } from './department-scalar-where.input';
import { DepartmentUpdateManyMutationInput } from './department-update-many-mutation.input';

@InputType()
export class DepartmentUpdateManyWithWhereWithoutParentInput {
  @Field(() => DepartmentScalarWhereInput, { nullable: false })
  where!: DepartmentScalarWhereInput;

  @Field(() => DepartmentUpdateManyMutationInput, { nullable: false })
  data!: DepartmentUpdateManyMutationInput;
}

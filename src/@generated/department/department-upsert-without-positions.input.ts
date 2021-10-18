import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentUpdateWithoutPositionsInput } from './department-update-without-positions.input';
import { DepartmentCreateWithoutPositionsInput } from './department-create-without-positions.input';

@InputType()
export class DepartmentUpsertWithoutPositionsInput {
  @Field(() => DepartmentUpdateWithoutPositionsInput, { nullable: false })
  update!: DepartmentUpdateWithoutPositionsInput;

  @Field(() => DepartmentCreateWithoutPositionsInput, { nullable: false })
  create!: DepartmentCreateWithoutPositionsInput;
}

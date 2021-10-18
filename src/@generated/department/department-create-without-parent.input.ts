import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { DepartmentCreateNestedManyWithoutParentInput } from './department-create-nested-many-without-parent.input';
import { PositionCreateNestedManyWithoutDepartmentInput } from '../position/position-create-nested-many-without-department.input';

@InputType()
export class DepartmentCreateWithoutParentInput {
  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  code!: string;

  @Field(() => GraphQLJSON, { nullable: true })
  locales?: any;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => DepartmentCreateNestedManyWithoutParentInput, { nullable: true })
  children?: DepartmentCreateNestedManyWithoutParentInput;

  @Field(() => PositionCreateNestedManyWithoutDepartmentInput, {
    nullable: true,
  })
  positions?: PositionCreateNestedManyWithoutDepartmentInput;
}

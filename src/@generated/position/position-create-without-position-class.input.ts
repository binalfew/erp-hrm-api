import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateNestedOneWithoutPositionsInput } from '../department/department-create-nested-one-without-positions.input';

@InputType()
export class PositionCreateWithoutPositionClassInput {
  @Field(() => String, { nullable: false })
  code!: string;

  @Field(() => Boolean, { nullable: true })
  vacant?: boolean;

  @Field(() => Boolean, { nullable: true })
  deleted?: boolean;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => DepartmentCreateNestedOneWithoutPositionsInput, {
    nullable: true,
  })
  department?: DepartmentCreateNestedOneWithoutPositionsInput;
}

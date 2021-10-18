import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassCreateNestedOneWithoutPositionsInput } from '../position-class/position-class-create-nested-one-without-positions.input';
import { DepartmentCreateNestedOneWithoutPositionsInput } from '../department/department-create-nested-one-without-positions.input';

@InputType()
export class PositionCreateInput {
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

  @Field(() => PositionClassCreateNestedOneWithoutPositionsInput, {
    nullable: true,
  })
  positionClass?: PositionClassCreateNestedOneWithoutPositionsInput;

  @Field(() => DepartmentCreateNestedOneWithoutPositionsInput, {
    nullable: true,
  })
  department?: DepartmentCreateNestedOneWithoutPositionsInput;
}

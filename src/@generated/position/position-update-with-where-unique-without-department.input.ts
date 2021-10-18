import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionWhereUniqueInput } from './position-where-unique.input';
import { PositionUpdateWithoutDepartmentInput } from './position-update-without-department.input';

@InputType()
export class PositionUpdateWithWhereUniqueWithoutDepartmentInput {
  @Field(() => PositionWhereUniqueInput, { nullable: false })
  where!: PositionWhereUniqueInput;

  @Field(() => PositionUpdateWithoutDepartmentInput, { nullable: false })
  data!: PositionUpdateWithoutDepartmentInput;
}

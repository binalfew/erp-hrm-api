import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionWhereUniqueInput } from './position-where-unique.input';
import { PositionCreateWithoutDepartmentInput } from './position-create-without-department.input';

@InputType()
export class PositionCreateOrConnectWithoutDepartmentInput {
  @Field(() => PositionWhereUniqueInput, { nullable: false })
  where!: PositionWhereUniqueInput;

  @Field(() => PositionCreateWithoutDepartmentInput, { nullable: false })
  create!: PositionCreateWithoutDepartmentInput;
}

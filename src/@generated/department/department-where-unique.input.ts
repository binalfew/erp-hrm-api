import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class DepartmentWhereUniqueInput {
  @Field(() => Int, { nullable: false })
  id!: number;
}

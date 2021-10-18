import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EmployeeSumAggregate {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => Int, { nullable: true })
  genderId?: number;

  @Field(() => Int, { nullable: true })
  nationalityId?: number;

  @Field(() => Int, { nullable: true })
  maritalStatusId?: number;

  @Field(() => Int, { nullable: true })
  employmentTypeId?: number;

  @Field(() => Int, { nullable: true })
  employmentNatureId?: number;

  @Field(() => Int, { nullable: true })
  numberOfChildren?: number;
}

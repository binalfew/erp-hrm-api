import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class EmployeeAvgAggregate {
  @Field(() => Float, { nullable: true })
  id?: number;

  @Field(() => Float, { nullable: true })
  genderId?: number;

  @Field(() => Float, { nullable: true })
  nationalityId?: number;

  @Field(() => Float, { nullable: true })
  maritalStatusId?: number;

  @Field(() => Float, { nullable: true })
  employmentTypeId?: number;

  @Field(() => Float, { nullable: true })
  employmentNatureId?: number;

  @Field(() => Float, { nullable: true })
  numberOfChildren?: number;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class SalaryScaleSumAggregate {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => Int, { nullable: true })
  jobGradeId?: number;

  @Field(() => Int, { nullable: true })
  jobStepId?: number;

  @Field(() => Float, { nullable: true })
  salary?: number;
}

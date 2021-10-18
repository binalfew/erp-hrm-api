import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class PositionClassSumAggregate {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => Int, { nullable: true })
  genderId?: number;

  @Field(() => Int, { nullable: true })
  positionClassTypeId?: number;

  @Field(() => Int, { nullable: true })
  positionClassCategoryId?: number;

  @Field(() => Int, { nullable: true })
  salaryScaleId?: number;

  @Field(() => Int, { nullable: true })
  minimumAge?: number;

  @Field(() => Int, { nullable: true })
  maximumAge?: number;

  @Field(() => GraphQLDecimal, { nullable: true })
  monthlyWorkingHours?: any;

  @Field(() => GraphQLDecimal, { nullable: true })
  salary?: any;
}

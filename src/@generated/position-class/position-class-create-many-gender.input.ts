import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@InputType()
export class PositionClassCreateManyGenderInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  code!: string;

  @Field(() => GraphQLJSON, { nullable: true })
  locales?: any;

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

  @Field(() => String, { nullable: true })
  specification?: string;

  @Field(() => Boolean, { nullable: true })
  deleted?: boolean;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

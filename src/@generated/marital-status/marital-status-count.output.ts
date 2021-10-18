import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MaritalStatusCount {
  @Field(() => Int, { nullable: false })
  employees!: number;
}

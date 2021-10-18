import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassTypeWhereInput } from './position-class-type-where.input';

@InputType()
export class PositionClassTypeRelationFilter {
  @Field(() => PositionClassTypeWhereInput, { nullable: true })
  is?: PositionClassTypeWhereInput;

  @Field(() => PositionClassTypeWhereInput, { nullable: true })
  isNot?: PositionClassTypeWhereInput;
}

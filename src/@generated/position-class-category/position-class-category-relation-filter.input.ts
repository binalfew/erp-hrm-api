import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassCategoryWhereInput } from './position-class-category-where.input';

@InputType()
export class PositionClassCategoryRelationFilter {
  @Field(() => PositionClassCategoryWhereInput, { nullable: true })
  is?: PositionClassCategoryWhereInput;

  @Field(() => PositionClassCategoryWhereInput, { nullable: true })
  isNot?: PositionClassCategoryWhereInput;
}

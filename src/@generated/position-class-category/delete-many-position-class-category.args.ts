import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionClassCategoryWhereInput } from './position-class-category-where.input';

@ArgsType()
export class DeleteManyPositionClassCategoryArgs {
  @Field(() => PositionClassCategoryWhereInput, { nullable: true })
  where?: PositionClassCategoryWhereInput;
}

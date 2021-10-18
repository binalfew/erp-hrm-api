import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionClassCategoryUpdateInput } from './position-class-category-update.input';
import { PositionClassCategoryWhereUniqueInput } from './position-class-category-where-unique.input';

@ArgsType()
export class UpdateOnePositionClassCategoryArgs {
  @Field(() => PositionClassCategoryUpdateInput, { nullable: false })
  data!: PositionClassCategoryUpdateInput;

  @Field(() => PositionClassCategoryWhereUniqueInput, { nullable: false })
  where!: PositionClassCategoryWhereUniqueInput;
}

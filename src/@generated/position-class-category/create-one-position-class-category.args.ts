import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionClassCategoryCreateInput } from './position-class-category-create.input';

@ArgsType()
export class CreateOnePositionClassCategoryArgs {
  @Field(() => PositionClassCategoryCreateInput, { nullable: false })
  data!: PositionClassCategoryCreateInput;
}

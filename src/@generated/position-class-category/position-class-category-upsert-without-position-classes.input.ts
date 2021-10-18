import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassCategoryUpdateWithoutPositionClassesInput } from './position-class-category-update-without-position-classes.input';
import { PositionClassCategoryCreateWithoutPositionClassesInput } from './position-class-category-create-without-position-classes.input';

@InputType()
export class PositionClassCategoryUpsertWithoutPositionClassesInput {
  @Field(() => PositionClassCategoryUpdateWithoutPositionClassesInput, {
    nullable: false,
  })
  update!: PositionClassCategoryUpdateWithoutPositionClassesInput;

  @Field(() => PositionClassCategoryCreateWithoutPositionClassesInput, {
    nullable: false,
  })
  create!: PositionClassCategoryCreateWithoutPositionClassesInput;
}

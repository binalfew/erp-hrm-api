import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassWhereUniqueInput } from './position-class-where-unique.input';
import { PositionClassUpdateWithoutPositionClassCategoryInput } from './position-class-update-without-position-class-category.input';
import { PositionClassCreateWithoutPositionClassCategoryInput } from './position-class-create-without-position-class-category.input';

@InputType()
export class PositionClassUpsertWithWhereUniqueWithoutPositionClassCategoryInput {
  @Field(() => PositionClassWhereUniqueInput, { nullable: false })
  where!: PositionClassWhereUniqueInput;

  @Field(() => PositionClassUpdateWithoutPositionClassCategoryInput, {
    nullable: false,
  })
  update!: PositionClassUpdateWithoutPositionClassCategoryInput;

  @Field(() => PositionClassCreateWithoutPositionClassCategoryInput, {
    nullable: false,
  })
  create!: PositionClassCreateWithoutPositionClassCategoryInput;
}

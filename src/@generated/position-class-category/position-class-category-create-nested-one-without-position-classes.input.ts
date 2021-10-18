import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassCategoryCreateWithoutPositionClassesInput } from './position-class-category-create-without-position-classes.input';
import { PositionClassCategoryCreateOrConnectWithoutPositionClassesInput } from './position-class-category-create-or-connect-without-position-classes.input';
import { PositionClassCategoryWhereUniqueInput } from './position-class-category-where-unique.input';

@InputType()
export class PositionClassCategoryCreateNestedOneWithoutPositionClassesInput {
  @Field(() => PositionClassCategoryCreateWithoutPositionClassesInput, {
    nullable: true,
  })
  create?: PositionClassCategoryCreateWithoutPositionClassesInput;

  @Field(
    () => PositionClassCategoryCreateOrConnectWithoutPositionClassesInput,
    { nullable: true },
  )
  connectOrCreate?: PositionClassCategoryCreateOrConnectWithoutPositionClassesInput;

  @Field(() => PositionClassCategoryWhereUniqueInput, { nullable: true })
  connect?: PositionClassCategoryWhereUniqueInput;
}

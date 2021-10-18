import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassCreateWithoutPositionClassCategoryInput } from './position-class-create-without-position-class-category.input';
import { PositionClassCreateOrConnectWithoutPositionClassCategoryInput } from './position-class-create-or-connect-without-position-class-category.input';
import { PositionClassCreateManyPositionClassCategoryInputEnvelope } from './position-class-create-many-position-class-category-input-envelope.input';
import { PositionClassWhereUniqueInput } from './position-class-where-unique.input';

@InputType()
export class PositionClassCreateNestedManyWithoutPositionClassCategoryInput {
  @Field(() => [PositionClassCreateWithoutPositionClassCategoryInput], {
    nullable: true,
  })
  create?: Array<PositionClassCreateWithoutPositionClassCategoryInput>;

  @Field(
    () => [PositionClassCreateOrConnectWithoutPositionClassCategoryInput],
    { nullable: true },
  )
  connectOrCreate?: Array<PositionClassCreateOrConnectWithoutPositionClassCategoryInput>;

  @Field(() => PositionClassCreateManyPositionClassCategoryInputEnvelope, {
    nullable: true,
  })
  createMany?: PositionClassCreateManyPositionClassCategoryInputEnvelope;

  @Field(() => [PositionClassWhereUniqueInput], { nullable: true })
  connect?: Array<PositionClassWhereUniqueInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassCreateWithoutPositionClassCategoryInput } from './position-class-create-without-position-class-category.input';
import { PositionClassCreateOrConnectWithoutPositionClassCategoryInput } from './position-class-create-or-connect-without-position-class-category.input';
import { PositionClassUpsertWithWhereUniqueWithoutPositionClassCategoryInput } from './position-class-upsert-with-where-unique-without-position-class-category.input';
import { PositionClassCreateManyPositionClassCategoryInputEnvelope } from './position-class-create-many-position-class-category-input-envelope.input';
import { PositionClassWhereUniqueInput } from './position-class-where-unique.input';
import { PositionClassUpdateWithWhereUniqueWithoutPositionClassCategoryInput } from './position-class-update-with-where-unique-without-position-class-category.input';
import { PositionClassUpdateManyWithWhereWithoutPositionClassCategoryInput } from './position-class-update-many-with-where-without-position-class-category.input';
import { PositionClassScalarWhereInput } from './position-class-scalar-where.input';

@InputType()
export class PositionClassUpdateManyWithoutPositionClassCategoryInput {
  @Field(() => [PositionClassCreateWithoutPositionClassCategoryInput], {
    nullable: true,
  })
  create?: Array<PositionClassCreateWithoutPositionClassCategoryInput>;

  @Field(
    () => [PositionClassCreateOrConnectWithoutPositionClassCategoryInput],
    { nullable: true },
  )
  connectOrCreate?: Array<PositionClassCreateOrConnectWithoutPositionClassCategoryInput>;

  @Field(
    () => [PositionClassUpsertWithWhereUniqueWithoutPositionClassCategoryInput],
    { nullable: true },
  )
  upsert?: Array<PositionClassUpsertWithWhereUniqueWithoutPositionClassCategoryInput>;

  @Field(() => PositionClassCreateManyPositionClassCategoryInputEnvelope, {
    nullable: true,
  })
  createMany?: PositionClassCreateManyPositionClassCategoryInputEnvelope;

  @Field(() => [PositionClassWhereUniqueInput], { nullable: true })
  connect?: Array<PositionClassWhereUniqueInput>;

  @Field(() => [PositionClassWhereUniqueInput], { nullable: true })
  set?: Array<PositionClassWhereUniqueInput>;

  @Field(() => [PositionClassWhereUniqueInput], { nullable: true })
  disconnect?: Array<PositionClassWhereUniqueInput>;

  @Field(() => [PositionClassWhereUniqueInput], { nullable: true })
  delete?: Array<PositionClassWhereUniqueInput>;

  @Field(
    () => [PositionClassUpdateWithWhereUniqueWithoutPositionClassCategoryInput],
    { nullable: true },
  )
  update?: Array<PositionClassUpdateWithWhereUniqueWithoutPositionClassCategoryInput>;

  @Field(
    () => [PositionClassUpdateManyWithWhereWithoutPositionClassCategoryInput],
    { nullable: true },
  )
  updateMany?: Array<PositionClassUpdateManyWithWhereWithoutPositionClassCategoryInput>;

  @Field(() => [PositionClassScalarWhereInput], { nullable: true })
  deleteMany?: Array<PositionClassScalarWhereInput>;
}

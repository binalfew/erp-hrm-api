import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassWhereUniqueInput } from './position-class-where-unique.input';
import { PositionClassUpdateWithoutPositionClassTypeInput } from './position-class-update-without-position-class-type.input';
import { PositionClassCreateWithoutPositionClassTypeInput } from './position-class-create-without-position-class-type.input';

@InputType()
export class PositionClassUpsertWithWhereUniqueWithoutPositionClassTypeInput {
  @Field(() => PositionClassWhereUniqueInput, { nullable: false })
  where!: PositionClassWhereUniqueInput;

  @Field(() => PositionClassUpdateWithoutPositionClassTypeInput, {
    nullable: false,
  })
  update!: PositionClassUpdateWithoutPositionClassTypeInput;

  @Field(() => PositionClassCreateWithoutPositionClassTypeInput, {
    nullable: false,
  })
  create!: PositionClassCreateWithoutPositionClassTypeInput;
}

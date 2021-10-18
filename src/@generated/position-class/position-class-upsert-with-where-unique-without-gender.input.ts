import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassWhereUniqueInput } from './position-class-where-unique.input';
import { PositionClassUpdateWithoutGenderInput } from './position-class-update-without-gender.input';
import { PositionClassCreateWithoutGenderInput } from './position-class-create-without-gender.input';

@InputType()
export class PositionClassUpsertWithWhereUniqueWithoutGenderInput {
  @Field(() => PositionClassWhereUniqueInput, { nullable: false })
  where!: PositionClassWhereUniqueInput;

  @Field(() => PositionClassUpdateWithoutGenderInput, { nullable: false })
  update!: PositionClassUpdateWithoutGenderInput;

  @Field(() => PositionClassCreateWithoutGenderInput, { nullable: false })
  create!: PositionClassCreateWithoutGenderInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassWhereUniqueInput } from './position-class-where-unique.input';
import { PositionClassUpdateWithoutGenderInput } from './position-class-update-without-gender.input';

@InputType()
export class PositionClassUpdateWithWhereUniqueWithoutGenderInput {
  @Field(() => PositionClassWhereUniqueInput, { nullable: false })
  where!: PositionClassWhereUniqueInput;

  @Field(() => PositionClassUpdateWithoutGenderInput, { nullable: false })
  data!: PositionClassUpdateWithoutGenderInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionWhereUniqueInput } from './position-where-unique.input';
import { PositionUpdateWithoutPositionClassInput } from './position-update-without-position-class.input';
import { PositionCreateWithoutPositionClassInput } from './position-create-without-position-class.input';

@InputType()
export class PositionUpsertWithWhereUniqueWithoutPositionClassInput {
  @Field(() => PositionWhereUniqueInput, { nullable: false })
  where!: PositionWhereUniqueInput;

  @Field(() => PositionUpdateWithoutPositionClassInput, { nullable: false })
  update!: PositionUpdateWithoutPositionClassInput;

  @Field(() => PositionCreateWithoutPositionClassInput, { nullable: false })
  create!: PositionCreateWithoutPositionClassInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenderUpdateWithoutPositionClassesInput } from './gender-update-without-position-classes.input';
import { GenderCreateWithoutPositionClassesInput } from './gender-create-without-position-classes.input';

@InputType()
export class GenderUpsertWithoutPositionClassesInput {
  @Field(() => GenderUpdateWithoutPositionClassesInput, { nullable: false })
  update!: GenderUpdateWithoutPositionClassesInput;

  @Field(() => GenderCreateWithoutPositionClassesInput, { nullable: false })
  create!: GenderCreateWithoutPositionClassesInput;
}

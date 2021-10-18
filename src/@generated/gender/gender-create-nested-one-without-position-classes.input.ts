import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenderCreateWithoutPositionClassesInput } from './gender-create-without-position-classes.input';
import { GenderCreateOrConnectWithoutPositionClassesInput } from './gender-create-or-connect-without-position-classes.input';
import { GenderWhereUniqueInput } from './gender-where-unique.input';

@InputType()
export class GenderCreateNestedOneWithoutPositionClassesInput {
  @Field(() => GenderCreateWithoutPositionClassesInput, { nullable: true })
  create?: GenderCreateWithoutPositionClassesInput;

  @Field(() => GenderCreateOrConnectWithoutPositionClassesInput, {
    nullable: true,
  })
  connectOrCreate?: GenderCreateOrConnectWithoutPositionClassesInput;

  @Field(() => GenderWhereUniqueInput, { nullable: true })
  connect?: GenderWhereUniqueInput;
}

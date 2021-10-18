import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassTypeWhereUniqueInput } from './position-class-type-where-unique.input';
import { PositionClassTypeCreateWithoutPositionClassesInput } from './position-class-type-create-without-position-classes.input';

@InputType()
export class PositionClassTypeCreateOrConnectWithoutPositionClassesInput {
  @Field(() => PositionClassTypeWhereUniqueInput, { nullable: false })
  where!: PositionClassTypeWhereUniqueInput;

  @Field(() => PositionClassTypeCreateWithoutPositionClassesInput, {
    nullable: false,
  })
  create!: PositionClassTypeCreateWithoutPositionClassesInput;
}

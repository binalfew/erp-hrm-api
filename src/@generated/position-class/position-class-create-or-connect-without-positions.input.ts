import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassWhereUniqueInput } from './position-class-where-unique.input';
import { PositionClassCreateWithoutPositionsInput } from './position-class-create-without-positions.input';

@InputType()
export class PositionClassCreateOrConnectWithoutPositionsInput {
  @Field(() => PositionClassWhereUniqueInput, { nullable: false })
  where!: PositionClassWhereUniqueInput;

  @Field(() => PositionClassCreateWithoutPositionsInput, { nullable: false })
  create!: PositionClassCreateWithoutPositionsInput;
}

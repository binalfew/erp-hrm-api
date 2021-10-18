import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassCreateWithoutPositionsInput } from './position-class-create-without-positions.input';
import { PositionClassCreateOrConnectWithoutPositionsInput } from './position-class-create-or-connect-without-positions.input';
import { PositionClassWhereUniqueInput } from './position-class-where-unique.input';

@InputType()
export class PositionClassCreateNestedOneWithoutPositionsInput {
  @Field(() => PositionClassCreateWithoutPositionsInput, { nullable: true })
  create?: PositionClassCreateWithoutPositionsInput;

  @Field(() => PositionClassCreateOrConnectWithoutPositionsInput, {
    nullable: true,
  })
  connectOrCreate?: PositionClassCreateOrConnectWithoutPositionsInput;

  @Field(() => PositionClassWhereUniqueInput, { nullable: true })
  connect?: PositionClassWhereUniqueInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassCreateWithoutGenderInput } from './position-class-create-without-gender.input';
import { PositionClassCreateOrConnectWithoutGenderInput } from './position-class-create-or-connect-without-gender.input';
import { PositionClassCreateManyGenderInputEnvelope } from './position-class-create-many-gender-input-envelope.input';
import { PositionClassWhereUniqueInput } from './position-class-where-unique.input';

@InputType()
export class PositionClassUncheckedCreateNestedManyWithoutGenderInput {
  @Field(() => [PositionClassCreateWithoutGenderInput], { nullable: true })
  create?: Array<PositionClassCreateWithoutGenderInput>;

  @Field(() => [PositionClassCreateOrConnectWithoutGenderInput], {
    nullable: true,
  })
  connectOrCreate?: Array<PositionClassCreateOrConnectWithoutGenderInput>;

  @Field(() => PositionClassCreateManyGenderInputEnvelope, { nullable: true })
  createMany?: PositionClassCreateManyGenderInputEnvelope;

  @Field(() => [PositionClassWhereUniqueInput], { nullable: true })
  connect?: Array<PositionClassWhereUniqueInput>;
}

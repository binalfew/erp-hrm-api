import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionCreateWithoutPositionClassInput } from './position-create-without-position-class.input';
import { PositionCreateOrConnectWithoutPositionClassInput } from './position-create-or-connect-without-position-class.input';
import { PositionUpsertWithWhereUniqueWithoutPositionClassInput } from './position-upsert-with-where-unique-without-position-class.input';
import { PositionCreateManyPositionClassInputEnvelope } from './position-create-many-position-class-input-envelope.input';
import { PositionWhereUniqueInput } from './position-where-unique.input';
import { PositionUpdateWithWhereUniqueWithoutPositionClassInput } from './position-update-with-where-unique-without-position-class.input';
import { PositionUpdateManyWithWhereWithoutPositionClassInput } from './position-update-many-with-where-without-position-class.input';
import { PositionScalarWhereInput } from './position-scalar-where.input';

@InputType()
export class PositionUncheckedUpdateManyWithoutPositionClassInput {
  @Field(() => [PositionCreateWithoutPositionClassInput], { nullable: true })
  create?: Array<PositionCreateWithoutPositionClassInput>;

  @Field(() => [PositionCreateOrConnectWithoutPositionClassInput], {
    nullable: true,
  })
  connectOrCreate?: Array<PositionCreateOrConnectWithoutPositionClassInput>;

  @Field(() => [PositionUpsertWithWhereUniqueWithoutPositionClassInput], {
    nullable: true,
  })
  upsert?: Array<PositionUpsertWithWhereUniqueWithoutPositionClassInput>;

  @Field(() => PositionCreateManyPositionClassInputEnvelope, { nullable: true })
  createMany?: PositionCreateManyPositionClassInputEnvelope;

  @Field(() => [PositionWhereUniqueInput], { nullable: true })
  connect?: Array<PositionWhereUniqueInput>;

  @Field(() => [PositionWhereUniqueInput], { nullable: true })
  set?: Array<PositionWhereUniqueInput>;

  @Field(() => [PositionWhereUniqueInput], { nullable: true })
  disconnect?: Array<PositionWhereUniqueInput>;

  @Field(() => [PositionWhereUniqueInput], { nullable: true })
  delete?: Array<PositionWhereUniqueInput>;

  @Field(() => [PositionUpdateWithWhereUniqueWithoutPositionClassInput], {
    nullable: true,
  })
  update?: Array<PositionUpdateWithWhereUniqueWithoutPositionClassInput>;

  @Field(() => [PositionUpdateManyWithWhereWithoutPositionClassInput], {
    nullable: true,
  })
  updateMany?: Array<PositionUpdateManyWithWhereWithoutPositionClassInput>;

  @Field(() => [PositionScalarWhereInput], { nullable: true })
  deleteMany?: Array<PositionScalarWhereInput>;
}

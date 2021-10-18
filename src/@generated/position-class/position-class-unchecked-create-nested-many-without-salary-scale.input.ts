import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassCreateWithoutSalaryScaleInput } from './position-class-create-without-salary-scale.input';
import { PositionClassCreateOrConnectWithoutSalaryScaleInput } from './position-class-create-or-connect-without-salary-scale.input';
import { PositionClassCreateManySalaryScaleInputEnvelope } from './position-class-create-many-salary-scale-input-envelope.input';
import { PositionClassWhereUniqueInput } from './position-class-where-unique.input';

@InputType()
export class PositionClassUncheckedCreateNestedManyWithoutSalaryScaleInput {
  @Field(() => [PositionClassCreateWithoutSalaryScaleInput], { nullable: true })
  create?: Array<PositionClassCreateWithoutSalaryScaleInput>;

  @Field(() => [PositionClassCreateOrConnectWithoutSalaryScaleInput], {
    nullable: true,
  })
  connectOrCreate?: Array<PositionClassCreateOrConnectWithoutSalaryScaleInput>;

  @Field(() => PositionClassCreateManySalaryScaleInputEnvelope, {
    nullable: true,
  })
  createMany?: PositionClassCreateManySalaryScaleInputEnvelope;

  @Field(() => [PositionClassWhereUniqueInput], { nullable: true })
  connect?: Array<PositionClassWhereUniqueInput>;
}

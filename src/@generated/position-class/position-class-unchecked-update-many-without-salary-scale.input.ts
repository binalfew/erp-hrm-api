import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassCreateWithoutSalaryScaleInput } from './position-class-create-without-salary-scale.input';
import { PositionClassCreateOrConnectWithoutSalaryScaleInput } from './position-class-create-or-connect-without-salary-scale.input';
import { PositionClassUpsertWithWhereUniqueWithoutSalaryScaleInput } from './position-class-upsert-with-where-unique-without-salary-scale.input';
import { PositionClassCreateManySalaryScaleInputEnvelope } from './position-class-create-many-salary-scale-input-envelope.input';
import { PositionClassWhereUniqueInput } from './position-class-where-unique.input';
import { PositionClassUpdateWithWhereUniqueWithoutSalaryScaleInput } from './position-class-update-with-where-unique-without-salary-scale.input';
import { PositionClassUpdateManyWithWhereWithoutSalaryScaleInput } from './position-class-update-many-with-where-without-salary-scale.input';
import { PositionClassScalarWhereInput } from './position-class-scalar-where.input';

@InputType()
export class PositionClassUncheckedUpdateManyWithoutSalaryScaleInput {

    @Field(() => [PositionClassCreateWithoutSalaryScaleInput], {nullable:true})
    create?: Array<PositionClassCreateWithoutSalaryScaleInput>;

    @Field(() => [PositionClassCreateOrConnectWithoutSalaryScaleInput], {nullable:true})
    connectOrCreate?: Array<PositionClassCreateOrConnectWithoutSalaryScaleInput>;

    @Field(() => [PositionClassUpsertWithWhereUniqueWithoutSalaryScaleInput], {nullable:true})
    upsert?: Array<PositionClassUpsertWithWhereUniqueWithoutSalaryScaleInput>;

    @Field(() => PositionClassCreateManySalaryScaleInputEnvelope, {nullable:true})
    createMany?: PositionClassCreateManySalaryScaleInputEnvelope;

    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    connect?: Array<PositionClassWhereUniqueInput>;

    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    set?: Array<PositionClassWhereUniqueInput>;

    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    disconnect?: Array<PositionClassWhereUniqueInput>;

    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    delete?: Array<PositionClassWhereUniqueInput>;

    @Field(() => [PositionClassUpdateWithWhereUniqueWithoutSalaryScaleInput], {nullable:true})
    update?: Array<PositionClassUpdateWithWhereUniqueWithoutSalaryScaleInput>;

    @Field(() => [PositionClassUpdateManyWithWhereWithoutSalaryScaleInput], {nullable:true})
    updateMany?: Array<PositionClassUpdateManyWithWhereWithoutSalaryScaleInput>;

    @Field(() => [PositionClassScalarWhereInput], {nullable:true})
    deleteMany?: Array<PositionClassScalarWhereInput>;
}

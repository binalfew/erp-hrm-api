import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassCreateWithoutGenderInput } from './position-class-create-without-gender.input';
import { PositionClassCreateOrConnectWithoutGenderInput } from './position-class-create-or-connect-without-gender.input';
import { PositionClassUpsertWithWhereUniqueWithoutGenderInput } from './position-class-upsert-with-where-unique-without-gender.input';
import { PositionClassCreateManyGenderInputEnvelope } from './position-class-create-many-gender-input-envelope.input';
import { PositionClassWhereUniqueInput } from './position-class-where-unique.input';
import { PositionClassUpdateWithWhereUniqueWithoutGenderInput } from './position-class-update-with-where-unique-without-gender.input';
import { PositionClassUpdateManyWithWhereWithoutGenderInput } from './position-class-update-many-with-where-without-gender.input';
import { PositionClassScalarWhereInput } from './position-class-scalar-where.input';

@InputType()
export class PositionClassUncheckedUpdateManyWithoutGenderInput {

    @Field(() => [PositionClassCreateWithoutGenderInput], {nullable:true})
    create?: Array<PositionClassCreateWithoutGenderInput>;

    @Field(() => [PositionClassCreateOrConnectWithoutGenderInput], {nullable:true})
    connectOrCreate?: Array<PositionClassCreateOrConnectWithoutGenderInput>;

    @Field(() => [PositionClassUpsertWithWhereUniqueWithoutGenderInput], {nullable:true})
    upsert?: Array<PositionClassUpsertWithWhereUniqueWithoutGenderInput>;

    @Field(() => PositionClassCreateManyGenderInputEnvelope, {nullable:true})
    createMany?: PositionClassCreateManyGenderInputEnvelope;

    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    connect?: Array<PositionClassWhereUniqueInput>;

    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    set?: Array<PositionClassWhereUniqueInput>;

    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    disconnect?: Array<PositionClassWhereUniqueInput>;

    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    delete?: Array<PositionClassWhereUniqueInput>;

    @Field(() => [PositionClassUpdateWithWhereUniqueWithoutGenderInput], {nullable:true})
    update?: Array<PositionClassUpdateWithWhereUniqueWithoutGenderInput>;

    @Field(() => [PositionClassUpdateManyWithWhereWithoutGenderInput], {nullable:true})
    updateMany?: Array<PositionClassUpdateManyWithWhereWithoutGenderInput>;

    @Field(() => [PositionClassScalarWhereInput], {nullable:true})
    deleteMany?: Array<PositionClassScalarWhereInput>;
}

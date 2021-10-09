import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassCreateWithoutPositionClassTypeInput } from './position-class-create-without-position-class-type.input';
import { PositionClassCreateOrConnectWithoutPositionClassTypeInput } from './position-class-create-or-connect-without-position-class-type.input';
import { PositionClassUpsertWithWhereUniqueWithoutPositionClassTypeInput } from './position-class-upsert-with-where-unique-without-position-class-type.input';
import { PositionClassCreateManyPositionClassTypeInputEnvelope } from './position-class-create-many-position-class-type-input-envelope.input';
import { PositionClassWhereUniqueInput } from './position-class-where-unique.input';
import { PositionClassUpdateWithWhereUniqueWithoutPositionClassTypeInput } from './position-class-update-with-where-unique-without-position-class-type.input';
import { PositionClassUpdateManyWithWhereWithoutPositionClassTypeInput } from './position-class-update-many-with-where-without-position-class-type.input';
import { PositionClassScalarWhereInput } from './position-class-scalar-where.input';

@InputType()
export class PositionClassUpdateManyWithoutPositionClassTypeInput {

    @Field(() => [PositionClassCreateWithoutPositionClassTypeInput], {nullable:true})
    create?: Array<PositionClassCreateWithoutPositionClassTypeInput>;

    @Field(() => [PositionClassCreateOrConnectWithoutPositionClassTypeInput], {nullable:true})
    connectOrCreate?: Array<PositionClassCreateOrConnectWithoutPositionClassTypeInput>;

    @Field(() => [PositionClassUpsertWithWhereUniqueWithoutPositionClassTypeInput], {nullable:true})
    upsert?: Array<PositionClassUpsertWithWhereUniqueWithoutPositionClassTypeInput>;

    @Field(() => PositionClassCreateManyPositionClassTypeInputEnvelope, {nullable:true})
    createMany?: PositionClassCreateManyPositionClassTypeInputEnvelope;

    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    connect?: Array<PositionClassWhereUniqueInput>;

    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    set?: Array<PositionClassWhereUniqueInput>;

    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    disconnect?: Array<PositionClassWhereUniqueInput>;

    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    delete?: Array<PositionClassWhereUniqueInput>;

    @Field(() => [PositionClassUpdateWithWhereUniqueWithoutPositionClassTypeInput], {nullable:true})
    update?: Array<PositionClassUpdateWithWhereUniqueWithoutPositionClassTypeInput>;

    @Field(() => [PositionClassUpdateManyWithWhereWithoutPositionClassTypeInput], {nullable:true})
    updateMany?: Array<PositionClassUpdateManyWithWhereWithoutPositionClassTypeInput>;

    @Field(() => [PositionClassScalarWhereInput], {nullable:true})
    deleteMany?: Array<PositionClassScalarWhereInput>;
}

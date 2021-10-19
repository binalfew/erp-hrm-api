import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassCreateWithoutPositionClassTypeInput } from './position-class-create-without-position-class-type.input';
import { PositionClassCreateOrConnectWithoutPositionClassTypeInput } from './position-class-create-or-connect-without-position-class-type.input';
import { PositionClassCreateManyPositionClassTypeInputEnvelope } from './position-class-create-many-position-class-type-input-envelope.input';
import { PositionClassWhereUniqueInput } from './position-class-where-unique.input';

@InputType()
export class PositionClassCreateNestedManyWithoutPositionClassTypeInput {

    @Field(() => [PositionClassCreateWithoutPositionClassTypeInput], {nullable:true})
    create?: Array<PositionClassCreateWithoutPositionClassTypeInput>;

    @Field(() => [PositionClassCreateOrConnectWithoutPositionClassTypeInput], {nullable:true})
    connectOrCreate?: Array<PositionClassCreateOrConnectWithoutPositionClassTypeInput>;

    @Field(() => PositionClassCreateManyPositionClassTypeInputEnvelope, {nullable:true})
    createMany?: PositionClassCreateManyPositionClassTypeInputEnvelope;

    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    connect?: Array<PositionClassWhereUniqueInput>;
}

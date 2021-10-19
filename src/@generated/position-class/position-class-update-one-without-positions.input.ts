import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassCreateWithoutPositionsInput } from './position-class-create-without-positions.input';
import { PositionClassCreateOrConnectWithoutPositionsInput } from './position-class-create-or-connect-without-positions.input';
import { PositionClassUpsertWithoutPositionsInput } from './position-class-upsert-without-positions.input';
import { PositionClassWhereUniqueInput } from './position-class-where-unique.input';
import { PositionClassUpdateWithoutPositionsInput } from './position-class-update-without-positions.input';

@InputType()
export class PositionClassUpdateOneWithoutPositionsInput {

    @Field(() => PositionClassCreateWithoutPositionsInput, {nullable:true})
    create?: PositionClassCreateWithoutPositionsInput;

    @Field(() => PositionClassCreateOrConnectWithoutPositionsInput, {nullable:true})
    connectOrCreate?: PositionClassCreateOrConnectWithoutPositionsInput;

    @Field(() => PositionClassUpsertWithoutPositionsInput, {nullable:true})
    upsert?: PositionClassUpsertWithoutPositionsInput;

    @Field(() => PositionClassWhereUniqueInput, {nullable:true})
    connect?: PositionClassWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => PositionClassUpdateWithoutPositionsInput, {nullable:true})
    update?: PositionClassUpdateWithoutPositionsInput;
}

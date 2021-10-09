import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionCreateWithoutPositionClassInput } from './position-create-without-position-class.input';
import { PositionCreateOrConnectWithoutPositionClassInput } from './position-create-or-connect-without-position-class.input';
import { PositionCreateManyPositionClassInputEnvelope } from './position-create-many-position-class-input-envelope.input';
import { PositionWhereUniqueInput } from './position-where-unique.input';

@InputType()
export class PositionCreateNestedManyWithoutPositionClassInput {

    @Field(() => [PositionCreateWithoutPositionClassInput], {nullable:true})
    create?: Array<PositionCreateWithoutPositionClassInput>;

    @Field(() => [PositionCreateOrConnectWithoutPositionClassInput], {nullable:true})
    connectOrCreate?: Array<PositionCreateOrConnectWithoutPositionClassInput>;

    @Field(() => PositionCreateManyPositionClassInputEnvelope, {nullable:true})
    createMany?: PositionCreateManyPositionClassInputEnvelope;

    @Field(() => [PositionWhereUniqueInput], {nullable:true})
    connect?: Array<PositionWhereUniqueInput>;
}

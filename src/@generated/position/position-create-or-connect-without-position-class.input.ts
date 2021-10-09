import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionWhereUniqueInput } from './position-where-unique.input';
import { PositionCreateWithoutPositionClassInput } from './position-create-without-position-class.input';

@InputType()
export class PositionCreateOrConnectWithoutPositionClassInput {

    @Field(() => PositionWhereUniqueInput, {nullable:false})
    where!: PositionWhereUniqueInput;

    @Field(() => PositionCreateWithoutPositionClassInput, {nullable:false})
    create!: PositionCreateWithoutPositionClassInput;
}

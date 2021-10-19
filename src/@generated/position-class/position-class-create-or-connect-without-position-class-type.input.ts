import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassWhereUniqueInput } from './position-class-where-unique.input';
import { PositionClassCreateWithoutPositionClassTypeInput } from './position-class-create-without-position-class-type.input';

@InputType()
export class PositionClassCreateOrConnectWithoutPositionClassTypeInput {

    @Field(() => PositionClassWhereUniqueInput, {nullable:false})
    where!: PositionClassWhereUniqueInput;

    @Field(() => PositionClassCreateWithoutPositionClassTypeInput, {nullable:false})
    create!: PositionClassCreateWithoutPositionClassTypeInput;
}

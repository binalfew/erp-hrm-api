import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassWhereUniqueInput } from './position-class-where-unique.input';
import { PositionClassCreateWithoutGenderInput } from './position-class-create-without-gender.input';

@InputType()
export class PositionClassCreateOrConnectWithoutGenderInput {

    @Field(() => PositionClassWhereUniqueInput, {nullable:false})
    where!: PositionClassWhereUniqueInput;

    @Field(() => PositionClassCreateWithoutGenderInput, {nullable:false})
    create!: PositionClassCreateWithoutGenderInput;
}

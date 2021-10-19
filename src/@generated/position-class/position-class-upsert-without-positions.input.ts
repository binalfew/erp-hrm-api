import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassUpdateWithoutPositionsInput } from './position-class-update-without-positions.input';
import { PositionClassCreateWithoutPositionsInput } from './position-class-create-without-positions.input';

@InputType()
export class PositionClassUpsertWithoutPositionsInput {

    @Field(() => PositionClassUpdateWithoutPositionsInput, {nullable:false})
    update!: PositionClassUpdateWithoutPositionsInput;

    @Field(() => PositionClassCreateWithoutPositionsInput, {nullable:false})
    create!: PositionClassCreateWithoutPositionsInput;
}

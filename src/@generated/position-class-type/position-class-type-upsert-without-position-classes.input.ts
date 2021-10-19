import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassTypeUpdateWithoutPositionClassesInput } from './position-class-type-update-without-position-classes.input';
import { PositionClassTypeCreateWithoutPositionClassesInput } from './position-class-type-create-without-position-classes.input';

@InputType()
export class PositionClassTypeUpsertWithoutPositionClassesInput {

    @Field(() => PositionClassTypeUpdateWithoutPositionClassesInput, {nullable:false})
    update!: PositionClassTypeUpdateWithoutPositionClassesInput;

    @Field(() => PositionClassTypeCreateWithoutPositionClassesInput, {nullable:false})
    create!: PositionClassTypeCreateWithoutPositionClassesInput;
}

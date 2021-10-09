import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenderWhereUniqueInput } from './gender-where-unique.input';
import { GenderCreateWithoutPositionClassesInput } from './gender-create-without-position-classes.input';

@InputType()
export class GenderCreateOrConnectWithoutPositionClassesInput {

    @Field(() => GenderWhereUniqueInput, {nullable:false})
    where!: GenderWhereUniqueInput;

    @Field(() => GenderCreateWithoutPositionClassesInput, {nullable:false})
    create!: GenderCreateWithoutPositionClassesInput;
}

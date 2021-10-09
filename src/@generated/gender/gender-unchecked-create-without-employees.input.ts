import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { PositionClassUncheckedCreateNestedManyWithoutGenderInput } from '../position-class/position-class-unchecked-create-nested-many-without-gender.input';

@InputType()
export class GenderUncheckedCreateWithoutEmployeesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;

    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PositionClassUncheckedCreateNestedManyWithoutGenderInput, {nullable:true})
    positionClasses?: PositionClassUncheckedCreateNestedManyWithoutGenderInput;
}

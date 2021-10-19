import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { GraphQLJSON } from 'graphql-type-json';
import { PositionClassUncheckedCreateNestedManyWithoutPositionClassTypeInput } from '../position-class/position-class-unchecked-create-nested-many-without-position-class-type.input';

@InputType()
export class PositionClassTypeUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    name!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    code!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;

    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PositionClassUncheckedCreateNestedManyWithoutPositionClassTypeInput, {nullable:true})
    positionClasses?: PositionClassUncheckedCreateNestedManyWithoutPositionClassTypeInput;
}

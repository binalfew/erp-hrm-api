import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { PositionClassCreateNestedManyWithoutPositionClassTypeInput } from '../position-class/position-class-create-nested-many-without-position-class-type.input';

@InputType()
export class PositionClassTypeCreateInput {

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

    @Field(() => PositionClassCreateNestedManyWithoutPositionClassTypeInput, {nullable:true})
    positionClasses?: PositionClassCreateNestedManyWithoutPositionClassTypeInput;
}

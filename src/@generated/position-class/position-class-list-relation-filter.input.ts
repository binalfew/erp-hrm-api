import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassWhereInput } from './position-class-where.input';

@InputType()
export class PositionClassListRelationFilter {

    @Field(() => PositionClassWhereInput, {nullable:true})
    every?: PositionClassWhereInput;

    @Field(() => PositionClassWhereInput, {nullable:true})
    some?: PositionClassWhereInput;

    @Field(() => PositionClassWhereInput, {nullable:true})
    none?: PositionClassWhereInput;
}

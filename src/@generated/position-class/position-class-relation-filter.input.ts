import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassWhereInput } from './position-class-where.input';

@InputType()
export class PositionClassRelationFilter {

    @Field(() => PositionClassWhereInput, {nullable:true})
    is?: PositionClassWhereInput;

    @Field(() => PositionClassWhereInput, {nullable:true})
    isNot?: PositionClassWhereInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenderWhereInput } from './gender-where.input';

@InputType()
export class GenderRelationFilter {

    @Field(() => GenderWhereInput, {nullable:true})
    is?: GenderWhereInput;

    @Field(() => GenderWhereInput, {nullable:true})
    isNot?: GenderWhereInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaritalStatusWhereInput } from './marital-status-where.input';

@InputType()
export class MaritalStatusRelationFilter {

    @Field(() => MaritalStatusWhereInput, {nullable:true})
    is?: MaritalStatusWhereInput;

    @Field(() => MaritalStatusWhereInput, {nullable:true})
    isNot?: MaritalStatusWhereInput;
}

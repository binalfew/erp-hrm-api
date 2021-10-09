import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NationalityWhereInput } from './nationality-where.input';

@InputType()
export class NationalityRelationFilter {

    @Field(() => NationalityWhereInput, {nullable:true})
    is?: NationalityWhereInput;

    @Field(() => NationalityWhereInput, {nullable:true})
    isNot?: NationalityWhereInput;
}

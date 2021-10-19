import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class DepartmentWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    name?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    code?: string;
}

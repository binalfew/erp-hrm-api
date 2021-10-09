import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EmploymentNatureCount {

    @Field(() => Int, {nullable:false})
    employees!: number;
}
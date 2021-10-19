import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class GenderCount {

    @Field(() => Int, {nullable:false})
    positionClasses!: number;

    @Field(() => Int, {nullable:false})
    employees!: number;
}

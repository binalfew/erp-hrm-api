import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PositionClassCount {

    @Field(() => Int, {nullable:false})
    positions!: number;
}

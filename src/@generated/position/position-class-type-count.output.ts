import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PositionClassTypeCount {

    @Field(() => Int, {nullable:false})
    positionClasses!: number;
}

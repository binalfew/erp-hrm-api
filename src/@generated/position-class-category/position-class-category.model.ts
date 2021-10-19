import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { PositionClass } from '../position-class/position-class.model';
import { PositionClassCategoryCount } from '../position-class/position-class-category-count.output';

@ObjectType()
export class PositionClassCategory {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    locales!: any | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    deleted!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [PositionClass], {nullable:true})
    positionClasses?: Array<PositionClass>;

    @Field(() => PositionClassCategoryCount, {nullable:true})
    _count?: PositionClassCategoryCount | null;
}

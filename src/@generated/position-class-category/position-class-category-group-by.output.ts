import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { PositionClassCategoryCountAggregate } from './position-class-category-count-aggregate.output';
import { PositionClassCategoryAvgAggregate } from './position-class-category-avg-aggregate.output';
import { PositionClassCategorySumAggregate } from './position-class-category-sum-aggregate.output';
import { PositionClassCategoryMinAggregate } from './position-class-category-min-aggregate.output';
import { PositionClassCategoryMaxAggregate } from './position-class-category-max-aggregate.output';

@ObjectType()
export class PositionClassCategoryGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;

    @Field(() => Boolean, {nullable:false})
    deleted!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PositionClassCategoryCountAggregate, {nullable:true})
    _count?: PositionClassCategoryCountAggregate;

    @Field(() => PositionClassCategoryAvgAggregate, {nullable:true})
    _avg?: PositionClassCategoryAvgAggregate;

    @Field(() => PositionClassCategorySumAggregate, {nullable:true})
    _sum?: PositionClassCategorySumAggregate;

    @Field(() => PositionClassCategoryMinAggregate, {nullable:true})
    _min?: PositionClassCategoryMinAggregate;

    @Field(() => PositionClassCategoryMaxAggregate, {nullable:true})
    _max?: PositionClassCategoryMaxAggregate;
}

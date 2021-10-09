import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { PositionClassCountAggregate } from './position-class-count-aggregate.output';
import { PositionClassAvgAggregate } from './position-class-avg-aggregate.output';
import { PositionClassSumAggregate } from './position-class-sum-aggregate.output';
import { PositionClassMinAggregate } from './position-class-min-aggregate.output';
import { PositionClassMaxAggregate } from './position-class-max-aggregate.output';

@ObjectType()
export class PositionClassGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;

    @Field(() => Int, {nullable:true})
    genderId?: number;

    @Field(() => Int, {nullable:true})
    positionClassTypeId?: number;

    @Field(() => Int, {nullable:true})
    positionClassCategoryId?: number;

    @Field(() => Int, {nullable:true})
    salaryScaleId?: number;

    @Field(() => Int, {nullable:false})
    minimumAge!: number;

    @Field(() => Int, {nullable:false})
    maximumAge!: number;

    @Field(() => GraphQLDecimal, {nullable:false})
    monthlyWorkingHours!: any;

    @Field(() => GraphQLDecimal, {nullable:false})
    salary!: any;

    @Field(() => String, {nullable:true})
    specification?: string;

    @Field(() => Boolean, {nullable:false})
    deleted!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PositionClassCountAggregate, {nullable:true})
    _count?: PositionClassCountAggregate;

    @Field(() => PositionClassAvgAggregate, {nullable:true})
    _avg?: PositionClassAvgAggregate;

    @Field(() => PositionClassSumAggregate, {nullable:true})
    _sum?: PositionClassSumAggregate;

    @Field(() => PositionClassMinAggregate, {nullable:true})
    _min?: PositionClassMinAggregate;

    @Field(() => PositionClassMaxAggregate, {nullable:true})
    _max?: PositionClassMaxAggregate;
}

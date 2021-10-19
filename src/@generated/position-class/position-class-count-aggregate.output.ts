import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PositionClassCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    code!: number;

    @Field(() => Int, {nullable:false})
    locales!: number;

    @Field(() => Int, {nullable:false})
    genderId!: number;

    @Field(() => Int, {nullable:false})
    positionClassTypeId!: number;

    @Field(() => Int, {nullable:false})
    positionClassCategoryId!: number;

    @Field(() => Int, {nullable:false})
    salaryScaleId!: number;

    @Field(() => Int, {nullable:false})
    minimumAge!: number;

    @Field(() => Int, {nullable:false})
    maximumAge!: number;

    @Field(() => Int, {nullable:false})
    monthlyWorkingHours!: number;

    @Field(() => Int, {nullable:false})
    salary!: number;

    @Field(() => Int, {nullable:false})
    specification!: number;

    @Field(() => Int, {nullable:false})
    deleted!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

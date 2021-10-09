import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class PositionClassAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    genderId?: number;

    @Field(() => Float, {nullable:true})
    positionClassTypeId?: number;

    @Field(() => Float, {nullable:true})
    positionClassCategoryId?: number;

    @Field(() => Float, {nullable:true})
    salaryScaleId?: number;

    @Field(() => Float, {nullable:true})
    minimumAge?: number;

    @Field(() => Float, {nullable:true})
    maximumAge?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    monthlyWorkingHours?: any;

    @Field(() => GraphQLDecimal, {nullable:true})
    salary?: any;
}

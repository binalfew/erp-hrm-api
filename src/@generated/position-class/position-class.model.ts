import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Gender } from '../gender/gender.model';
import { Int } from '@nestjs/graphql';
import { PositionClassType } from '../position-class-type/position-class-type.model';
import { PositionClassCategory } from '../position-class-category/position-class-category.model';
import { SalaryScale } from '../salary-scale/salary-scale.model';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Position } from '../position/position.model';
import { PositionClassCount } from './position-class-count.output';

@ObjectType()
export class PositionClass {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    locales!: any | null;

    @Field(() => Gender, {nullable:true})
    gender?: Gender | null;

    @Field(() => Int, {nullable:true})
    genderId!: number | null;

    @Field(() => PositionClassType, {nullable:true})
    positionClassType?: PositionClassType | null;

    @Field(() => Int, {nullable:true})
    positionClassTypeId!: number | null;

    @Field(() => PositionClassCategory, {nullable:true})
    positionClassCategory?: PositionClassCategory | null;

    @Field(() => Int, {nullable:true})
    positionClassCategoryId!: number | null;

    @Field(() => SalaryScale, {nullable:true})
    salaryScale?: SalaryScale | null;

    @Field(() => Int, {nullable:true})
    salaryScaleId!: number | null;

    @Field(() => Int, {nullable:false,defaultValue:0})
    minimumAge!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    maximumAge!: number;

    @Field(() => GraphQLDecimal, {nullable:false,defaultValue:0})
    monthlyWorkingHours!: any;

    @Field(() => GraphQLDecimal, {nullable:false,defaultValue:0})
    salary!: any;

    @Field(() => String, {nullable:true})
    specification!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    deleted!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Position], {nullable:true})
    positions?: Array<Position>;

    @Field(() => PositionClassCount, {nullable:true})
    _count?: PositionClassCount | null;
}

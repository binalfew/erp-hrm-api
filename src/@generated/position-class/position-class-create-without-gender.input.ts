import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { PositionClassTypeCreateNestedOneWithoutPositionClassesInput } from '../position-class-type/position-class-type-create-nested-one-without-position-classes.input';
import { PositionClassCategoryCreateNestedOneWithoutPositionClassesInput } from '../position-class-category/position-class-category-create-nested-one-without-position-classes.input';
import { SalaryScaleCreateNestedOneWithoutPositionClassesInput } from '../salary-scale/salary-scale-create-nested-one-without-position-classes.input';
import { PositionCreateNestedManyWithoutPositionClassInput } from '../position/position-create-nested-many-without-position-class.input';

@InputType()
export class PositionClassCreateWithoutGenderInput {

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    name!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    code!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;

    @Field(() => Int, {nullable:true})
    minimumAge?: number;

    @Field(() => Int, {nullable:true})
    maximumAge?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    monthlyWorkingHours?: any;

    @Field(() => GraphQLDecimal, {nullable:true})
    salary?: any;

    @Field(() => String, {nullable:true})
    specification?: string;

    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PositionClassTypeCreateNestedOneWithoutPositionClassesInput, {nullable:true})
    positionClassType?: PositionClassTypeCreateNestedOneWithoutPositionClassesInput;

    @Field(() => PositionClassCategoryCreateNestedOneWithoutPositionClassesInput, {nullable:true})
    positionClassCategory?: PositionClassCategoryCreateNestedOneWithoutPositionClassesInput;

    @Field(() => SalaryScaleCreateNestedOneWithoutPositionClassesInput, {nullable:true})
    salaryScale?: SalaryScaleCreateNestedOneWithoutPositionClassesInput;

    @Field(() => PositionCreateNestedManyWithoutPositionClassInput, {nullable:true})
    positions?: PositionCreateNestedManyWithoutPositionClassInput;
}

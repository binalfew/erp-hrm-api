import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { GraphQLJSON } from 'graphql-type-json';
import { SalaryScaleCreateNestedManyWithoutJobGradeInput } from '../salary-scale/salary-scale-create-nested-many-without-job-grade.input';

@InputType()
export class JobGradeCreateInput {

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    name!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    code!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;

    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => SalaryScaleCreateNestedManyWithoutJobGradeInput, {nullable:true})
    salaryScales?: SalaryScaleCreateNestedManyWithoutJobGradeInput;
}

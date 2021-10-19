import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { GraphQLJSON } from 'graphql-type-json';
import { SalaryScaleCreateNestedManyWithoutJobStepInput } from '../salary-scale/salary-scale-create-nested-many-without-job-step.input';

@InputType()
export class JobStepCreateInput {

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

    @Field(() => SalaryScaleCreateNestedManyWithoutJobStepInput, {nullable:true})
    salaryScales?: SalaryScaleCreateNestedManyWithoutJobStepInput;
}

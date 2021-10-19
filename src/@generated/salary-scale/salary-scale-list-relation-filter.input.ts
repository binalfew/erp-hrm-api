import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryScaleWhereInput } from './salary-scale-where.input';

@InputType()
export class SalaryScaleListRelationFilter {

    @Field(() => SalaryScaleWhereInput, {nullable:true})
    every?: SalaryScaleWhereInput;

    @Field(() => SalaryScaleWhereInput, {nullable:true})
    some?: SalaryScaleWhereInput;

    @Field(() => SalaryScaleWhereInput, {nullable:true})
    none?: SalaryScaleWhereInput;
}

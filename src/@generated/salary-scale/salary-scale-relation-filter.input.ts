import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryScaleWhereInput } from './salary-scale-where.input';

@InputType()
export class SalaryScaleRelationFilter {

    @Field(() => SalaryScaleWhereInput, {nullable:true})
    is?: SalaryScaleWhereInput;

    @Field(() => SalaryScaleWhereInput, {nullable:true})
    isNot?: SalaryScaleWhereInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryScaleWhereInput } from './salary-scale-where.input';
import { SalaryScaleOrderByWithRelationInput } from './salary-scale-order-by-with-relation.input';
import { SalaryScaleWhereUniqueInput } from './salary-scale-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SalaryScaleScalarFieldEnum } from './salary-scale-scalar-field.enum';

@ArgsType()
export class FindFirstSalaryScaleArgs {

    @Field(() => SalaryScaleWhereInput, {nullable:true})
    where?: SalaryScaleWhereInput;

    @Field(() => [SalaryScaleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SalaryScaleOrderByWithRelationInput>;

    @Field(() => SalaryScaleWhereUniqueInput, {nullable:true})
    cursor?: SalaryScaleWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SalaryScaleScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SalaryScaleScalarFieldEnum>;
}

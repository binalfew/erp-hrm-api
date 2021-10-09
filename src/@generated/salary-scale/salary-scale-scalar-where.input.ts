import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class SalaryScaleScalarWhereInput {

    @Field(() => [SalaryScaleScalarWhereInput], {nullable:true})
    AND?: Array<SalaryScaleScalarWhereInput>;

    @Field(() => [SalaryScaleScalarWhereInput], {nullable:true})
    OR?: Array<SalaryScaleScalarWhereInput>;

    @Field(() => [SalaryScaleScalarWhereInput], {nullable:true})
    NOT?: Array<SalaryScaleScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    jobGradeId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    jobStepId?: IntNullableFilter;

    @Field(() => FloatFilter, {nullable:true})
    salary?: FloatFilter;

    @Field(() => BoolFilter, {nullable:true})
    deleted?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}

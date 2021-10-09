import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { JobGradeRelationFilter } from '../job-grade/job-grade-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { JobStepRelationFilter } from '../job-step/job-step-relation-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PositionClassListRelationFilter } from '../position-class/position-class-list-relation-filter.input';

@InputType()
export class SalaryScaleWhereInput {

    @Field(() => [SalaryScaleWhereInput], {nullable:true})
    AND?: Array<SalaryScaleWhereInput>;

    @Field(() => [SalaryScaleWhereInput], {nullable:true})
    OR?: Array<SalaryScaleWhereInput>;

    @Field(() => [SalaryScaleWhereInput], {nullable:true})
    NOT?: Array<SalaryScaleWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => JobGradeRelationFilter, {nullable:true})
    jobGrade?: JobGradeRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    jobGradeId?: IntNullableFilter;

    @Field(() => JobStepRelationFilter, {nullable:true})
    jobStep?: JobStepRelationFilter;

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

    @Field(() => PositionClassListRelationFilter, {nullable:true})
    positionClasses?: PositionClassListRelationFilter;
}

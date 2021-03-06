import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { SalaryScaleListRelationFilter } from '../salary-scale/salary-scale-list-relation-filter.input';

@InputType()
export class JobGradeWhereInput {

    @Field(() => [JobGradeWhereInput], {nullable:true})
    AND?: Array<JobGradeWhereInput>;

    @Field(() => [JobGradeWhereInput], {nullable:true})
    OR?: Array<JobGradeWhereInput>;

    @Field(() => [JobGradeWhereInput], {nullable:true})
    NOT?: Array<JobGradeWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    locales?: JsonNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    deleted?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => SalaryScaleListRelationFilter, {nullable:true})
    salaryScales?: SalaryScaleListRelationFilter;
}

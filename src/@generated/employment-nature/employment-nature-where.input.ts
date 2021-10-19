import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EmployeeListRelationFilter } from '../employee/employee-list-relation-filter.input';

@InputType()
export class EmploymentNatureWhereInput {

    @Field(() => [EmploymentNatureWhereInput], {nullable:true})
    AND?: Array<EmploymentNatureWhereInput>;

    @Field(() => [EmploymentNatureWhereInput], {nullable:true})
    OR?: Array<EmploymentNatureWhereInput>;

    @Field(() => [EmploymentNatureWhereInput], {nullable:true})
    NOT?: Array<EmploymentNatureWhereInput>;

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

    @Field(() => EmployeeListRelationFilter, {nullable:true})
    employees?: EmployeeListRelationFilter;
}

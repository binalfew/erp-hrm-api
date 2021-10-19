import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PositionClassListRelationFilter } from '../position-class/position-class-list-relation-filter.input';

@InputType()
export class PositionClassCategoryWhereInput {

    @Field(() => [PositionClassCategoryWhereInput], {nullable:true})
    AND?: Array<PositionClassCategoryWhereInput>;

    @Field(() => [PositionClassCategoryWhereInput], {nullable:true})
    OR?: Array<PositionClassCategoryWhereInput>;

    @Field(() => [PositionClassCategoryWhereInput], {nullable:true})
    NOT?: Array<PositionClassCategoryWhereInput>;

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

    @Field(() => PositionClassListRelationFilter, {nullable:true})
    positionClasses?: PositionClassListRelationFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { GenderRelationFilter } from '../gender/gender-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { PositionClassTypeRelationFilter } from '../position-class-type/position-class-type-relation-filter.input';
import { PositionClassCategoryRelationFilter } from '../position-class-category/position-class-category-relation-filter.input';
import { SalaryScaleRelationFilter } from '../salary-scale/salary-scale-relation-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PositionListRelationFilter } from '../position/position-list-relation-filter.input';

@InputType()
export class PositionClassWhereInput {
  @Field(() => [PositionClassWhereInput], { nullable: true })
  AND?: Array<PositionClassWhereInput>;

  @Field(() => [PositionClassWhereInput], { nullable: true })
  OR?: Array<PositionClassWhereInput>;

  @Field(() => [PositionClassWhereInput], { nullable: true })
  NOT?: Array<PositionClassWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  code?: StringFilter;

  @Field(() => JsonNullableFilter, { nullable: true })
  locales?: JsonNullableFilter;

  @Field(() => GenderRelationFilter, { nullable: true })
  gender?: GenderRelationFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  genderId?: IntNullableFilter;

  @Field(() => PositionClassTypeRelationFilter, { nullable: true })
  positionClassType?: PositionClassTypeRelationFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  positionClassTypeId?: IntNullableFilter;

  @Field(() => PositionClassCategoryRelationFilter, { nullable: true })
  positionClassCategory?: PositionClassCategoryRelationFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  positionClassCategoryId?: IntNullableFilter;

  @Field(() => SalaryScaleRelationFilter, { nullable: true })
  salaryScale?: SalaryScaleRelationFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  salaryScaleId?: IntNullableFilter;

  @Field(() => IntFilter, { nullable: true })
  minimumAge?: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  maximumAge?: IntFilter;

  @Field(() => DecimalFilter, { nullable: true })
  monthlyWorkingHours?: DecimalFilter;

  @Field(() => DecimalFilter, { nullable: true })
  salary?: DecimalFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  specification?: StringNullableFilter;

  @Field(() => BoolFilter, { nullable: true })
  deleted?: BoolFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => PositionListRelationFilter, { nullable: true })
  positions?: PositionListRelationFilter;
}

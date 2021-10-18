import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PositionClassScalarWhereInput {
  @Field(() => [PositionClassScalarWhereInput], { nullable: true })
  AND?: Array<PositionClassScalarWhereInput>;

  @Field(() => [PositionClassScalarWhereInput], { nullable: true })
  OR?: Array<PositionClassScalarWhereInput>;

  @Field(() => [PositionClassScalarWhereInput], { nullable: true })
  NOT?: Array<PositionClassScalarWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  code?: StringFilter;

  @Field(() => JsonNullableFilter, { nullable: true })
  locales?: JsonNullableFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  genderId?: IntNullableFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  positionClassTypeId?: IntNullableFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  positionClassCategoryId?: IntNullableFilter;

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
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PositionScalarWhereWithAggregatesInput {
  @Field(() => [PositionScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<PositionScalarWhereWithAggregatesInput>;

  @Field(() => [PositionScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<PositionScalarWhereWithAggregatesInput>;

  @Field(() => [PositionScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<PositionScalarWhereWithAggregatesInput>;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  code?: StringWithAggregatesFilter;

  @Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  positionClassId?: IntNullableWithAggregatesFilter;

  @Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  departmentId?: IntNullableWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  vacant?: BoolWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  deleted?: BoolWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter;
}

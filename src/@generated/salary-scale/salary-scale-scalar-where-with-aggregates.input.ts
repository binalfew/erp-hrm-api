import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class SalaryScaleScalarWhereWithAggregatesInput {
  @Field(() => [SalaryScaleScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<SalaryScaleScalarWhereWithAggregatesInput>;

  @Field(() => [SalaryScaleScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<SalaryScaleScalarWhereWithAggregatesInput>;

  @Field(() => [SalaryScaleScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<SalaryScaleScalarWhereWithAggregatesInput>;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter;

  @Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  jobGradeId?: IntNullableWithAggregatesFilter;

  @Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  jobStepId?: IntNullableWithAggregatesFilter;

  @Field(() => FloatWithAggregatesFilter, { nullable: true })
  salary?: FloatWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  deleted?: BoolWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter;
}

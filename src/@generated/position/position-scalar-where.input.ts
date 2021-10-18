import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PositionScalarWhereInput {
  @Field(() => [PositionScalarWhereInput], { nullable: true })
  AND?: Array<PositionScalarWhereInput>;

  @Field(() => [PositionScalarWhereInput], { nullable: true })
  OR?: Array<PositionScalarWhereInput>;

  @Field(() => [PositionScalarWhereInput], { nullable: true })
  NOT?: Array<PositionScalarWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  code?: StringFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  positionClassId?: IntNullableFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  departmentId?: IntNullableFilter;

  @Field(() => BoolFilter, { nullable: true })
  vacant?: BoolFilter;

  @Field(() => BoolFilter, { nullable: true })
  deleted?: BoolFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;
}

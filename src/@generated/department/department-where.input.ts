import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DepartmentRelationFilter } from './department-relation-filter.input';
import { DepartmentListRelationFilter } from './department-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PositionListRelationFilter } from '../position/position-list-relation-filter.input';

@InputType()
export class DepartmentWhereInput {
  @Field(() => [DepartmentWhereInput], { nullable: true })
  AND?: Array<DepartmentWhereInput>;

  @Field(() => [DepartmentWhereInput], { nullable: true })
  OR?: Array<DepartmentWhereInput>;

  @Field(() => [DepartmentWhereInput], { nullable: true })
  NOT?: Array<DepartmentWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  code?: StringFilter;

  @Field(() => JsonNullableFilter, { nullable: true })
  locales?: JsonNullableFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  parentId?: IntNullableFilter;

  @Field(() => DepartmentRelationFilter, { nullable: true })
  parent?: DepartmentRelationFilter;

  @Field(() => DepartmentListRelationFilter, { nullable: true })
  children?: DepartmentListRelationFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => PositionListRelationFilter, { nullable: true })
  positions?: PositionListRelationFilter;
}

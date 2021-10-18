import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { PositionClassRelationFilter } from '../position-class/position-class-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DepartmentRelationFilter } from '../department/department-relation-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PositionWhereInput {
  @Field(() => [PositionWhereInput], { nullable: true })
  AND?: Array<PositionWhereInput>;

  @Field(() => [PositionWhereInput], { nullable: true })
  OR?: Array<PositionWhereInput>;

  @Field(() => [PositionWhereInput], { nullable: true })
  NOT?: Array<PositionWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  code?: StringFilter;

  @Field(() => PositionClassRelationFilter, { nullable: true })
  positionClass?: PositionClassRelationFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  positionClassId?: IntNullableFilter;

  @Field(() => DepartmentRelationFilter, { nullable: true })
  department?: DepartmentRelationFilter;

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

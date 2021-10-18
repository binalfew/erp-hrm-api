import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PositionClassMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  code?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  genderId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  positionClassTypeId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  positionClassCategoryId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  salaryScaleId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  minimumAge?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  maximumAge?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  monthlyWorkingHours?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  salary?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  specification?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  deleted?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

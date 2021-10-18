import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PositionClassSumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

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
}

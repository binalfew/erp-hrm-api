import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GenderOrderByWithRelationInput } from '../gender/gender-order-by-with-relation.input';
import { PositionClassTypeOrderByWithRelationInput } from '../position-class-type/position-class-type-order-by-with-relation.input';
import { PositionClassCategoryOrderByWithRelationInput } from '../position-class-category/position-class-category-order-by-with-relation.input';
import { SalaryScaleOrderByWithRelationInput } from '../salary-scale/salary-scale-order-by-with-relation.input';
import { PositionOrderByRelationAggregateInput } from '../position/position-order-by-relation-aggregate.input';

@InputType()
export class PositionClassOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  code?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  locales?: keyof typeof SortOrder;

  @Field(() => GenderOrderByWithRelationInput, { nullable: true })
  gender?: GenderOrderByWithRelationInput;

  @Field(() => SortOrder, { nullable: true })
  genderId?: keyof typeof SortOrder;

  @Field(() => PositionClassTypeOrderByWithRelationInput, { nullable: true })
  positionClassType?: PositionClassTypeOrderByWithRelationInput;

  @Field(() => SortOrder, { nullable: true })
  positionClassTypeId?: keyof typeof SortOrder;

  @Field(() => PositionClassCategoryOrderByWithRelationInput, {
    nullable: true,
  })
  positionClassCategory?: PositionClassCategoryOrderByWithRelationInput;

  @Field(() => SortOrder, { nullable: true })
  positionClassCategoryId?: keyof typeof SortOrder;

  @Field(() => SalaryScaleOrderByWithRelationInput, { nullable: true })
  salaryScale?: SalaryScaleOrderByWithRelationInput;

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

  @Field(() => PositionOrderByRelationAggregateInput, { nullable: true })
  positions?: PositionOrderByRelationAggregateInput;
}

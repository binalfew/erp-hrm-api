import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PositionClassSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  genderId?: true;

  @Field(() => Boolean, { nullable: true })
  positionClassTypeId?: true;

  @Field(() => Boolean, { nullable: true })
  positionClassCategoryId?: true;

  @Field(() => Boolean, { nullable: true })
  salaryScaleId?: true;

  @Field(() => Boolean, { nullable: true })
  minimumAge?: true;

  @Field(() => Boolean, { nullable: true })
  maximumAge?: true;

  @Field(() => Boolean, { nullable: true })
  monthlyWorkingHours?: true;

  @Field(() => Boolean, { nullable: true })
  salary?: true;
}

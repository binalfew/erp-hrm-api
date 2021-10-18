import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SalaryScaleMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  jobGradeId?: true;

  @Field(() => Boolean, { nullable: true })
  jobStepId?: true;

  @Field(() => Boolean, { nullable: true })
  salary?: true;

  @Field(() => Boolean, { nullable: true })
  deleted?: true;

  @Field(() => Boolean, { nullable: true })
  createdAt?: true;

  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}

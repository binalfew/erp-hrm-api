import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { JobGradeOrderByWithRelationInput } from '../job-grade/job-grade-order-by-with-relation.input';
import { JobStepOrderByWithRelationInput } from '../job-step/job-step-order-by-with-relation.input';
import { PositionClassOrderByRelationAggregateInput } from '../position-class/position-class-order-by-relation-aggregate.input';

@InputType()
export class SalaryScaleOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => JobGradeOrderByWithRelationInput, { nullable: true })
  jobGrade?: JobGradeOrderByWithRelationInput;

  @Field(() => SortOrder, { nullable: true })
  jobGradeId?: keyof typeof SortOrder;

  @Field(() => JobStepOrderByWithRelationInput, { nullable: true })
  jobStep?: JobStepOrderByWithRelationInput;

  @Field(() => SortOrder, { nullable: true })
  jobStepId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  salary?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  deleted?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => PositionClassOrderByRelationAggregateInput, { nullable: true })
  positionClasses?: PositionClassOrderByRelationAggregateInput;
}

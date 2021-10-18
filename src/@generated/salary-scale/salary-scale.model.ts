import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { JobGrade } from '../job-grade/job-grade.model';
import { Int } from '@nestjs/graphql';
import { JobStep } from '../job-step/job-step.model';
import { Float } from '@nestjs/graphql';
import { PositionClass } from '../position-class/position-class.model';
import { SalaryScaleCount } from './salary-scale-count.output';

@ObjectType()
export class SalaryScale {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => JobGrade, { nullable: true })
  jobGrade?: JobGrade | null;

  @Field(() => Int, { nullable: true })
  jobGradeId!: number | null;

  @Field(() => JobStep, { nullable: true })
  jobStep?: JobStep | null;

  @Field(() => Int, { nullable: true })
  jobStepId!: number | null;

  @Field(() => Float, { nullable: false, defaultValue: 0 })
  salary!: number;

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  deleted!: boolean;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => [PositionClass], { nullable: true })
  positionClasses?: Array<PositionClass>;

  @Field(() => SalaryScaleCount, { nullable: true })
  _count?: SalaryScaleCount | null;
}

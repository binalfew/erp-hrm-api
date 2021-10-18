import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { SalaryScale } from '../salary-scale/salary-scale.model';
import { JobGradeCount } from './job-grade-count.output';

@ObjectType()
export class JobGrade {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  code!: string;

  @Field(() => GraphQLJSON, { nullable: true })
  locales!: any | null;

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  deleted!: boolean;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => [SalaryScale], { nullable: true })
  salaryScales?: Array<SalaryScale>;

  @Field(() => JobGradeCount, { nullable: true })
  _count?: JobGradeCount | null;
}

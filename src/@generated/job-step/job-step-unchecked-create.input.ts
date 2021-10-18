import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { SalaryScaleUncheckedCreateNestedManyWithoutJobStepInput } from '../salary-scale/salary-scale-unchecked-create-nested-many-without-job-step.input';

@InputType()
export class JobStepUncheckedCreateInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  code!: string;

  @Field(() => GraphQLJSON, { nullable: true })
  locales?: any;

  @Field(() => Boolean, { nullable: true })
  deleted?: boolean;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => SalaryScaleUncheckedCreateNestedManyWithoutJobStepInput, {
    nullable: true,
  })
  salaryScales?: SalaryScaleUncheckedCreateNestedManyWithoutJobStepInput;
}

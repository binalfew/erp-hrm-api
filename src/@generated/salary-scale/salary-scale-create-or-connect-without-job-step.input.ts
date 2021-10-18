import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryScaleWhereUniqueInput } from './salary-scale-where-unique.input';
import { SalaryScaleCreateWithoutJobStepInput } from './salary-scale-create-without-job-step.input';

@InputType()
export class SalaryScaleCreateOrConnectWithoutJobStepInput {
  @Field(() => SalaryScaleWhereUniqueInput, { nullable: false })
  where!: SalaryScaleWhereUniqueInput;

  @Field(() => SalaryScaleCreateWithoutJobStepInput, { nullable: false })
  create!: SalaryScaleCreateWithoutJobStepInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobStepWhereUniqueInput } from './job-step-where-unique.input';
import { JobStepCreateWithoutSalaryScalesInput } from './job-step-create-without-salary-scales.input';

@InputType()
export class JobStepCreateOrConnectWithoutSalaryScalesInput {
  @Field(() => JobStepWhereUniqueInput, { nullable: false })
  where!: JobStepWhereUniqueInput;

  @Field(() => JobStepCreateWithoutSalaryScalesInput, { nullable: false })
  create!: JobStepCreateWithoutSalaryScalesInput;
}

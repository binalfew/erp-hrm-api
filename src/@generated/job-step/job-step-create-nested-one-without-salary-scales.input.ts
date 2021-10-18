import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobStepCreateWithoutSalaryScalesInput } from './job-step-create-without-salary-scales.input';
import { JobStepCreateOrConnectWithoutSalaryScalesInput } from './job-step-create-or-connect-without-salary-scales.input';
import { JobStepWhereUniqueInput } from './job-step-where-unique.input';

@InputType()
export class JobStepCreateNestedOneWithoutSalaryScalesInput {
  @Field(() => JobStepCreateWithoutSalaryScalesInput, { nullable: true })
  create?: JobStepCreateWithoutSalaryScalesInput;

  @Field(() => JobStepCreateOrConnectWithoutSalaryScalesInput, {
    nullable: true,
  })
  connectOrCreate?: JobStepCreateOrConnectWithoutSalaryScalesInput;

  @Field(() => JobStepWhereUniqueInput, { nullable: true })
  connect?: JobStepWhereUniqueInput;
}

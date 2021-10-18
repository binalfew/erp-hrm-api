import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobStepCreateWithoutSalaryScalesInput } from './job-step-create-without-salary-scales.input';
import { JobStepCreateOrConnectWithoutSalaryScalesInput } from './job-step-create-or-connect-without-salary-scales.input';
import { JobStepUpsertWithoutSalaryScalesInput } from './job-step-upsert-without-salary-scales.input';
import { JobStepWhereUniqueInput } from './job-step-where-unique.input';
import { JobStepUpdateWithoutSalaryScalesInput } from './job-step-update-without-salary-scales.input';

@InputType()
export class JobStepUpdateOneWithoutSalaryScalesInput {
  @Field(() => JobStepCreateWithoutSalaryScalesInput, { nullable: true })
  create?: JobStepCreateWithoutSalaryScalesInput;

  @Field(() => JobStepCreateOrConnectWithoutSalaryScalesInput, {
    nullable: true,
  })
  connectOrCreate?: JobStepCreateOrConnectWithoutSalaryScalesInput;

  @Field(() => JobStepUpsertWithoutSalaryScalesInput, { nullable: true })
  upsert?: JobStepUpsertWithoutSalaryScalesInput;

  @Field(() => JobStepWhereUniqueInput, { nullable: true })
  connect?: JobStepWhereUniqueInput;

  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;

  @Field(() => Boolean, { nullable: true })
  delete?: boolean;

  @Field(() => JobStepUpdateWithoutSalaryScalesInput, { nullable: true })
  update?: JobStepUpdateWithoutSalaryScalesInput;
}

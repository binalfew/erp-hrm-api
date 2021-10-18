import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryScaleCreateWithoutJobStepInput } from './salary-scale-create-without-job-step.input';
import { SalaryScaleCreateOrConnectWithoutJobStepInput } from './salary-scale-create-or-connect-without-job-step.input';
import { SalaryScaleCreateManyJobStepInputEnvelope } from './salary-scale-create-many-job-step-input-envelope.input';
import { SalaryScaleWhereUniqueInput } from './salary-scale-where-unique.input';

@InputType()
export class SalaryScaleUncheckedCreateNestedManyWithoutJobStepInput {
  @Field(() => [SalaryScaleCreateWithoutJobStepInput], { nullable: true })
  create?: Array<SalaryScaleCreateWithoutJobStepInput>;

  @Field(() => [SalaryScaleCreateOrConnectWithoutJobStepInput], {
    nullable: true,
  })
  connectOrCreate?: Array<SalaryScaleCreateOrConnectWithoutJobStepInput>;

  @Field(() => SalaryScaleCreateManyJobStepInputEnvelope, { nullable: true })
  createMany?: SalaryScaleCreateManyJobStepInputEnvelope;

  @Field(() => [SalaryScaleWhereUniqueInput], { nullable: true })
  connect?: Array<SalaryScaleWhereUniqueInput>;
}

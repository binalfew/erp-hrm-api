import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryScaleCreateManyJobStepInput } from './salary-scale-create-many-job-step.input';

@InputType()
export class SalaryScaleCreateManyJobStepInputEnvelope {
  @Field(() => [SalaryScaleCreateManyJobStepInput], { nullable: false })
  data!: Array<SalaryScaleCreateManyJobStepInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

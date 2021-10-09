import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobStepUpdateWithoutSalaryScalesInput } from './job-step-update-without-salary-scales.input';
import { JobStepCreateWithoutSalaryScalesInput } from './job-step-create-without-salary-scales.input';

@InputType()
export class JobStepUpsertWithoutSalaryScalesInput {

    @Field(() => JobStepUpdateWithoutSalaryScalesInput, {nullable:false})
    update!: JobStepUpdateWithoutSalaryScalesInput;

    @Field(() => JobStepCreateWithoutSalaryScalesInput, {nullable:false})
    create!: JobStepCreateWithoutSalaryScalesInput;
}

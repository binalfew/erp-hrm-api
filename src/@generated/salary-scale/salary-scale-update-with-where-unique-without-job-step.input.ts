import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryScaleWhereUniqueInput } from './salary-scale-where-unique.input';
import { SalaryScaleUpdateWithoutJobStepInput } from './salary-scale-update-without-job-step.input';

@InputType()
export class SalaryScaleUpdateWithWhereUniqueWithoutJobStepInput {

    @Field(() => SalaryScaleWhereUniqueInput, {nullable:false})
    where!: SalaryScaleWhereUniqueInput;

    @Field(() => SalaryScaleUpdateWithoutJobStepInput, {nullable:false})
    data!: SalaryScaleUpdateWithoutJobStepInput;
}

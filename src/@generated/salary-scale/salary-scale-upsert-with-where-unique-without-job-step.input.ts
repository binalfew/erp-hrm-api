import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryScaleWhereUniqueInput } from './salary-scale-where-unique.input';
import { SalaryScaleUpdateWithoutJobStepInput } from './salary-scale-update-without-job-step.input';
import { SalaryScaleCreateWithoutJobStepInput } from './salary-scale-create-without-job-step.input';

@InputType()
export class SalaryScaleUpsertWithWhereUniqueWithoutJobStepInput {

    @Field(() => SalaryScaleWhereUniqueInput, {nullable:false})
    where!: SalaryScaleWhereUniqueInput;

    @Field(() => SalaryScaleUpdateWithoutJobStepInput, {nullable:false})
    update!: SalaryScaleUpdateWithoutJobStepInput;

    @Field(() => SalaryScaleCreateWithoutJobStepInput, {nullable:false})
    create!: SalaryScaleCreateWithoutJobStepInput;
}

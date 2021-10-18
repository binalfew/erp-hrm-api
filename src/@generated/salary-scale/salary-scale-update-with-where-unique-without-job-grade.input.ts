import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryScaleWhereUniqueInput } from './salary-scale-where-unique.input';
import { SalaryScaleUpdateWithoutJobGradeInput } from './salary-scale-update-without-job-grade.input';

@InputType()
export class SalaryScaleUpdateWithWhereUniqueWithoutJobGradeInput {
  @Field(() => SalaryScaleWhereUniqueInput, { nullable: false })
  where!: SalaryScaleWhereUniqueInput;

  @Field(() => SalaryScaleUpdateWithoutJobGradeInput, { nullable: false })
  data!: SalaryScaleUpdateWithoutJobGradeInput;
}

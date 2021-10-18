import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryScaleWhereUniqueInput } from './salary-scale-where-unique.input';
import { SalaryScaleUpdateWithoutJobGradeInput } from './salary-scale-update-without-job-grade.input';
import { SalaryScaleCreateWithoutJobGradeInput } from './salary-scale-create-without-job-grade.input';

@InputType()
export class SalaryScaleUpsertWithWhereUniqueWithoutJobGradeInput {
  @Field(() => SalaryScaleWhereUniqueInput, { nullable: false })
  where!: SalaryScaleWhereUniqueInput;

  @Field(() => SalaryScaleUpdateWithoutJobGradeInput, { nullable: false })
  update!: SalaryScaleUpdateWithoutJobGradeInput;

  @Field(() => SalaryScaleCreateWithoutJobGradeInput, { nullable: false })
  create!: SalaryScaleCreateWithoutJobGradeInput;
}

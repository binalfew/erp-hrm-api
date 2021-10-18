import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryScaleWhereUniqueInput } from './salary-scale-where-unique.input';
import { SalaryScaleCreateWithoutJobGradeInput } from './salary-scale-create-without-job-grade.input';

@InputType()
export class SalaryScaleCreateOrConnectWithoutJobGradeInput {
  @Field(() => SalaryScaleWhereUniqueInput, { nullable: false })
  where!: SalaryScaleWhereUniqueInput;

  @Field(() => SalaryScaleCreateWithoutJobGradeInput, { nullable: false })
  create!: SalaryScaleCreateWithoutJobGradeInput;
}

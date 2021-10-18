import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryScaleCreateWithoutJobGradeInput } from './salary-scale-create-without-job-grade.input';
import { SalaryScaleCreateOrConnectWithoutJobGradeInput } from './salary-scale-create-or-connect-without-job-grade.input';
import { SalaryScaleCreateManyJobGradeInputEnvelope } from './salary-scale-create-many-job-grade-input-envelope.input';
import { SalaryScaleWhereUniqueInput } from './salary-scale-where-unique.input';

@InputType()
export class SalaryScaleCreateNestedManyWithoutJobGradeInput {
  @Field(() => [SalaryScaleCreateWithoutJobGradeInput], { nullable: true })
  create?: Array<SalaryScaleCreateWithoutJobGradeInput>;

  @Field(() => [SalaryScaleCreateOrConnectWithoutJobGradeInput], {
    nullable: true,
  })
  connectOrCreate?: Array<SalaryScaleCreateOrConnectWithoutJobGradeInput>;

  @Field(() => SalaryScaleCreateManyJobGradeInputEnvelope, { nullable: true })
  createMany?: SalaryScaleCreateManyJobGradeInputEnvelope;

  @Field(() => [SalaryScaleWhereUniqueInput], { nullable: true })
  connect?: Array<SalaryScaleWhereUniqueInput>;
}

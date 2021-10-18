import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryScaleCreateManyJobGradeInput } from './salary-scale-create-many-job-grade.input';

@InputType()
export class SalaryScaleCreateManyJobGradeInputEnvelope {
  @Field(() => [SalaryScaleCreateManyJobGradeInput], { nullable: false })
  data!: Array<SalaryScaleCreateManyJobGradeInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

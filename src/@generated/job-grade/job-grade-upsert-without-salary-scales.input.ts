import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobGradeUpdateWithoutSalaryScalesInput } from './job-grade-update-without-salary-scales.input';
import { JobGradeCreateWithoutSalaryScalesInput } from './job-grade-create-without-salary-scales.input';

@InputType()
export class JobGradeUpsertWithoutSalaryScalesInput {
  @Field(() => JobGradeUpdateWithoutSalaryScalesInput, { nullable: false })
  update!: JobGradeUpdateWithoutSalaryScalesInput;

  @Field(() => JobGradeCreateWithoutSalaryScalesInput, { nullable: false })
  create!: JobGradeCreateWithoutSalaryScalesInput;
}

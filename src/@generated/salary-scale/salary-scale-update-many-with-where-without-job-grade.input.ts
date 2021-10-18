import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryScaleScalarWhereInput } from './salary-scale-scalar-where.input';
import { SalaryScaleUpdateManyMutationInput } from './salary-scale-update-many-mutation.input';

@InputType()
export class SalaryScaleUpdateManyWithWhereWithoutJobGradeInput {
  @Field(() => SalaryScaleScalarWhereInput, { nullable: false })
  where!: SalaryScaleScalarWhereInput;

  @Field(() => SalaryScaleUpdateManyMutationInput, { nullable: false })
  data!: SalaryScaleUpdateManyMutationInput;
}

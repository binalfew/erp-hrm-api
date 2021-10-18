import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryScaleUpdateManyMutationInput } from './salary-scale-update-many-mutation.input';
import { SalaryScaleWhereInput } from './salary-scale-where.input';

@ArgsType()
export class UpdateManySalaryScaleArgs {
  @Field(() => SalaryScaleUpdateManyMutationInput, { nullable: false })
  data!: SalaryScaleUpdateManyMutationInput;

  @Field(() => SalaryScaleWhereInput, { nullable: true })
  where?: SalaryScaleWhereInput;
}

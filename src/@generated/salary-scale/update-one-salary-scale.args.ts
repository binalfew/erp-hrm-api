import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryScaleUpdateInput } from './salary-scale-update.input';
import { SalaryScaleWhereUniqueInput } from './salary-scale-where-unique.input';

@ArgsType()
export class UpdateOneSalaryScaleArgs {
  @Field(() => SalaryScaleUpdateInput, { nullable: false })
  data!: SalaryScaleUpdateInput;

  @Field(() => SalaryScaleWhereUniqueInput, { nullable: false })
  where!: SalaryScaleWhereUniqueInput;
}

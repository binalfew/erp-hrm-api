import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryScaleWhereUniqueInput } from './salary-scale-where-unique.input';
import { SalaryScaleCreateInput } from './salary-scale-create.input';
import { SalaryScaleUpdateInput } from './salary-scale-update.input';

@ArgsType()
export class UpsertOneSalaryScaleArgs {
  @Field(() => SalaryScaleWhereUniqueInput, { nullable: false })
  where!: SalaryScaleWhereUniqueInput;

  @Field(() => SalaryScaleCreateInput, { nullable: false })
  create!: SalaryScaleCreateInput;

  @Field(() => SalaryScaleUpdateInput, { nullable: false })
  update!: SalaryScaleUpdateInput;
}

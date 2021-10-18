import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryScaleCreateInput } from './salary-scale-create.input';

@ArgsType()
export class CreateOneSalaryScaleArgs {
  @Field(() => SalaryScaleCreateInput, { nullable: false })
  data!: SalaryScaleCreateInput;
}

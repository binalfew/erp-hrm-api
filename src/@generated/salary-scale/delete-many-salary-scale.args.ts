import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryScaleWhereInput } from './salary-scale-where.input';

@ArgsType()
export class DeleteManySalaryScaleArgs {
  @Field(() => SalaryScaleWhereInput, { nullable: true })
  where?: SalaryScaleWhereInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryScaleWhereUniqueInput } from './salary-scale-where-unique.input';

@ArgsType()
export class DeleteOneSalaryScaleArgs {

    @Field(() => SalaryScaleWhereUniqueInput, {nullable:false})
    where!: SalaryScaleWhereUniqueInput;
}

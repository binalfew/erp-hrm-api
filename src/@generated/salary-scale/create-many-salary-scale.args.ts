import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryScaleCreateManyInput } from './salary-scale-create-many.input';

@ArgsType()
export class CreateManySalaryScaleArgs {

    @Field(() => [SalaryScaleCreateManyInput], {nullable:false})
    data!: Array<SalaryScaleCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

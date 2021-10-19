import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryScaleWhereUniqueInput } from './salary-scale-where-unique.input';
import { SalaryScaleCreateWithoutPositionClassesInput } from './salary-scale-create-without-position-classes.input';

@InputType()
export class SalaryScaleCreateOrConnectWithoutPositionClassesInput {

    @Field(() => SalaryScaleWhereUniqueInput, {nullable:false})
    where!: SalaryScaleWhereUniqueInput;

    @Field(() => SalaryScaleCreateWithoutPositionClassesInput, {nullable:false})
    create!: SalaryScaleCreateWithoutPositionClassesInput;
}

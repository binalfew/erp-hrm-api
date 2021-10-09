import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryScaleCreateWithoutPositionClassesInput } from './salary-scale-create-without-position-classes.input';
import { SalaryScaleCreateOrConnectWithoutPositionClassesInput } from './salary-scale-create-or-connect-without-position-classes.input';
import { SalaryScaleWhereUniqueInput } from './salary-scale-where-unique.input';

@InputType()
export class SalaryScaleCreateNestedOneWithoutPositionClassesInput {

    @Field(() => SalaryScaleCreateWithoutPositionClassesInput, {nullable:true})
    create?: SalaryScaleCreateWithoutPositionClassesInput;

    @Field(() => SalaryScaleCreateOrConnectWithoutPositionClassesInput, {nullable:true})
    connectOrCreate?: SalaryScaleCreateOrConnectWithoutPositionClassesInput;

    @Field(() => SalaryScaleWhereUniqueInput, {nullable:true})
    connect?: SalaryScaleWhereUniqueInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassWhereUniqueInput } from './position-class-where-unique.input';
import { PositionClassCreateWithoutSalaryScaleInput } from './position-class-create-without-salary-scale.input';

@InputType()
export class PositionClassCreateOrConnectWithoutSalaryScaleInput {

    @Field(() => PositionClassWhereUniqueInput, {nullable:false})
    where!: PositionClassWhereUniqueInput;

    @Field(() => PositionClassCreateWithoutSalaryScaleInput, {nullable:false})
    create!: PositionClassCreateWithoutSalaryScaleInput;
}

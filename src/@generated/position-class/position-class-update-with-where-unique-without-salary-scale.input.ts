import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassWhereUniqueInput } from './position-class-where-unique.input';
import { PositionClassUpdateWithoutSalaryScaleInput } from './position-class-update-without-salary-scale.input';

@InputType()
export class PositionClassUpdateWithWhereUniqueWithoutSalaryScaleInput {

    @Field(() => PositionClassWhereUniqueInput, {nullable:false})
    where!: PositionClassWhereUniqueInput;

    @Field(() => PositionClassUpdateWithoutSalaryScaleInput, {nullable:false})
    data!: PositionClassUpdateWithoutSalaryScaleInput;
}

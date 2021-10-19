import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassCreateManySalaryScaleInput } from './position-class-create-many-salary-scale.input';

@InputType()
export class PositionClassCreateManySalaryScaleInputEnvelope {

    @Field(() => [PositionClassCreateManySalaryScaleInput], {nullable:false})
    data!: Array<PositionClassCreateManySalaryScaleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

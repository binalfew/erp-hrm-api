import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SalaryScaleSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    jobGradeId?: true;

    @Field(() => Boolean, {nullable:true})
    jobStepId?: true;

    @Field(() => Boolean, {nullable:true})
    salary?: true;
}

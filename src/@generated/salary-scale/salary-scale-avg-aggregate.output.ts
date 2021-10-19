import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class SalaryScaleAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    jobGradeId?: number;

    @Field(() => Float, {nullable:true})
    jobStepId?: number;

    @Field(() => Float, {nullable:true})
    salary?: number;
}

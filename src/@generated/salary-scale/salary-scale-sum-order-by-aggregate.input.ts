import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class SalaryScaleSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    jobGradeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    jobStepId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    salary?: keyof typeof SortOrder;
}

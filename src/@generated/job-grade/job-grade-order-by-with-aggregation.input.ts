import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { JobGradeCountOrderByAggregateInput } from './job-grade-count-order-by-aggregate.input';
import { JobGradeAvgOrderByAggregateInput } from './job-grade-avg-order-by-aggregate.input';
import { JobGradeMaxOrderByAggregateInput } from './job-grade-max-order-by-aggregate.input';
import { JobGradeMinOrderByAggregateInput } from './job-grade-min-order-by-aggregate.input';
import { JobGradeSumOrderByAggregateInput } from './job-grade-sum-order-by-aggregate.input';

@InputType()
export class JobGradeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => JobGradeCountOrderByAggregateInput, {nullable:true})
    _count?: JobGradeCountOrderByAggregateInput;

    @Field(() => JobGradeAvgOrderByAggregateInput, {nullable:true})
    _avg?: JobGradeAvgOrderByAggregateInput;

    @Field(() => JobGradeMaxOrderByAggregateInput, {nullable:true})
    _max?: JobGradeMaxOrderByAggregateInput;

    @Field(() => JobGradeMinOrderByAggregateInput, {nullable:true})
    _min?: JobGradeMinOrderByAggregateInput;

    @Field(() => JobGradeSumOrderByAggregateInput, {nullable:true})
    _sum?: JobGradeSumOrderByAggregateInput;
}

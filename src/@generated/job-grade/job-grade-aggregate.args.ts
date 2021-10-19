import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobGradeWhereInput } from './job-grade-where.input';
import { JobGradeOrderByWithRelationInput } from './job-grade-order-by-with-relation.input';
import { JobGradeWhereUniqueInput } from './job-grade-where-unique.input';
import { Int } from '@nestjs/graphql';
import { JobGradeCountAggregateInput } from './job-grade-count-aggregate.input';
import { JobGradeAvgAggregateInput } from './job-grade-avg-aggregate.input';
import { JobGradeSumAggregateInput } from './job-grade-sum-aggregate.input';
import { JobGradeMinAggregateInput } from './job-grade-min-aggregate.input';
import { JobGradeMaxAggregateInput } from './job-grade-max-aggregate.input';

@ArgsType()
export class JobGradeAggregateArgs {

    @Field(() => JobGradeWhereInput, {nullable:true})
    where?: JobGradeWhereInput;

    @Field(() => [JobGradeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<JobGradeOrderByWithRelationInput>;

    @Field(() => JobGradeWhereUniqueInput, {nullable:true})
    cursor?: JobGradeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => JobGradeCountAggregateInput, {nullable:true})
    _count?: JobGradeCountAggregateInput;

    @Field(() => JobGradeAvgAggregateInput, {nullable:true})
    _avg?: JobGradeAvgAggregateInput;

    @Field(() => JobGradeSumAggregateInput, {nullable:true})
    _sum?: JobGradeSumAggregateInput;

    @Field(() => JobGradeMinAggregateInput, {nullable:true})
    _min?: JobGradeMinAggregateInput;

    @Field(() => JobGradeMaxAggregateInput, {nullable:true})
    _max?: JobGradeMaxAggregateInput;
}

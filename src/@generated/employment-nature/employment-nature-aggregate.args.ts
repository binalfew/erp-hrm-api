import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmploymentNatureWhereInput } from './employment-nature-where.input';
import { EmploymentNatureOrderByWithRelationInput } from './employment-nature-order-by-with-relation.input';
import { EmploymentNatureWhereUniqueInput } from './employment-nature-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EmploymentNatureCountAggregateInput } from './employment-nature-count-aggregate.input';
import { EmploymentNatureAvgAggregateInput } from './employment-nature-avg-aggregate.input';
import { EmploymentNatureSumAggregateInput } from './employment-nature-sum-aggregate.input';
import { EmploymentNatureMinAggregateInput } from './employment-nature-min-aggregate.input';
import { EmploymentNatureMaxAggregateInput } from './employment-nature-max-aggregate.input';

@ArgsType()
export class EmploymentNatureAggregateArgs {

    @Field(() => EmploymentNatureWhereInput, {nullable:true})
    where?: EmploymentNatureWhereInput;

    @Field(() => [EmploymentNatureOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EmploymentNatureOrderByWithRelationInput>;

    @Field(() => EmploymentNatureWhereUniqueInput, {nullable:true})
    cursor?: EmploymentNatureWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EmploymentNatureCountAggregateInput, {nullable:true})
    _count?: EmploymentNatureCountAggregateInput;

    @Field(() => EmploymentNatureAvgAggregateInput, {nullable:true})
    _avg?: EmploymentNatureAvgAggregateInput;

    @Field(() => EmploymentNatureSumAggregateInput, {nullable:true})
    _sum?: EmploymentNatureSumAggregateInput;

    @Field(() => EmploymentNatureMinAggregateInput, {nullable:true})
    _min?: EmploymentNatureMinAggregateInput;

    @Field(() => EmploymentNatureMaxAggregateInput, {nullable:true})
    _max?: EmploymentNatureMaxAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaritalStatusWhereInput } from './marital-status-where.input';
import { MaritalStatusOrderByWithRelationInput } from './marital-status-order-by-with-relation.input';
import { MaritalStatusWhereUniqueInput } from './marital-status-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MaritalStatusCountAggregateInput } from './marital-status-count-aggregate.input';
import { MaritalStatusAvgAggregateInput } from './marital-status-avg-aggregate.input';
import { MaritalStatusSumAggregateInput } from './marital-status-sum-aggregate.input';
import { MaritalStatusMinAggregateInput } from './marital-status-min-aggregate.input';
import { MaritalStatusMaxAggregateInput } from './marital-status-max-aggregate.input';

@ArgsType()
export class MaritalStatusAggregateArgs {

    @Field(() => MaritalStatusWhereInput, {nullable:true})
    where?: MaritalStatusWhereInput;

    @Field(() => [MaritalStatusOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MaritalStatusOrderByWithRelationInput>;

    @Field(() => MaritalStatusWhereUniqueInput, {nullable:true})
    cursor?: MaritalStatusWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MaritalStatusCountAggregateInput, {nullable:true})
    _count?: MaritalStatusCountAggregateInput;

    @Field(() => MaritalStatusAvgAggregateInput, {nullable:true})
    _avg?: MaritalStatusAvgAggregateInput;

    @Field(() => MaritalStatusSumAggregateInput, {nullable:true})
    _sum?: MaritalStatusSumAggregateInput;

    @Field(() => MaritalStatusMinAggregateInput, {nullable:true})
    _min?: MaritalStatusMinAggregateInput;

    @Field(() => MaritalStatusMaxAggregateInput, {nullable:true})
    _max?: MaritalStatusMaxAggregateInput;
}

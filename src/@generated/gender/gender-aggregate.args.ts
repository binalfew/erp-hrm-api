import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenderWhereInput } from './gender-where.input';
import { GenderOrderByWithRelationInput } from './gender-order-by-with-relation.input';
import { GenderWhereUniqueInput } from './gender-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GenderCountAggregateInput } from './gender-count-aggregate.input';
import { GenderAvgAggregateInput } from './gender-avg-aggregate.input';
import { GenderSumAggregateInput } from './gender-sum-aggregate.input';
import { GenderMinAggregateInput } from './gender-min-aggregate.input';
import { GenderMaxAggregateInput } from './gender-max-aggregate.input';

@ArgsType()
export class GenderAggregateArgs {

    @Field(() => GenderWhereInput, {nullable:true})
    where?: GenderWhereInput;

    @Field(() => [GenderOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GenderOrderByWithRelationInput>;

    @Field(() => GenderWhereUniqueInput, {nullable:true})
    cursor?: GenderWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GenderCountAggregateInput, {nullable:true})
    _count?: GenderCountAggregateInput;

    @Field(() => GenderAvgAggregateInput, {nullable:true})
    _avg?: GenderAvgAggregateInput;

    @Field(() => GenderSumAggregateInput, {nullable:true})
    _sum?: GenderSumAggregateInput;

    @Field(() => GenderMinAggregateInput, {nullable:true})
    _min?: GenderMinAggregateInput;

    @Field(() => GenderMaxAggregateInput, {nullable:true})
    _max?: GenderMaxAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionWhereInput } from './position-where.input';
import { PositionOrderByWithRelationInput } from './position-order-by-with-relation.input';
import { PositionWhereUniqueInput } from './position-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PositionCountAggregateInput } from './position-count-aggregate.input';
import { PositionAvgAggregateInput } from './position-avg-aggregate.input';
import { PositionSumAggregateInput } from './position-sum-aggregate.input';
import { PositionMinAggregateInput } from './position-min-aggregate.input';
import { PositionMaxAggregateInput } from './position-max-aggregate.input';

@ArgsType()
export class PositionAggregateArgs {

    @Field(() => PositionWhereInput, {nullable:true})
    where?: PositionWhereInput;

    @Field(() => [PositionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PositionOrderByWithRelationInput>;

    @Field(() => PositionWhereUniqueInput, {nullable:true})
    cursor?: PositionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PositionCountAggregateInput, {nullable:true})
    _count?: PositionCountAggregateInput;

    @Field(() => PositionAvgAggregateInput, {nullable:true})
    _avg?: PositionAvgAggregateInput;

    @Field(() => PositionSumAggregateInput, {nullable:true})
    _sum?: PositionSumAggregateInput;

    @Field(() => PositionMinAggregateInput, {nullable:true})
    _min?: PositionMinAggregateInput;

    @Field(() => PositionMaxAggregateInput, {nullable:true})
    _max?: PositionMaxAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionClassWhereInput } from './position-class-where.input';
import { PositionClassOrderByWithRelationInput } from './position-class-order-by-with-relation.input';
import { PositionClassWhereUniqueInput } from './position-class-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PositionClassCountAggregateInput } from './position-class-count-aggregate.input';
import { PositionClassAvgAggregateInput } from './position-class-avg-aggregate.input';
import { PositionClassSumAggregateInput } from './position-class-sum-aggregate.input';
import { PositionClassMinAggregateInput } from './position-class-min-aggregate.input';
import { PositionClassMaxAggregateInput } from './position-class-max-aggregate.input';

@ArgsType()
export class PositionClassAggregateArgs {

    @Field(() => PositionClassWhereInput, {nullable:true})
    where?: PositionClassWhereInput;

    @Field(() => [PositionClassOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PositionClassOrderByWithRelationInput>;

    @Field(() => PositionClassWhereUniqueInput, {nullable:true})
    cursor?: PositionClassWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PositionClassCountAggregateInput, {nullable:true})
    _count?: PositionClassCountAggregateInput;

    @Field(() => PositionClassAvgAggregateInput, {nullable:true})
    _avg?: PositionClassAvgAggregateInput;

    @Field(() => PositionClassSumAggregateInput, {nullable:true})
    _sum?: PositionClassSumAggregateInput;

    @Field(() => PositionClassMinAggregateInput, {nullable:true})
    _min?: PositionClassMinAggregateInput;

    @Field(() => PositionClassMaxAggregateInput, {nullable:true})
    _max?: PositionClassMaxAggregateInput;
}

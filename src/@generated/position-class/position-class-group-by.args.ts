import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionClassWhereInput } from './position-class-where.input';
import { PositionClassOrderByWithAggregationInput } from './position-class-order-by-with-aggregation.input';
import { PositionClassScalarFieldEnum } from './position-class-scalar-field.enum';
import { PositionClassScalarWhereWithAggregatesInput } from './position-class-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PositionClassCountAggregateInput } from './position-class-count-aggregate.input';
import { PositionClassAvgAggregateInput } from './position-class-avg-aggregate.input';
import { PositionClassSumAggregateInput } from './position-class-sum-aggregate.input';
import { PositionClassMinAggregateInput } from './position-class-min-aggregate.input';
import { PositionClassMaxAggregateInput } from './position-class-max-aggregate.input';

@ArgsType()
export class PositionClassGroupByArgs {

    @Field(() => PositionClassWhereInput, {nullable:true})
    where?: PositionClassWhereInput;

    @Field(() => [PositionClassOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PositionClassOrderByWithAggregationInput>;

    @Field(() => [PositionClassScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PositionClassScalarFieldEnum>;

    @Field(() => PositionClassScalarWhereWithAggregatesInput, {nullable:true})
    having?: PositionClassScalarWhereWithAggregatesInput;

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

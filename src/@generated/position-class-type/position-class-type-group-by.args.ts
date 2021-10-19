import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionClassTypeWhereInput } from './position-class-type-where.input';
import { PositionClassTypeOrderByWithAggregationInput } from './position-class-type-order-by-with-aggregation.input';
import { PositionClassTypeScalarFieldEnum } from './position-class-type-scalar-field.enum';
import { PositionClassTypeScalarWhereWithAggregatesInput } from './position-class-type-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PositionClassTypeCountAggregateInput } from './position-class-type-count-aggregate.input';
import { PositionClassTypeAvgAggregateInput } from './position-class-type-avg-aggregate.input';
import { PositionClassTypeSumAggregateInput } from './position-class-type-sum-aggregate.input';
import { PositionClassTypeMinAggregateInput } from './position-class-type-min-aggregate.input';
import { PositionClassTypeMaxAggregateInput } from './position-class-type-max-aggregate.input';

@ArgsType()
export class PositionClassTypeGroupByArgs {

    @Field(() => PositionClassTypeWhereInput, {nullable:true})
    where?: PositionClassTypeWhereInput;

    @Field(() => [PositionClassTypeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PositionClassTypeOrderByWithAggregationInput>;

    @Field(() => [PositionClassTypeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PositionClassTypeScalarFieldEnum>;

    @Field(() => PositionClassTypeScalarWhereWithAggregatesInput, {nullable:true})
    having?: PositionClassTypeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PositionClassTypeCountAggregateInput, {nullable:true})
    _count?: PositionClassTypeCountAggregateInput;

    @Field(() => PositionClassTypeAvgAggregateInput, {nullable:true})
    _avg?: PositionClassTypeAvgAggregateInput;

    @Field(() => PositionClassTypeSumAggregateInput, {nullable:true})
    _sum?: PositionClassTypeSumAggregateInput;

    @Field(() => PositionClassTypeMinAggregateInput, {nullable:true})
    _min?: PositionClassTypeMinAggregateInput;

    @Field(() => PositionClassTypeMaxAggregateInput, {nullable:true})
    _max?: PositionClassTypeMaxAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionClassCategoryWhereInput } from './position-class-category-where.input';
import { PositionClassCategoryOrderByWithAggregationInput } from './position-class-category-order-by-with-aggregation.input';
import { PositionClassCategoryScalarFieldEnum } from './position-class-category-scalar-field.enum';
import { PositionClassCategoryScalarWhereWithAggregatesInput } from './position-class-category-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PositionClassCategoryCountAggregateInput } from './position-class-category-count-aggregate.input';
import { PositionClassCategoryAvgAggregateInput } from './position-class-category-avg-aggregate.input';
import { PositionClassCategorySumAggregateInput } from './position-class-category-sum-aggregate.input';
import { PositionClassCategoryMinAggregateInput } from './position-class-category-min-aggregate.input';
import { PositionClassCategoryMaxAggregateInput } from './position-class-category-max-aggregate.input';

@ArgsType()
export class PositionClassCategoryGroupByArgs {

    @Field(() => PositionClassCategoryWhereInput, {nullable:true})
    where?: PositionClassCategoryWhereInput;

    @Field(() => [PositionClassCategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PositionClassCategoryOrderByWithAggregationInput>;

    @Field(() => [PositionClassCategoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PositionClassCategoryScalarFieldEnum>;

    @Field(() => PositionClassCategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: PositionClassCategoryScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PositionClassCategoryCountAggregateInput, {nullable:true})
    _count?: PositionClassCategoryCountAggregateInput;

    @Field(() => PositionClassCategoryAvgAggregateInput, {nullable:true})
    _avg?: PositionClassCategoryAvgAggregateInput;

    @Field(() => PositionClassCategorySumAggregateInput, {nullable:true})
    _sum?: PositionClassCategorySumAggregateInput;

    @Field(() => PositionClassCategoryMinAggregateInput, {nullable:true})
    _min?: PositionClassCategoryMinAggregateInput;

    @Field(() => PositionClassCategoryMaxAggregateInput, {nullable:true})
    _max?: PositionClassCategoryMaxAggregateInput;
}

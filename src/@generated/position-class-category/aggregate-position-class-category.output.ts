import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PositionClassCategoryCountAggregate } from './position-class-category-count-aggregate.output';
import { PositionClassCategoryAvgAggregate } from './position-class-category-avg-aggregate.output';
import { PositionClassCategorySumAggregate } from './position-class-category-sum-aggregate.output';
import { PositionClassCategoryMinAggregate } from './position-class-category-min-aggregate.output';
import { PositionClassCategoryMaxAggregate } from './position-class-category-max-aggregate.output';

@ObjectType()
export class AggregatePositionClassCategory {

    @Field(() => PositionClassCategoryCountAggregate, {nullable:true})
    _count?: PositionClassCategoryCountAggregate;

    @Field(() => PositionClassCategoryAvgAggregate, {nullable:true})
    _avg?: PositionClassCategoryAvgAggregate;

    @Field(() => PositionClassCategorySumAggregate, {nullable:true})
    _sum?: PositionClassCategorySumAggregate;

    @Field(() => PositionClassCategoryMinAggregate, {nullable:true})
    _min?: PositionClassCategoryMinAggregate;

    @Field(() => PositionClassCategoryMaxAggregate, {nullable:true})
    _max?: PositionClassCategoryMaxAggregate;
}

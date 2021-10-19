import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionClassCategoryWhereUniqueInput } from './position-class-category-where-unique.input';
import { PositionClassCategoryCreateInput } from './position-class-category-create.input';
import { PositionClassCategoryUpdateInput } from './position-class-category-update.input';

@ArgsType()
export class UpsertOnePositionClassCategoryArgs {

    @Field(() => PositionClassCategoryWhereUniqueInput, {nullable:false})
    where!: PositionClassCategoryWhereUniqueInput;

    @Field(() => PositionClassCategoryCreateInput, {nullable:false})
    create!: PositionClassCategoryCreateInput;

    @Field(() => PositionClassCategoryUpdateInput, {nullable:false})
    update!: PositionClassCategoryUpdateInput;
}

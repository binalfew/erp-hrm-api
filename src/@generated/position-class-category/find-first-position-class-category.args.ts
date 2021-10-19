import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionClassCategoryWhereInput } from './position-class-category-where.input';
import { PositionClassCategoryOrderByWithRelationInput } from './position-class-category-order-by-with-relation.input';
import { PositionClassCategoryWhereUniqueInput } from './position-class-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PositionClassCategoryScalarFieldEnum } from './position-class-category-scalar-field.enum';

@ArgsType()
export class FindFirstPositionClassCategoryArgs {

    @Field(() => PositionClassCategoryWhereInput, {nullable:true})
    where?: PositionClassCategoryWhereInput;

    @Field(() => [PositionClassCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PositionClassCategoryOrderByWithRelationInput>;

    @Field(() => PositionClassCategoryWhereUniqueInput, {nullable:true})
    cursor?: PositionClassCategoryWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PositionClassCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PositionClassCategoryScalarFieldEnum>;
}

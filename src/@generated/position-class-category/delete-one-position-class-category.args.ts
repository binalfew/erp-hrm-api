import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionClassCategoryWhereUniqueInput } from './position-class-category-where-unique.input';

@ArgsType()
export class DeleteOnePositionClassCategoryArgs {

    @Field(() => PositionClassCategoryWhereUniqueInput, {nullable:false})
    where!: PositionClassCategoryWhereUniqueInput;
}

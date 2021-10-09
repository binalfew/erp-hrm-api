import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassWhereUniqueInput } from './position-class-where-unique.input';
import { PositionClassUpdateWithoutPositionClassCategoryInput } from './position-class-update-without-position-class-category.input';

@InputType()
export class PositionClassUpdateWithWhereUniqueWithoutPositionClassCategoryInput {

    @Field(() => PositionClassWhereUniqueInput, {nullable:false})
    where!: PositionClassWhereUniqueInput;

    @Field(() => PositionClassUpdateWithoutPositionClassCategoryInput, {nullable:false})
    data!: PositionClassUpdateWithoutPositionClassCategoryInput;
}

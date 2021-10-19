import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassCategoryWhereUniqueInput } from './position-class-category-where-unique.input';
import { PositionClassCategoryCreateWithoutPositionClassesInput } from './position-class-category-create-without-position-classes.input';

@InputType()
export class PositionClassCategoryCreateOrConnectWithoutPositionClassesInput {

    @Field(() => PositionClassCategoryWhereUniqueInput, {nullable:false})
    where!: PositionClassCategoryWhereUniqueInput;

    @Field(() => PositionClassCategoryCreateWithoutPositionClassesInput, {nullable:false})
    create!: PositionClassCategoryCreateWithoutPositionClassesInput;
}

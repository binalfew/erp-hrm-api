import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassWhereUniqueInput } from './position-class-where-unique.input';
import { PositionClassCreateWithoutPositionClassCategoryInput } from './position-class-create-without-position-class-category.input';

@InputType()
export class PositionClassCreateOrConnectWithoutPositionClassCategoryInput {

    @Field(() => PositionClassWhereUniqueInput, {nullable:false})
    where!: PositionClassWhereUniqueInput;

    @Field(() => PositionClassCreateWithoutPositionClassCategoryInput, {nullable:false})
    create!: PositionClassCreateWithoutPositionClassCategoryInput;
}

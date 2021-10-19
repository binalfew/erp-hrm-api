import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassCategoryCreateWithoutPositionClassesInput } from './position-class-category-create-without-position-classes.input';
import { PositionClassCategoryCreateOrConnectWithoutPositionClassesInput } from './position-class-category-create-or-connect-without-position-classes.input';
import { PositionClassCategoryUpsertWithoutPositionClassesInput } from './position-class-category-upsert-without-position-classes.input';
import { PositionClassCategoryWhereUniqueInput } from './position-class-category-where-unique.input';
import { PositionClassCategoryUpdateWithoutPositionClassesInput } from './position-class-category-update-without-position-classes.input';

@InputType()
export class PositionClassCategoryUpdateOneWithoutPositionClassesInput {

    @Field(() => PositionClassCategoryCreateWithoutPositionClassesInput, {nullable:true})
    create?: PositionClassCategoryCreateWithoutPositionClassesInput;

    @Field(() => PositionClassCategoryCreateOrConnectWithoutPositionClassesInput, {nullable:true})
    connectOrCreate?: PositionClassCategoryCreateOrConnectWithoutPositionClassesInput;

    @Field(() => PositionClassCategoryUpsertWithoutPositionClassesInput, {nullable:true})
    upsert?: PositionClassCategoryUpsertWithoutPositionClassesInput;

    @Field(() => PositionClassCategoryWhereUniqueInput, {nullable:true})
    connect?: PositionClassCategoryWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => PositionClassCategoryUpdateWithoutPositionClassesInput, {nullable:true})
    update?: PositionClassCategoryUpdateWithoutPositionClassesInput;
}

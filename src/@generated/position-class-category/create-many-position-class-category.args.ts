import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionClassCategoryCreateManyInput } from './position-class-category-create-many.input';

@ArgsType()
export class CreateManyPositionClassCategoryArgs {

    @Field(() => [PositionClassCategoryCreateManyInput], {nullable:false})
    data!: Array<PositionClassCategoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

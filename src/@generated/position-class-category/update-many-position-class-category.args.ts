import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionClassCategoryUpdateManyMutationInput } from './position-class-category-update-many-mutation.input';
import { PositionClassCategoryWhereInput } from './position-class-category-where.input';

@ArgsType()
export class UpdateManyPositionClassCategoryArgs {

    @Field(() => PositionClassCategoryUpdateManyMutationInput, {nullable:false})
    data!: PositionClassCategoryUpdateManyMutationInput;

    @Field(() => PositionClassCategoryWhereInput, {nullable:true})
    where?: PositionClassCategoryWhereInput;
}

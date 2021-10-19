import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassCreateManyPositionClassCategoryInput } from './position-class-create-many-position-class-category.input';

@InputType()
export class PositionClassCreateManyPositionClassCategoryInputEnvelope {

    @Field(() => [PositionClassCreateManyPositionClassCategoryInput], {nullable:false})
    data!: Array<PositionClassCreateManyPositionClassCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionClassTypeWhereUniqueInput } from './position-class-type-where-unique.input';
import { PositionClassTypeCreateInput } from './position-class-type-create.input';
import { PositionClassTypeUpdateInput } from './position-class-type-update.input';

@ArgsType()
export class UpsertOnePositionClassTypeArgs {

    @Field(() => PositionClassTypeWhereUniqueInput, {nullable:false})
    where!: PositionClassTypeWhereUniqueInput;

    @Field(() => PositionClassTypeCreateInput, {nullable:false})
    create!: PositionClassTypeCreateInput;

    @Field(() => PositionClassTypeUpdateInput, {nullable:false})
    update!: PositionClassTypeUpdateInput;
}

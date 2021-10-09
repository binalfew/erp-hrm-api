import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionUpdateInput } from './position-update.input';
import { PositionWhereUniqueInput } from './position-where-unique.input';

@ArgsType()
export class UpdateOnePositionArgs {

    @Field(() => PositionUpdateInput, {nullable:false})
    data!: PositionUpdateInput;

    @Field(() => PositionWhereUniqueInput, {nullable:false})
    where!: PositionWhereUniqueInput;
}

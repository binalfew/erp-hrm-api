import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionWhereUniqueInput } from './position-where-unique.input';

@ArgsType()
export class DeleteOnePositionArgs {

    @Field(() => PositionWhereUniqueInput, {nullable:false})
    where!: PositionWhereUniqueInput;
}

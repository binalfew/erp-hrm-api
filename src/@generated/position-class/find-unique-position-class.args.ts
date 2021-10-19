import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionClassWhereUniqueInput } from './position-class-where-unique.input';

@ArgsType()
export class FindUniquePositionClassArgs {

    @Field(() => PositionClassWhereUniqueInput, {nullable:false})
    where!: PositionClassWhereUniqueInput;
}

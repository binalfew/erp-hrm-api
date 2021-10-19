import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenderUpdateInput } from './gender-update.input';
import { GenderWhereUniqueInput } from './gender-where-unique.input';

@ArgsType()
export class UpdateOneGenderArgs {

    @Field(() => GenderUpdateInput, {nullable:false})
    data!: GenderUpdateInput;

    @Field(() => GenderWhereUniqueInput, {nullable:false})
    where!: GenderWhereUniqueInput;
}

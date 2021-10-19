import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NationalityUpdateInput } from './nationality-update.input';
import { NationalityWhereUniqueInput } from './nationality-where-unique.input';

@ArgsType()
export class UpdateOneNationalityArgs {

    @Field(() => NationalityUpdateInput, {nullable:false})
    data!: NationalityUpdateInput;

    @Field(() => NationalityWhereUniqueInput, {nullable:false})
    where!: NationalityWhereUniqueInput;
}

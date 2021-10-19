import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NationalityWhereUniqueInput } from './nationality-where-unique.input';
import { NationalityCreateInput } from './nationality-create.input';
import { NationalityUpdateInput } from './nationality-update.input';

@ArgsType()
export class UpsertOneNationalityArgs {

    @Field(() => NationalityWhereUniqueInput, {nullable:false})
    where!: NationalityWhereUniqueInput;

    @Field(() => NationalityCreateInput, {nullable:false})
    create!: NationalityCreateInput;

    @Field(() => NationalityUpdateInput, {nullable:false})
    update!: NationalityUpdateInput;
}

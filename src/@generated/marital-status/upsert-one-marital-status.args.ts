import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaritalStatusWhereUniqueInput } from './marital-status-where-unique.input';
import { MaritalStatusCreateInput } from './marital-status-create.input';
import { MaritalStatusUpdateInput } from './marital-status-update.input';

@ArgsType()
export class UpsertOneMaritalStatusArgs {

    @Field(() => MaritalStatusWhereUniqueInput, {nullable:false})
    where!: MaritalStatusWhereUniqueInput;

    @Field(() => MaritalStatusCreateInput, {nullable:false})
    create!: MaritalStatusCreateInput;

    @Field(() => MaritalStatusUpdateInput, {nullable:false})
    update!: MaritalStatusUpdateInput;
}

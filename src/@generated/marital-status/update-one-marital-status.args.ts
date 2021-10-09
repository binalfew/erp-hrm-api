import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaritalStatusUpdateInput } from './marital-status-update.input';
import { MaritalStatusWhereUniqueInput } from './marital-status-where-unique.input';

@ArgsType()
export class UpdateOneMaritalStatusArgs {

    @Field(() => MaritalStatusUpdateInput, {nullable:false})
    data!: MaritalStatusUpdateInput;

    @Field(() => MaritalStatusWhereUniqueInput, {nullable:false})
    where!: MaritalStatusWhereUniqueInput;
}

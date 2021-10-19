import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaritalStatusUpdateManyMutationInput } from './marital-status-update-many-mutation.input';
import { MaritalStatusWhereInput } from './marital-status-where.input';

@ArgsType()
export class UpdateManyMaritalStatusArgs {

    @Field(() => MaritalStatusUpdateManyMutationInput, {nullable:false})
    data!: MaritalStatusUpdateManyMutationInput;

    @Field(() => MaritalStatusWhereInput, {nullable:true})
    where?: MaritalStatusWhereInput;
}

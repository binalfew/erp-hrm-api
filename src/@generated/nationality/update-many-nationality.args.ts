import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NationalityUpdateManyMutationInput } from './nationality-update-many-mutation.input';
import { NationalityWhereInput } from './nationality-where.input';

@ArgsType()
export class UpdateManyNationalityArgs {

    @Field(() => NationalityUpdateManyMutationInput, {nullable:false})
    data!: NationalityUpdateManyMutationInput;

    @Field(() => NationalityWhereInput, {nullable:true})
    where?: NationalityWhereInput;
}

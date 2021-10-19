import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenderUpdateManyMutationInput } from './gender-update-many-mutation.input';
import { GenderWhereInput } from './gender-where.input';

@ArgsType()
export class UpdateManyGenderArgs {

    @Field(() => GenderUpdateManyMutationInput, {nullable:false})
    data!: GenderUpdateManyMutationInput;

    @Field(() => GenderWhereInput, {nullable:true})
    where?: GenderWhereInput;
}

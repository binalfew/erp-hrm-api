import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmploymentNatureUpdateManyMutationInput } from './employment-nature-update-many-mutation.input';
import { EmploymentNatureWhereInput } from './employment-nature-where.input';

@ArgsType()
export class UpdateManyEmploymentNatureArgs {

    @Field(() => EmploymentNatureUpdateManyMutationInput, {nullable:false})
    data!: EmploymentNatureUpdateManyMutationInput;

    @Field(() => EmploymentNatureWhereInput, {nullable:true})
    where?: EmploymentNatureWhereInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmploymentTypeUpdateManyMutationInput } from './employment-type-update-many-mutation.input';
import { EmploymentTypeWhereInput } from './employment-type-where.input';

@ArgsType()
export class UpdateManyEmploymentTypeArgs {

    @Field(() => EmploymentTypeUpdateManyMutationInput, {nullable:false})
    data!: EmploymentTypeUpdateManyMutationInput;

    @Field(() => EmploymentTypeWhereInput, {nullable:true})
    where?: EmploymentTypeWhereInput;
}

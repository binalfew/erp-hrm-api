import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmploymentTypeUpdateInput } from './employment-type-update.input';
import { EmploymentTypeWhereUniqueInput } from './employment-type-where-unique.input';

@ArgsType()
export class UpdateOneEmploymentTypeArgs {

    @Field(() => EmploymentTypeUpdateInput, {nullable:false})
    data!: EmploymentTypeUpdateInput;

    @Field(() => EmploymentTypeWhereUniqueInput, {nullable:false})
    where!: EmploymentTypeWhereUniqueInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmploymentTypeWhereUniqueInput } from './employment-type-where-unique.input';

@ArgsType()
export class DeleteOneEmploymentTypeArgs {

    @Field(() => EmploymentTypeWhereUniqueInput, {nullable:false})
    where!: EmploymentTypeWhereUniqueInput;
}

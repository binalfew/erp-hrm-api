import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmploymentTypeWhereInput } from './employment-type-where.input';

@ArgsType()
export class DeleteManyEmploymentTypeArgs {

    @Field(() => EmploymentTypeWhereInput, {nullable:true})
    where?: EmploymentTypeWhereInput;
}

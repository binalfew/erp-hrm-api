import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmploymentNatureWhereInput } from './employment-nature-where.input';

@ArgsType()
export class DeleteManyEmploymentNatureArgs {

    @Field(() => EmploymentNatureWhereInput, {nullable:true})
    where?: EmploymentNatureWhereInput;
}

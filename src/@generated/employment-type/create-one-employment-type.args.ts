import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmploymentTypeCreateInput } from './employment-type-create.input';

@ArgsType()
export class CreateOneEmploymentTypeArgs {

    @Field(() => EmploymentTypeCreateInput, {nullable:false})
    data!: EmploymentTypeCreateInput;
}

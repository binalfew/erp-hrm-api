import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmploymentNatureCreateInput } from './employment-nature-create.input';

@ArgsType()
export class CreateOneEmploymentNatureArgs {

    @Field(() => EmploymentNatureCreateInput, {nullable:false})
    data!: EmploymentNatureCreateInput;
}

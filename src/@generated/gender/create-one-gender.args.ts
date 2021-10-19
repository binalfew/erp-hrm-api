import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenderCreateInput } from './gender-create.input';

@ArgsType()
export class CreateOneGenderArgs {

    @Field(() => GenderCreateInput, {nullable:false})
    data!: GenderCreateInput;
}

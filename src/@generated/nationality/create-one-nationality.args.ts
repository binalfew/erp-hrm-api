import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NationalityCreateInput } from './nationality-create.input';

@ArgsType()
export class CreateOneNationalityArgs {

    @Field(() => NationalityCreateInput, {nullable:false})
    data!: NationalityCreateInput;
}

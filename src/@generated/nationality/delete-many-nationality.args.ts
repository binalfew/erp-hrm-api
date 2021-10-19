import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NationalityWhereInput } from './nationality-where.input';

@ArgsType()
export class DeleteManyNationalityArgs {

    @Field(() => NationalityWhereInput, {nullable:true})
    where?: NationalityWhereInput;
}

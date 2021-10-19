import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaritalStatusCreateManyInput } from './marital-status-create-many.input';

@ArgsType()
export class CreateManyMaritalStatusArgs {

    @Field(() => [MaritalStatusCreateManyInput], {nullable:false})
    data!: Array<MaritalStatusCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

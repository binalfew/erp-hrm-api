import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmploymentNatureWhereUniqueInput } from './employment-nature-where-unique.input';
import { EmploymentNatureCreateInput } from './employment-nature-create.input';
import { EmploymentNatureUpdateInput } from './employment-nature-update.input';

@ArgsType()
export class UpsertOneEmploymentNatureArgs {

    @Field(() => EmploymentNatureWhereUniqueInput, {nullable:false})
    where!: EmploymentNatureWhereUniqueInput;

    @Field(() => EmploymentNatureCreateInput, {nullable:false})
    create!: EmploymentNatureCreateInput;

    @Field(() => EmploymentNatureUpdateInput, {nullable:false})
    update!: EmploymentNatureUpdateInput;
}

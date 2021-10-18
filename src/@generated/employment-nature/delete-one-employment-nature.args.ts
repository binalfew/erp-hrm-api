import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmploymentNatureWhereUniqueInput } from './employment-nature-where-unique.input';

@ArgsType()
export class DeleteOneEmploymentNatureArgs {
  @Field(() => EmploymentNatureWhereUniqueInput, { nullable: false })
  where!: EmploymentNatureWhereUniqueInput;
}

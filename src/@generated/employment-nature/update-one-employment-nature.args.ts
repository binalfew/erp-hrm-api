import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmploymentNatureUpdateInput } from './employment-nature-update.input';
import { EmploymentNatureWhereUniqueInput } from './employment-nature-where-unique.input';

@ArgsType()
export class UpdateOneEmploymentNatureArgs {
  @Field(() => EmploymentNatureUpdateInput, { nullable: false })
  data!: EmploymentNatureUpdateInput;

  @Field(() => EmploymentNatureWhereUniqueInput, { nullable: false })
  where!: EmploymentNatureWhereUniqueInput;
}

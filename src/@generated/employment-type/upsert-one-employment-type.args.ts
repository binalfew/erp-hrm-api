import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmploymentTypeWhereUniqueInput } from './employment-type-where-unique.input';
import { EmploymentTypeCreateInput } from './employment-type-create.input';
import { EmploymentTypeUpdateInput } from './employment-type-update.input';

@ArgsType()
export class UpsertOneEmploymentTypeArgs {
  @Field(() => EmploymentTypeWhereUniqueInput, { nullable: false })
  where!: EmploymentTypeWhereUniqueInput;

  @Field(() => EmploymentTypeCreateInput, { nullable: false })
  create!: EmploymentTypeCreateInput;

  @Field(() => EmploymentTypeUpdateInput, { nullable: false })
  update!: EmploymentTypeUpdateInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenderWhereUniqueInput } from './gender-where-unique.input';
import { GenderCreateInput } from './gender-create.input';
import { GenderUpdateInput } from './gender-update.input';

@ArgsType()
export class UpsertOneGenderArgs {
  @Field(() => GenderWhereUniqueInput, { nullable: false })
  where!: GenderWhereUniqueInput;

  @Field(() => GenderCreateInput, { nullable: false })
  create!: GenderCreateInput;

  @Field(() => GenderUpdateInput, { nullable: false })
  update!: GenderUpdateInput;
}

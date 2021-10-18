import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenderWhereUniqueInput } from './gender-where-unique.input';

@ArgsType()
export class FindUniqueGenderArgs {
  @Field(() => GenderWhereUniqueInput, { nullable: false })
  where!: GenderWhereUniqueInput;
}

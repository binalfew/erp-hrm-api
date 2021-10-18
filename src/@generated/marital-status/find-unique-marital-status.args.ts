import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaritalStatusWhereUniqueInput } from './marital-status-where-unique.input';

@ArgsType()
export class FindUniqueMaritalStatusArgs {
  @Field(() => MaritalStatusWhereUniqueInput, { nullable: false })
  where!: MaritalStatusWhereUniqueInput;
}

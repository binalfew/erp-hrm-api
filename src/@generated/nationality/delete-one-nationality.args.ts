import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NationalityWhereUniqueInput } from './nationality-where-unique.input';

@ArgsType()
export class DeleteOneNationalityArgs {
  @Field(() => NationalityWhereUniqueInput, { nullable: false })
  where!: NationalityWhereUniqueInput;
}

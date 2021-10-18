import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaritalStatusWhereInput } from './marital-status-where.input';

@ArgsType()
export class DeleteManyMaritalStatusArgs {
  @Field(() => MaritalStatusWhereInput, { nullable: true })
  where?: MaritalStatusWhereInput;
}

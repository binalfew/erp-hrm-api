import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaritalStatusCreateInput } from './marital-status-create.input';

@ArgsType()
export class CreateOneMaritalStatusArgs {
  @Field(() => MaritalStatusCreateInput, { nullable: false })
  data!: MaritalStatusCreateInput;
}

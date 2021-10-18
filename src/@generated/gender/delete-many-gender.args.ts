import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenderWhereInput } from './gender-where.input';

@ArgsType()
export class DeleteManyGenderArgs {
  @Field(() => GenderWhereInput, { nullable: true })
  where?: GenderWhereInput;
}

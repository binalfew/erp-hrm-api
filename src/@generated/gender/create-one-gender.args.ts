import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { GenderCreateInput } from './gender-create.input';

@ArgsType()
export class CreateOneGenderArgs {
  @Field(() => GenderCreateInput, { nullable: false })
  @ValidateNested()
  @Type(() => GenderCreateInput)
  data!: GenderCreateInput;
}

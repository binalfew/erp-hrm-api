import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionCreateInput } from './position-create.input';

@ArgsType()
export class CreateOnePositionArgs {
  @Field(() => PositionCreateInput, { nullable: false })
  data!: PositionCreateInput;
}

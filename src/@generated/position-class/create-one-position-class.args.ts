import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionClassCreateInput } from './position-class-create.input';

@ArgsType()
export class CreateOnePositionClassArgs {
  @Field(() => PositionClassCreateInput, { nullable: false })
  data!: PositionClassCreateInput;
}

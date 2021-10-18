import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionClassTypeCreateInput } from './position-class-type-create.input';

@ArgsType()
export class CreateOnePositionClassTypeArgs {
  @Field(() => PositionClassTypeCreateInput, { nullable: false })
  data!: PositionClassTypeCreateInput;
}

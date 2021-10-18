import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionWhereInput } from './position-where.input';

@ArgsType()
export class DeleteManyPositionArgs {
  @Field(() => PositionWhereInput, { nullable: true })
  where?: PositionWhereInput;
}

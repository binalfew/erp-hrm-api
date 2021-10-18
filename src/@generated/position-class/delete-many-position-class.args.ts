import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionClassWhereInput } from './position-class-where.input';

@ArgsType()
export class DeleteManyPositionClassArgs {
  @Field(() => PositionClassWhereInput, { nullable: true })
  where?: PositionClassWhereInput;
}

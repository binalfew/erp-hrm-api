import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionClassTypeWhereInput } from './position-class-type-where.input';

@ArgsType()
export class DeleteManyPositionClassTypeArgs {
  @Field(() => PositionClassTypeWhereInput, { nullable: true })
  where?: PositionClassTypeWhereInput;
}

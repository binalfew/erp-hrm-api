import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionWhereUniqueInput } from './position-where-unique.input';
import { PositionCreateInput } from './position-create.input';
import { PositionUpdateInput } from './position-update.input';

@ArgsType()
export class UpsertOnePositionArgs {
  @Field(() => PositionWhereUniqueInput, { nullable: false })
  where!: PositionWhereUniqueInput;

  @Field(() => PositionCreateInput, { nullable: false })
  create!: PositionCreateInput;

  @Field(() => PositionUpdateInput, { nullable: false })
  update!: PositionUpdateInput;
}

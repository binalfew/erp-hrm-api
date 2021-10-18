import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionClassWhereUniqueInput } from './position-class-where-unique.input';
import { PositionClassCreateInput } from './position-class-create.input';
import { PositionClassUpdateInput } from './position-class-update.input';

@ArgsType()
export class UpsertOnePositionClassArgs {
  @Field(() => PositionClassWhereUniqueInput, { nullable: false })
  where!: PositionClassWhereUniqueInput;

  @Field(() => PositionClassCreateInput, { nullable: false })
  create!: PositionClassCreateInput;

  @Field(() => PositionClassUpdateInput, { nullable: false })
  update!: PositionClassUpdateInput;
}

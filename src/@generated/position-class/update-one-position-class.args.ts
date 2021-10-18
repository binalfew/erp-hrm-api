import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionClassUpdateInput } from './position-class-update.input';
import { PositionClassWhereUniqueInput } from './position-class-where-unique.input';

@ArgsType()
export class UpdateOnePositionClassArgs {
  @Field(() => PositionClassUpdateInput, { nullable: false })
  data!: PositionClassUpdateInput;

  @Field(() => PositionClassWhereUniqueInput, { nullable: false })
  where!: PositionClassWhereUniqueInput;
}

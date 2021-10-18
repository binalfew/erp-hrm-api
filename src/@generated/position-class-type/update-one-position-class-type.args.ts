import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionClassTypeUpdateInput } from './position-class-type-update.input';
import { PositionClassTypeWhereUniqueInput } from './position-class-type-where-unique.input';

@ArgsType()
export class UpdateOnePositionClassTypeArgs {
  @Field(() => PositionClassTypeUpdateInput, { nullable: false })
  data!: PositionClassTypeUpdateInput;

  @Field(() => PositionClassTypeWhereUniqueInput, { nullable: false })
  where!: PositionClassTypeWhereUniqueInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionClassTypeWhereUniqueInput } from './position-class-type-where-unique.input';

@ArgsType()
export class FindUniquePositionClassTypeArgs {
  @Field(() => PositionClassTypeWhereUniqueInput, { nullable: false })
  where!: PositionClassTypeWhereUniqueInput;
}

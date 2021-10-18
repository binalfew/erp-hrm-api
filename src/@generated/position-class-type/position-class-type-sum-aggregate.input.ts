import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PositionClassTypeSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
}

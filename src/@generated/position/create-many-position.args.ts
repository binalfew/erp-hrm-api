import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionCreateManyInput } from './position-create-many.input';

@ArgsType()
export class CreateManyPositionArgs {
  @Field(() => [PositionCreateManyInput], { nullable: false })
  data!: Array<PositionCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

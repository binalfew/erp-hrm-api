import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionClassCreateManyInput } from './position-class-create-many.input';

@ArgsType()
export class CreateManyPositionClassArgs {
  @Field(() => [PositionClassCreateManyInput], { nullable: false })
  data!: Array<PositionClassCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

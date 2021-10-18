import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionClassUpdateManyMutationInput } from './position-class-update-many-mutation.input';
import { PositionClassWhereInput } from './position-class-where.input';

@ArgsType()
export class UpdateManyPositionClassArgs {
  @Field(() => PositionClassUpdateManyMutationInput, { nullable: false })
  data!: PositionClassUpdateManyMutationInput;

  @Field(() => PositionClassWhereInput, { nullable: true })
  where?: PositionClassWhereInput;
}

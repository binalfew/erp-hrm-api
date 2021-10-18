import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionUpdateManyMutationInput } from './position-update-many-mutation.input';
import { PositionWhereInput } from './position-where.input';

@ArgsType()
export class UpdateManyPositionArgs {
  @Field(() => PositionUpdateManyMutationInput, { nullable: false })
  data!: PositionUpdateManyMutationInput;

  @Field(() => PositionWhereInput, { nullable: true })
  where?: PositionWhereInput;
}

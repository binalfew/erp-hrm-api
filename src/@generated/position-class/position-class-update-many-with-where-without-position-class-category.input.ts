import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassScalarWhereInput } from './position-class-scalar-where.input';
import { PositionClassUpdateManyMutationInput } from './position-class-update-many-mutation.input';

@InputType()
export class PositionClassUpdateManyWithWhereWithoutPositionClassCategoryInput {
  @Field(() => PositionClassScalarWhereInput, { nullable: false })
  where!: PositionClassScalarWhereInput;

  @Field(() => PositionClassUpdateManyMutationInput, { nullable: false })
  data!: PositionClassUpdateManyMutationInput;
}

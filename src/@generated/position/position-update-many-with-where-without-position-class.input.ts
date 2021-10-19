import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionScalarWhereInput } from './position-scalar-where.input';
import { PositionUpdateManyMutationInput } from './position-update-many-mutation.input';

@InputType()
export class PositionUpdateManyWithWhereWithoutPositionClassInput {

    @Field(() => PositionScalarWhereInput, {nullable:false})
    where!: PositionScalarWhereInput;

    @Field(() => PositionUpdateManyMutationInput, {nullable:false})
    data!: PositionUpdateManyMutationInput;
}

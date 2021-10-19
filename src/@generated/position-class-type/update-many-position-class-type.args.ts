import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionClassTypeUpdateManyMutationInput } from './position-class-type-update-many-mutation.input';
import { PositionClassTypeWhereInput } from './position-class-type-where.input';

@ArgsType()
export class UpdateManyPositionClassTypeArgs {

    @Field(() => PositionClassTypeUpdateManyMutationInput, {nullable:false})
    data!: PositionClassTypeUpdateManyMutationInput;

    @Field(() => PositionClassTypeWhereInput, {nullable:true})
    where?: PositionClassTypeWhereInput;
}

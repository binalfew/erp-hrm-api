import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionClassTypeCreateManyInput } from './position-class-type-create-many.input';

@ArgsType()
export class CreateManyPositionClassTypeArgs {

    @Field(() => [PositionClassTypeCreateManyInput], {nullable:false})
    data!: Array<PositionClassTypeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

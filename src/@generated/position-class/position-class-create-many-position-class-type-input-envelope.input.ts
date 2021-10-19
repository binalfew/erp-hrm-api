import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassCreateManyPositionClassTypeInput } from './position-class-create-many-position-class-type.input';

@InputType()
export class PositionClassCreateManyPositionClassTypeInputEnvelope {

    @Field(() => [PositionClassCreateManyPositionClassTypeInput], {nullable:false})
    data!: Array<PositionClassCreateManyPositionClassTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

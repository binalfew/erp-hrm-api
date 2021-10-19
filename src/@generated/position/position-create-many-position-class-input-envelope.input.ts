import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionCreateManyPositionClassInput } from './position-create-many-position-class.input';

@InputType()
export class PositionCreateManyPositionClassInputEnvelope {

    @Field(() => [PositionCreateManyPositionClassInput], {nullable:false})
    data!: Array<PositionCreateManyPositionClassInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

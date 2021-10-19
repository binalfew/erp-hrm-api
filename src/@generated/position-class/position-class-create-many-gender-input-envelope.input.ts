import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassCreateManyGenderInput } from './position-class-create-many-gender.input';

@InputType()
export class PositionClassCreateManyGenderInputEnvelope {

    @Field(() => [PositionClassCreateManyGenderInput], {nullable:false})
    data!: Array<PositionClassCreateManyGenderInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenderCreateWithoutPositionClassesInput } from './gender-create-without-position-classes.input';
import { GenderCreateOrConnectWithoutPositionClassesInput } from './gender-create-or-connect-without-position-classes.input';
import { GenderUpsertWithoutPositionClassesInput } from './gender-upsert-without-position-classes.input';
import { GenderWhereUniqueInput } from './gender-where-unique.input';
import { GenderUpdateWithoutPositionClassesInput } from './gender-update-without-position-classes.input';

@InputType()
export class GenderUpdateOneWithoutPositionClassesInput {

    @Field(() => GenderCreateWithoutPositionClassesInput, {nullable:true})
    create?: GenderCreateWithoutPositionClassesInput;

    @Field(() => GenderCreateOrConnectWithoutPositionClassesInput, {nullable:true})
    connectOrCreate?: GenderCreateOrConnectWithoutPositionClassesInput;

    @Field(() => GenderUpsertWithoutPositionClassesInput, {nullable:true})
    upsert?: GenderUpsertWithoutPositionClassesInput;

    @Field(() => GenderWhereUniqueInput, {nullable:true})
    connect?: GenderWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => GenderUpdateWithoutPositionClassesInput, {nullable:true})
    update?: GenderUpdateWithoutPositionClassesInput;
}

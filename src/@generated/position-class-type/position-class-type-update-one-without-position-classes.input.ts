import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassTypeCreateWithoutPositionClassesInput } from './position-class-type-create-without-position-classes.input';
import { PositionClassTypeCreateOrConnectWithoutPositionClassesInput } from './position-class-type-create-or-connect-without-position-classes.input';
import { PositionClassTypeUpsertWithoutPositionClassesInput } from './position-class-type-upsert-without-position-classes.input';
import { PositionClassTypeWhereUniqueInput } from './position-class-type-where-unique.input';
import { PositionClassTypeUpdateWithoutPositionClassesInput } from './position-class-type-update-without-position-classes.input';

@InputType()
export class PositionClassTypeUpdateOneWithoutPositionClassesInput {

    @Field(() => PositionClassTypeCreateWithoutPositionClassesInput, {nullable:true})
    create?: PositionClassTypeCreateWithoutPositionClassesInput;

    @Field(() => PositionClassTypeCreateOrConnectWithoutPositionClassesInput, {nullable:true})
    connectOrCreate?: PositionClassTypeCreateOrConnectWithoutPositionClassesInput;

    @Field(() => PositionClassTypeUpsertWithoutPositionClassesInput, {nullable:true})
    upsert?: PositionClassTypeUpsertWithoutPositionClassesInput;

    @Field(() => PositionClassTypeWhereUniqueInput, {nullable:true})
    connect?: PositionClassTypeWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => PositionClassTypeUpdateWithoutPositionClassesInput, {nullable:true})
    update?: PositionClassTypeUpdateWithoutPositionClassesInput;
}

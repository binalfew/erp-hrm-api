import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionClassTypeCreateWithoutPositionClassesInput } from './position-class-type-create-without-position-classes.input';
import { PositionClassTypeCreateOrConnectWithoutPositionClassesInput } from './position-class-type-create-or-connect-without-position-classes.input';
import { PositionClassTypeWhereUniqueInput } from './position-class-type-where-unique.input';

@InputType()
export class PositionClassTypeCreateNestedOneWithoutPositionClassesInput {

    @Field(() => PositionClassTypeCreateWithoutPositionClassesInput, {nullable:true})
    create?: PositionClassTypeCreateWithoutPositionClassesInput;

    @Field(() => PositionClassTypeCreateOrConnectWithoutPositionClassesInput, {nullable:true})
    connectOrCreate?: PositionClassTypeCreateOrConnectWithoutPositionClassesInput;

    @Field(() => PositionClassTypeWhereUniqueInput, {nullable:true})
    connect?: PositionClassTypeWhereUniqueInput;
}

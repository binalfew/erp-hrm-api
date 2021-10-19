import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenderCreateWithoutEmployeesInput } from './gender-create-without-employees.input';
import { GenderCreateOrConnectWithoutEmployeesInput } from './gender-create-or-connect-without-employees.input';
import { GenderUpsertWithoutEmployeesInput } from './gender-upsert-without-employees.input';
import { GenderWhereUniqueInput } from './gender-where-unique.input';
import { GenderUpdateWithoutEmployeesInput } from './gender-update-without-employees.input';

@InputType()
export class GenderUpdateOneWithoutEmployeesInput {

    @Field(() => GenderCreateWithoutEmployeesInput, {nullable:true})
    create?: GenderCreateWithoutEmployeesInput;

    @Field(() => GenderCreateOrConnectWithoutEmployeesInput, {nullable:true})
    connectOrCreate?: GenderCreateOrConnectWithoutEmployeesInput;

    @Field(() => GenderUpsertWithoutEmployeesInput, {nullable:true})
    upsert?: GenderUpsertWithoutEmployeesInput;

    @Field(() => GenderWhereUniqueInput, {nullable:true})
    connect?: GenderWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => GenderUpdateWithoutEmployeesInput, {nullable:true})
    update?: GenderUpdateWithoutEmployeesInput;
}

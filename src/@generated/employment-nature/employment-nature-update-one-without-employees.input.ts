import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmploymentNatureCreateWithoutEmployeesInput } from './employment-nature-create-without-employees.input';
import { EmploymentNatureCreateOrConnectWithoutEmployeesInput } from './employment-nature-create-or-connect-without-employees.input';
import { EmploymentNatureUpsertWithoutEmployeesInput } from './employment-nature-upsert-without-employees.input';
import { EmploymentNatureWhereUniqueInput } from './employment-nature-where-unique.input';
import { EmploymentNatureUpdateWithoutEmployeesInput } from './employment-nature-update-without-employees.input';

@InputType()
export class EmploymentNatureUpdateOneWithoutEmployeesInput {

    @Field(() => EmploymentNatureCreateWithoutEmployeesInput, {nullable:true})
    create?: EmploymentNatureCreateWithoutEmployeesInput;

    @Field(() => EmploymentNatureCreateOrConnectWithoutEmployeesInput, {nullable:true})
    connectOrCreate?: EmploymentNatureCreateOrConnectWithoutEmployeesInput;

    @Field(() => EmploymentNatureUpsertWithoutEmployeesInput, {nullable:true})
    upsert?: EmploymentNatureUpsertWithoutEmployeesInput;

    @Field(() => EmploymentNatureWhereUniqueInput, {nullable:true})
    connect?: EmploymentNatureWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => EmploymentNatureUpdateWithoutEmployeesInput, {nullable:true})
    update?: EmploymentNatureUpdateWithoutEmployeesInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutMaritalStatusInput } from './employee-update-without-marital-status.input';
import { EmployeeCreateWithoutMaritalStatusInput } from './employee-create-without-marital-status.input';

@InputType()
export class EmployeeUpsertWithWhereUniqueWithoutMaritalStatusInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: EmployeeWhereUniqueInput;

    @Field(() => EmployeeUpdateWithoutMaritalStatusInput, {nullable:false})
    update!: EmployeeUpdateWithoutMaritalStatusInput;

    @Field(() => EmployeeCreateWithoutMaritalStatusInput, {nullable:false})
    create!: EmployeeCreateWithoutMaritalStatusInput;
}

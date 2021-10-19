import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeCreateWithoutNationalityInput } from './employee-create-without-nationality.input';

@InputType()
export class EmployeeCreateOrConnectWithoutNationalityInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: EmployeeWhereUniqueInput;

    @Field(() => EmployeeCreateWithoutNationalityInput, {nullable:false})
    create!: EmployeeCreateWithoutNationalityInput;
}

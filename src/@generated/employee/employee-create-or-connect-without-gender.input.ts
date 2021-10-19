import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeCreateWithoutGenderInput } from './employee-create-without-gender.input';

@InputType()
export class EmployeeCreateOrConnectWithoutGenderInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: EmployeeWhereUniqueInput;

    @Field(() => EmployeeCreateWithoutGenderInput, {nullable:false})
    create!: EmployeeCreateWithoutGenderInput;
}

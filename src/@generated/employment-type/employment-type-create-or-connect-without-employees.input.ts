import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmploymentTypeWhereUniqueInput } from './employment-type-where-unique.input';
import { EmploymentTypeCreateWithoutEmployeesInput } from './employment-type-create-without-employees.input';

@InputType()
export class EmploymentTypeCreateOrConnectWithoutEmployeesInput {

    @Field(() => EmploymentTypeWhereUniqueInput, {nullable:false})
    where!: EmploymentTypeWhereUniqueInput;

    @Field(() => EmploymentTypeCreateWithoutEmployeesInput, {nullable:false})
    create!: EmploymentTypeCreateWithoutEmployeesInput;
}

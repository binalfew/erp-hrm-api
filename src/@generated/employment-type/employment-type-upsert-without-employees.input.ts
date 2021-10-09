import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmploymentTypeUpdateWithoutEmployeesInput } from './employment-type-update-without-employees.input';
import { EmploymentTypeCreateWithoutEmployeesInput } from './employment-type-create-without-employees.input';

@InputType()
export class EmploymentTypeUpsertWithoutEmployeesInput {

    @Field(() => EmploymentTypeUpdateWithoutEmployeesInput, {nullable:false})
    update!: EmploymentTypeUpdateWithoutEmployeesInput;

    @Field(() => EmploymentTypeCreateWithoutEmployeesInput, {nullable:false})
    create!: EmploymentTypeCreateWithoutEmployeesInput;
}

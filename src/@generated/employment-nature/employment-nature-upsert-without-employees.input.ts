import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmploymentNatureUpdateWithoutEmployeesInput } from './employment-nature-update-without-employees.input';
import { EmploymentNatureCreateWithoutEmployeesInput } from './employment-nature-create-without-employees.input';

@InputType()
export class EmploymentNatureUpsertWithoutEmployeesInput {

    @Field(() => EmploymentNatureUpdateWithoutEmployeesInput, {nullable:false})
    update!: EmploymentNatureUpdateWithoutEmployeesInput;

    @Field(() => EmploymentNatureCreateWithoutEmployeesInput, {nullable:false})
    create!: EmploymentNatureCreateWithoutEmployeesInput;
}

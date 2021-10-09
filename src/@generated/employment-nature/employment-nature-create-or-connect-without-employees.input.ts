import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmploymentNatureWhereUniqueInput } from './employment-nature-where-unique.input';
import { EmploymentNatureCreateWithoutEmployeesInput } from './employment-nature-create-without-employees.input';

@InputType()
export class EmploymentNatureCreateOrConnectWithoutEmployeesInput {

    @Field(() => EmploymentNatureWhereUniqueInput, {nullable:false})
    where!: EmploymentNatureWhereUniqueInput;

    @Field(() => EmploymentNatureCreateWithoutEmployeesInput, {nullable:false})
    create!: EmploymentNatureCreateWithoutEmployeesInput;
}

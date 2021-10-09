import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutGenderInput } from './employee-update-without-gender.input';

@InputType()
export class EmployeeUpdateWithWhereUniqueWithoutGenderInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: EmployeeWhereUniqueInput;

    @Field(() => EmployeeUpdateWithoutGenderInput, {nullable:false})
    data!: EmployeeUpdateWithoutGenderInput;
}

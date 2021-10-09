import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutEmploymentTypeInput } from './employee-update-without-employment-type.input';

@InputType()
export class EmployeeUpdateWithWhereUniqueWithoutEmploymentTypeInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: EmployeeWhereUniqueInput;

    @Field(() => EmployeeUpdateWithoutEmploymentTypeInput, {nullable:false})
    data!: EmployeeUpdateWithoutEmploymentTypeInput;
}

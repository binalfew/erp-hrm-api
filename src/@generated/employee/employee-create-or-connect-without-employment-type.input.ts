import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeCreateWithoutEmploymentTypeInput } from './employee-create-without-employment-type.input';

@InputType()
export class EmployeeCreateOrConnectWithoutEmploymentTypeInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: EmployeeWhereUniqueInput;

    @Field(() => EmployeeCreateWithoutEmploymentTypeInput, {nullable:false})
    create!: EmployeeCreateWithoutEmploymentTypeInput;
}

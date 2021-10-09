import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutGenderInput } from './employee-update-without-gender.input';
import { EmployeeCreateWithoutGenderInput } from './employee-create-without-gender.input';

@InputType()
export class EmployeeUpsertWithWhereUniqueWithoutGenderInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: EmployeeWhereUniqueInput;

    @Field(() => EmployeeUpdateWithoutGenderInput, {nullable:false})
    update!: EmployeeUpdateWithoutGenderInput;

    @Field(() => EmployeeCreateWithoutGenderInput, {nullable:false})
    create!: EmployeeCreateWithoutGenderInput;
}

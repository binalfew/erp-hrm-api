import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateManyGenderInput } from './employee-create-many-gender.input';

@InputType()
export class EmployeeCreateManyGenderInputEnvelope {

    @Field(() => [EmployeeCreateManyGenderInput], {nullable:false})
    data!: Array<EmployeeCreateManyGenderInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

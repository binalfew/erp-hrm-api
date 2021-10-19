import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateManyEmploymentTypeInput } from './employee-create-many-employment-type.input';

@InputType()
export class EmployeeCreateManyEmploymentTypeInputEnvelope {

    @Field(() => [EmployeeCreateManyEmploymentTypeInput], {nullable:false})
    data!: Array<EmployeeCreateManyEmploymentTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

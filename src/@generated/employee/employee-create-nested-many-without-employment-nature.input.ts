import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutEmploymentNatureInput } from './employee-create-without-employment-nature.input';
import { EmployeeCreateOrConnectWithoutEmploymentNatureInput } from './employee-create-or-connect-without-employment-nature.input';
import { EmployeeCreateManyEmploymentNatureInputEnvelope } from './employee-create-many-employment-nature-input-envelope.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@InputType()
export class EmployeeCreateNestedManyWithoutEmploymentNatureInput {

    @Field(() => [EmployeeCreateWithoutEmploymentNatureInput], {nullable:true})
    create?: Array<EmployeeCreateWithoutEmploymentNatureInput>;

    @Field(() => [EmployeeCreateOrConnectWithoutEmploymentNatureInput], {nullable:true})
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutEmploymentNatureInput>;

    @Field(() => EmployeeCreateManyEmploymentNatureInputEnvelope, {nullable:true})
    createMany?: EmployeeCreateManyEmploymentNatureInputEnvelope;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeWhereUniqueInput>;
}

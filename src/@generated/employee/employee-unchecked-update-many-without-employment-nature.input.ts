import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutEmploymentNatureInput } from './employee-create-without-employment-nature.input';
import { EmployeeCreateOrConnectWithoutEmploymentNatureInput } from './employee-create-or-connect-without-employment-nature.input';
import { EmployeeUpsertWithWhereUniqueWithoutEmploymentNatureInput } from './employee-upsert-with-where-unique-without-employment-nature.input';
import { EmployeeCreateManyEmploymentNatureInputEnvelope } from './employee-create-many-employment-nature-input-envelope.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithWhereUniqueWithoutEmploymentNatureInput } from './employee-update-with-where-unique-without-employment-nature.input';
import { EmployeeUpdateManyWithWhereWithoutEmploymentNatureInput } from './employee-update-many-with-where-without-employment-nature.input';
import { EmployeeScalarWhereInput } from './employee-scalar-where.input';

@InputType()
export class EmployeeUncheckedUpdateManyWithoutEmploymentNatureInput {

    @Field(() => [EmployeeCreateWithoutEmploymentNatureInput], {nullable:true})
    create?: Array<EmployeeCreateWithoutEmploymentNatureInput>;

    @Field(() => [EmployeeCreateOrConnectWithoutEmploymentNatureInput], {nullable:true})
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutEmploymentNatureInput>;

    @Field(() => [EmployeeUpsertWithWhereUniqueWithoutEmploymentNatureInput], {nullable:true})
    upsert?: Array<EmployeeUpsertWithWhereUniqueWithoutEmploymentNatureInput>;

    @Field(() => EmployeeCreateManyEmploymentNatureInputEnvelope, {nullable:true})
    createMany?: EmployeeCreateManyEmploymentNatureInputEnvelope;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeWhereUniqueInput>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    set?: Array<EmployeeWhereUniqueInput>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    disconnect?: Array<EmployeeWhereUniqueInput>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    delete?: Array<EmployeeWhereUniqueInput>;

    @Field(() => [EmployeeUpdateWithWhereUniqueWithoutEmploymentNatureInput], {nullable:true})
    update?: Array<EmployeeUpdateWithWhereUniqueWithoutEmploymentNatureInput>;

    @Field(() => [EmployeeUpdateManyWithWhereWithoutEmploymentNatureInput], {nullable:true})
    updateMany?: Array<EmployeeUpdateManyWithWhereWithoutEmploymentNatureInput>;

    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    deleteMany?: Array<EmployeeScalarWhereInput>;
}

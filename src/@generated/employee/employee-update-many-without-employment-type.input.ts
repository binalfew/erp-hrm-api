import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutEmploymentTypeInput } from './employee-create-without-employment-type.input';
import { EmployeeCreateOrConnectWithoutEmploymentTypeInput } from './employee-create-or-connect-without-employment-type.input';
import { EmployeeUpsertWithWhereUniqueWithoutEmploymentTypeInput } from './employee-upsert-with-where-unique-without-employment-type.input';
import { EmployeeCreateManyEmploymentTypeInputEnvelope } from './employee-create-many-employment-type-input-envelope.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithWhereUniqueWithoutEmploymentTypeInput } from './employee-update-with-where-unique-without-employment-type.input';
import { EmployeeUpdateManyWithWhereWithoutEmploymentTypeInput } from './employee-update-many-with-where-without-employment-type.input';
import { EmployeeScalarWhereInput } from './employee-scalar-where.input';

@InputType()
export class EmployeeUpdateManyWithoutEmploymentTypeInput {

    @Field(() => [EmployeeCreateWithoutEmploymentTypeInput], {nullable:true})
    create?: Array<EmployeeCreateWithoutEmploymentTypeInput>;

    @Field(() => [EmployeeCreateOrConnectWithoutEmploymentTypeInput], {nullable:true})
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutEmploymentTypeInput>;

    @Field(() => [EmployeeUpsertWithWhereUniqueWithoutEmploymentTypeInput], {nullable:true})
    upsert?: Array<EmployeeUpsertWithWhereUniqueWithoutEmploymentTypeInput>;

    @Field(() => EmployeeCreateManyEmploymentTypeInputEnvelope, {nullable:true})
    createMany?: EmployeeCreateManyEmploymentTypeInputEnvelope;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeWhereUniqueInput>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    set?: Array<EmployeeWhereUniqueInput>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    disconnect?: Array<EmployeeWhereUniqueInput>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    delete?: Array<EmployeeWhereUniqueInput>;

    @Field(() => [EmployeeUpdateWithWhereUniqueWithoutEmploymentTypeInput], {nullable:true})
    update?: Array<EmployeeUpdateWithWhereUniqueWithoutEmploymentTypeInput>;

    @Field(() => [EmployeeUpdateManyWithWhereWithoutEmploymentTypeInput], {nullable:true})
    updateMany?: Array<EmployeeUpdateManyWithWhereWithoutEmploymentTypeInput>;

    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    deleteMany?: Array<EmployeeScalarWhereInput>;
}

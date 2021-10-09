import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryScaleCreateWithoutJobStepInput } from './salary-scale-create-without-job-step.input';
import { SalaryScaleCreateOrConnectWithoutJobStepInput } from './salary-scale-create-or-connect-without-job-step.input';
import { SalaryScaleUpsertWithWhereUniqueWithoutJobStepInput } from './salary-scale-upsert-with-where-unique-without-job-step.input';
import { SalaryScaleCreateManyJobStepInputEnvelope } from './salary-scale-create-many-job-step-input-envelope.input';
import { SalaryScaleWhereUniqueInput } from './salary-scale-where-unique.input';
import { SalaryScaleUpdateWithWhereUniqueWithoutJobStepInput } from './salary-scale-update-with-where-unique-without-job-step.input';
import { SalaryScaleUpdateManyWithWhereWithoutJobStepInput } from './salary-scale-update-many-with-where-without-job-step.input';
import { SalaryScaleScalarWhereInput } from './salary-scale-scalar-where.input';

@InputType()
export class SalaryScaleUncheckedUpdateManyWithoutJobStepInput {

    @Field(() => [SalaryScaleCreateWithoutJobStepInput], {nullable:true})
    create?: Array<SalaryScaleCreateWithoutJobStepInput>;

    @Field(() => [SalaryScaleCreateOrConnectWithoutJobStepInput], {nullable:true})
    connectOrCreate?: Array<SalaryScaleCreateOrConnectWithoutJobStepInput>;

    @Field(() => [SalaryScaleUpsertWithWhereUniqueWithoutJobStepInput], {nullable:true})
    upsert?: Array<SalaryScaleUpsertWithWhereUniqueWithoutJobStepInput>;

    @Field(() => SalaryScaleCreateManyJobStepInputEnvelope, {nullable:true})
    createMany?: SalaryScaleCreateManyJobStepInputEnvelope;

    @Field(() => [SalaryScaleWhereUniqueInput], {nullable:true})
    connect?: Array<SalaryScaleWhereUniqueInput>;

    @Field(() => [SalaryScaleWhereUniqueInput], {nullable:true})
    set?: Array<SalaryScaleWhereUniqueInput>;

    @Field(() => [SalaryScaleWhereUniqueInput], {nullable:true})
    disconnect?: Array<SalaryScaleWhereUniqueInput>;

    @Field(() => [SalaryScaleWhereUniqueInput], {nullable:true})
    delete?: Array<SalaryScaleWhereUniqueInput>;

    @Field(() => [SalaryScaleUpdateWithWhereUniqueWithoutJobStepInput], {nullable:true})
    update?: Array<SalaryScaleUpdateWithWhereUniqueWithoutJobStepInput>;

    @Field(() => [SalaryScaleUpdateManyWithWhereWithoutJobStepInput], {nullable:true})
    updateMany?: Array<SalaryScaleUpdateManyWithWhereWithoutJobStepInput>;

    @Field(() => [SalaryScaleScalarWhereInput], {nullable:true})
    deleteMany?: Array<SalaryScaleScalarWhereInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryScaleCreateWithoutJobGradeInput } from './salary-scale-create-without-job-grade.input';
import { SalaryScaleCreateOrConnectWithoutJobGradeInput } from './salary-scale-create-or-connect-without-job-grade.input';
import { SalaryScaleUpsertWithWhereUniqueWithoutJobGradeInput } from './salary-scale-upsert-with-where-unique-without-job-grade.input';
import { SalaryScaleCreateManyJobGradeInputEnvelope } from './salary-scale-create-many-job-grade-input-envelope.input';
import { SalaryScaleWhereUniqueInput } from './salary-scale-where-unique.input';
import { SalaryScaleUpdateWithWhereUniqueWithoutJobGradeInput } from './salary-scale-update-with-where-unique-without-job-grade.input';
import { SalaryScaleUpdateManyWithWhereWithoutJobGradeInput } from './salary-scale-update-many-with-where-without-job-grade.input';
import { SalaryScaleScalarWhereInput } from './salary-scale-scalar-where.input';

@InputType()
export class SalaryScaleUpdateManyWithoutJobGradeInput {

    @Field(() => [SalaryScaleCreateWithoutJobGradeInput], {nullable:true})
    create?: Array<SalaryScaleCreateWithoutJobGradeInput>;

    @Field(() => [SalaryScaleCreateOrConnectWithoutJobGradeInput], {nullable:true})
    connectOrCreate?: Array<SalaryScaleCreateOrConnectWithoutJobGradeInput>;

    @Field(() => [SalaryScaleUpsertWithWhereUniqueWithoutJobGradeInput], {nullable:true})
    upsert?: Array<SalaryScaleUpsertWithWhereUniqueWithoutJobGradeInput>;

    @Field(() => SalaryScaleCreateManyJobGradeInputEnvelope, {nullable:true})
    createMany?: SalaryScaleCreateManyJobGradeInputEnvelope;

    @Field(() => [SalaryScaleWhereUniqueInput], {nullable:true})
    connect?: Array<SalaryScaleWhereUniqueInput>;

    @Field(() => [SalaryScaleWhereUniqueInput], {nullable:true})
    set?: Array<SalaryScaleWhereUniqueInput>;

    @Field(() => [SalaryScaleWhereUniqueInput], {nullable:true})
    disconnect?: Array<SalaryScaleWhereUniqueInput>;

    @Field(() => [SalaryScaleWhereUniqueInput], {nullable:true})
    delete?: Array<SalaryScaleWhereUniqueInput>;

    @Field(() => [SalaryScaleUpdateWithWhereUniqueWithoutJobGradeInput], {nullable:true})
    update?: Array<SalaryScaleUpdateWithWhereUniqueWithoutJobGradeInput>;

    @Field(() => [SalaryScaleUpdateManyWithWhereWithoutJobGradeInput], {nullable:true})
    updateMany?: Array<SalaryScaleUpdateManyWithWhereWithoutJobGradeInput>;

    @Field(() => [SalaryScaleScalarWhereInput], {nullable:true})
    deleteMany?: Array<SalaryScaleScalarWhereInput>;
}

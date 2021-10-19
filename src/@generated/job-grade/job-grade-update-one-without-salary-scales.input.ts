import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobGradeCreateWithoutSalaryScalesInput } from './job-grade-create-without-salary-scales.input';
import { JobGradeCreateOrConnectWithoutSalaryScalesInput } from './job-grade-create-or-connect-without-salary-scales.input';
import { JobGradeUpsertWithoutSalaryScalesInput } from './job-grade-upsert-without-salary-scales.input';
import { JobGradeWhereUniqueInput } from './job-grade-where-unique.input';
import { JobGradeUpdateWithoutSalaryScalesInput } from './job-grade-update-without-salary-scales.input';

@InputType()
export class JobGradeUpdateOneWithoutSalaryScalesInput {

    @Field(() => JobGradeCreateWithoutSalaryScalesInput, {nullable:true})
    create?: JobGradeCreateWithoutSalaryScalesInput;

    @Field(() => JobGradeCreateOrConnectWithoutSalaryScalesInput, {nullable:true})
    connectOrCreate?: JobGradeCreateOrConnectWithoutSalaryScalesInput;

    @Field(() => JobGradeUpsertWithoutSalaryScalesInput, {nullable:true})
    upsert?: JobGradeUpsertWithoutSalaryScalesInput;

    @Field(() => JobGradeWhereUniqueInput, {nullable:true})
    connect?: JobGradeWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => JobGradeUpdateWithoutSalaryScalesInput, {nullable:true})
    update?: JobGradeUpdateWithoutSalaryScalesInput;
}

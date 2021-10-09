import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobGradeCreateWithoutSalaryScalesInput } from './job-grade-create-without-salary-scales.input';
import { JobGradeCreateOrConnectWithoutSalaryScalesInput } from './job-grade-create-or-connect-without-salary-scales.input';
import { JobGradeWhereUniqueInput } from './job-grade-where-unique.input';

@InputType()
export class JobGradeCreateNestedOneWithoutSalaryScalesInput {

    @Field(() => JobGradeCreateWithoutSalaryScalesInput, {nullable:true})
    create?: JobGradeCreateWithoutSalaryScalesInput;

    @Field(() => JobGradeCreateOrConnectWithoutSalaryScalesInput, {nullable:true})
    connectOrCreate?: JobGradeCreateOrConnectWithoutSalaryScalesInput;

    @Field(() => JobGradeWhereUniqueInput, {nullable:true})
    connect?: JobGradeWhereUniqueInput;
}

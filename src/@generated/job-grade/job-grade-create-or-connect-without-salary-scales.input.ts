import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobGradeWhereUniqueInput } from './job-grade-where-unique.input';
import { JobGradeCreateWithoutSalaryScalesInput } from './job-grade-create-without-salary-scales.input';

@InputType()
export class JobGradeCreateOrConnectWithoutSalaryScalesInput {

    @Field(() => JobGradeWhereUniqueInput, {nullable:false})
    where!: JobGradeWhereUniqueInput;

    @Field(() => JobGradeCreateWithoutSalaryScalesInput, {nullable:false})
    create!: JobGradeCreateWithoutSalaryScalesInput;
}

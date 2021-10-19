import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { JobGradeCreateNestedOneWithoutSalaryScalesInput } from '../job-grade/job-grade-create-nested-one-without-salary-scales.input';
import { JobStepCreateNestedOneWithoutSalaryScalesInput } from '../job-step/job-step-create-nested-one-without-salary-scales.input';
import { PositionClassCreateNestedManyWithoutSalaryScaleInput } from '../position-class/position-class-create-nested-many-without-salary-scale.input';

@InputType()
export class SalaryScaleCreateInput {

    @Field(() => Float, {nullable:true})
    salary?: number;

    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => JobGradeCreateNestedOneWithoutSalaryScalesInput, {nullable:true})
    jobGrade?: JobGradeCreateNestedOneWithoutSalaryScalesInput;

    @Field(() => JobStepCreateNestedOneWithoutSalaryScalesInput, {nullable:true})
    jobStep?: JobStepCreateNestedOneWithoutSalaryScalesInput;

    @Field(() => PositionClassCreateNestedManyWithoutSalaryScaleInput, {nullable:true})
    positionClasses?: PositionClassCreateNestedManyWithoutSalaryScaleInput;
}

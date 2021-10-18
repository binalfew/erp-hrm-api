import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { PositionClassUncheckedCreateNestedManyWithoutSalaryScaleInput } from '../position-class/position-class-unchecked-create-nested-many-without-salary-scale.input';

@InputType()
export class SalaryScaleUncheckedCreateWithoutJobGradeInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => Int, { nullable: true })
  jobStepId?: number;

  @Field(() => Float, { nullable: true })
  salary?: number;

  @Field(() => Boolean, { nullable: true })
  deleted?: boolean;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => PositionClassUncheckedCreateNestedManyWithoutSalaryScaleInput, {
    nullable: true,
  })
  positionClasses?: PositionClassUncheckedCreateNestedManyWithoutSalaryScaleInput;
}

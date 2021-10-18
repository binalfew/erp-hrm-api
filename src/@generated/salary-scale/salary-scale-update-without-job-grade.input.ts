import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { JobStepUpdateOneWithoutSalaryScalesInput } from '../job-step/job-step-update-one-without-salary-scales.input';
import { PositionClassUpdateManyWithoutSalaryScaleInput } from '../position-class/position-class-update-many-without-salary-scale.input';

@InputType()
export class SalaryScaleUpdateWithoutJobGradeInput {
  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  salary?: FloatFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  deleted?: BoolFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => JobStepUpdateOneWithoutSalaryScalesInput, { nullable: true })
  jobStep?: JobStepUpdateOneWithoutSalaryScalesInput;

  @Field(() => PositionClassUpdateManyWithoutSalaryScaleInput, {
    nullable: true,
  })
  positionClasses?: PositionClassUpdateManyWithoutSalaryScaleInput;
}

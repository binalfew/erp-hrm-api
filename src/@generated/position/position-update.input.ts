import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PositionClassUpdateOneWithoutPositionsInput } from '../position-class/position-class-update-one-without-positions.input';
import { DepartmentUpdateOneWithoutPositionsInput } from '../department/department-update-one-without-positions.input';

@InputType()
export class PositionUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  code?: StringFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  vacant?: BoolFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  deleted?: BoolFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => PositionClassUpdateOneWithoutPositionsInput, { nullable: true })
  positionClass?: PositionClassUpdateOneWithoutPositionsInput;

  @Field(() => DepartmentUpdateOneWithoutPositionsInput, { nullable: true })
  department?: DepartmentUpdateOneWithoutPositionsInput;
}

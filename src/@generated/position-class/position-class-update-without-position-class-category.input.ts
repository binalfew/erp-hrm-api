import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { GenderUpdateOneWithoutPositionClassesInput } from '../gender/gender-update-one-without-position-classes.input';
import { PositionClassTypeUpdateOneWithoutPositionClassesInput } from '../position-class-type/position-class-type-update-one-without-position-classes.input';
import { SalaryScaleUpdateOneWithoutPositionClassesInput } from '../salary-scale/salary-scale-update-one-without-position-classes.input';
import { PositionUpdateManyWithoutPositionClassInput } from '../position/position-update-many-without-position-class.input';

@InputType()
export class PositionClassUpdateWithoutPositionClassCategoryInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  code?: StringFieldUpdateOperationsInput;

  @Field(() => GraphQLJSON, { nullable: true })
  locales?: any;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  minimumAge?: IntFieldUpdateOperationsInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  maximumAge?: IntFieldUpdateOperationsInput;

  @Field(() => DecimalFieldUpdateOperationsInput, { nullable: true })
  monthlyWorkingHours?: DecimalFieldUpdateOperationsInput;

  @Field(() => DecimalFieldUpdateOperationsInput, { nullable: true })
  salary?: DecimalFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  specification?: NullableStringFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  deleted?: BoolFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => GenderUpdateOneWithoutPositionClassesInput, { nullable: true })
  gender?: GenderUpdateOneWithoutPositionClassesInput;

  @Field(() => PositionClassTypeUpdateOneWithoutPositionClassesInput, {
    nullable: true,
  })
  positionClassType?: PositionClassTypeUpdateOneWithoutPositionClassesInput;

  @Field(() => SalaryScaleUpdateOneWithoutPositionClassesInput, {
    nullable: true,
  })
  salaryScale?: SalaryScaleUpdateOneWithoutPositionClassesInput;

  @Field(() => PositionUpdateManyWithoutPositionClassInput, { nullable: true })
  positions?: PositionUpdateManyWithoutPositionClassInput;
}

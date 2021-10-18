import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DepartmentUpdateManyWithoutParentInput } from './department-update-many-without-parent.input';
import { PositionUpdateManyWithoutDepartmentInput } from '../position/position-update-many-without-department.input';

@InputType()
export class DepartmentUpdateWithoutParentInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  code?: StringFieldUpdateOperationsInput;

  @Field(() => GraphQLJSON, { nullable: true })
  locales?: any;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DepartmentUpdateManyWithoutParentInput, { nullable: true })
  children?: DepartmentUpdateManyWithoutParentInput;

  @Field(() => PositionUpdateManyWithoutDepartmentInput, { nullable: true })
  positions?: PositionUpdateManyWithoutDepartmentInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DepartmentUncheckedUpdateManyWithoutParentInput } from './department-unchecked-update-many-without-parent.input';
import { PositionUncheckedUpdateManyWithoutDepartmentInput } from '../position/position-unchecked-update-many-without-department.input';

@InputType()
export class DepartmentUncheckedUpdateWithoutParentInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: StringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DepartmentUncheckedUpdateManyWithoutParentInput, {nullable:true})
    children?: DepartmentUncheckedUpdateManyWithoutParentInput;

    @Field(() => PositionUncheckedUpdateManyWithoutDepartmentInput, {nullable:true})
    positions?: PositionUncheckedUpdateManyWithoutDepartmentInput;
}

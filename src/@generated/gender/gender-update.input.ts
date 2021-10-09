import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PositionClassUpdateManyWithoutGenderInput } from '../position-class/position-class-update-many-without-gender.input';
import { EmployeeUpdateManyWithoutGenderInput } from '../employee/employee-update-many-without-gender.input';

@InputType()
export class GenderUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: StringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PositionClassUpdateManyWithoutGenderInput, {nullable:true})
    positionClasses?: PositionClassUpdateManyWithoutGenderInput;

    @Field(() => EmployeeUpdateManyWithoutGenderInput, {nullable:true})
    employees?: EmployeeUpdateManyWithoutGenderInput;
}

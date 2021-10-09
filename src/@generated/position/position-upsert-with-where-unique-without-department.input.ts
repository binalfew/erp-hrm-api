import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionWhereUniqueInput } from './position-where-unique.input';
import { PositionUpdateWithoutDepartmentInput } from './position-update-without-department.input';
import { PositionCreateWithoutDepartmentInput } from './position-create-without-department.input';

@InputType()
export class PositionUpsertWithWhereUniqueWithoutDepartmentInput {

    @Field(() => PositionWhereUniqueInput, {nullable:false})
    where!: PositionWhereUniqueInput;

    @Field(() => PositionUpdateWithoutDepartmentInput, {nullable:false})
    update!: PositionUpdateWithoutDepartmentInput;

    @Field(() => PositionCreateWithoutDepartmentInput, {nullable:false})
    create!: PositionCreateWithoutDepartmentInput;
}

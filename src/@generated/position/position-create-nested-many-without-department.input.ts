import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionCreateWithoutDepartmentInput } from './position-create-without-department.input';
import { PositionCreateOrConnectWithoutDepartmentInput } from './position-create-or-connect-without-department.input';
import { PositionCreateManyDepartmentInputEnvelope } from './position-create-many-department-input-envelope.input';
import { PositionWhereUniqueInput } from './position-where-unique.input';

@InputType()
export class PositionCreateNestedManyWithoutDepartmentInput {

    @Field(() => [PositionCreateWithoutDepartmentInput], {nullable:true})
    create?: Array<PositionCreateWithoutDepartmentInput>;

    @Field(() => [PositionCreateOrConnectWithoutDepartmentInput], {nullable:true})
    connectOrCreate?: Array<PositionCreateOrConnectWithoutDepartmentInput>;

    @Field(() => PositionCreateManyDepartmentInputEnvelope, {nullable:true})
    createMany?: PositionCreateManyDepartmentInputEnvelope;

    @Field(() => [PositionWhereUniqueInput], {nullable:true})
    connect?: Array<PositionWhereUniqueInput>;
}

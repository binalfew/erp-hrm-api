import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutPositionsInput } from './department-create-without-positions.input';
import { DepartmentCreateOrConnectWithoutPositionsInput } from './department-create-or-connect-without-positions.input';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';

@InputType()
export class DepartmentCreateNestedOneWithoutPositionsInput {

    @Field(() => DepartmentCreateWithoutPositionsInput, {nullable:true})
    create?: DepartmentCreateWithoutPositionsInput;

    @Field(() => DepartmentCreateOrConnectWithoutPositionsInput, {nullable:true})
    connectOrCreate?: DepartmentCreateOrConnectWithoutPositionsInput;

    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    connect?: DepartmentWhereUniqueInput;
}

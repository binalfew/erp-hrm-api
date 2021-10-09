import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { DepartmentCreateWithoutPositionsInput } from './department-create-without-positions.input';

@InputType()
export class DepartmentCreateOrConnectWithoutPositionsInput {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    where!: DepartmentWhereUniqueInput;

    @Field(() => DepartmentCreateWithoutPositionsInput, {nullable:false})
    create!: DepartmentCreateWithoutPositionsInput;
}

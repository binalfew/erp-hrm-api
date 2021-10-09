import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { DepartmentCreateWithoutParentInput } from './department-create-without-parent.input';

@InputType()
export class DepartmentCreateOrConnectWithoutParentInput {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    where!: DepartmentWhereUniqueInput;

    @Field(() => DepartmentCreateWithoutParentInput, {nullable:false})
    create!: DepartmentCreateWithoutParentInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { DepartmentCreateWithoutChildrenInput } from './department-create-without-children.input';

@InputType()
export class DepartmentCreateOrConnectWithoutChildrenInput {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    where!: DepartmentWhereUniqueInput;

    @Field(() => DepartmentCreateWithoutChildrenInput, {nullable:false})
    create!: DepartmentCreateWithoutChildrenInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { DepartmentUpdateWithoutParentInput } from './department-update-without-parent.input';

@InputType()
export class DepartmentUpdateWithWhereUniqueWithoutParentInput {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    where!: DepartmentWhereUniqueInput;

    @Field(() => DepartmentUpdateWithoutParentInput, {nullable:false})
    data!: DepartmentUpdateWithoutParentInput;
}

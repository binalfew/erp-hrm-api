import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { DepartmentUpdateWithoutParentInput } from './department-update-without-parent.input';
import { DepartmentCreateWithoutParentInput } from './department-create-without-parent.input';

@InputType()
export class DepartmentUpsertWithWhereUniqueWithoutParentInput {

    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    where!: DepartmentWhereUniqueInput;

    @Field(() => DepartmentUpdateWithoutParentInput, {nullable:false})
    update!: DepartmentUpdateWithoutParentInput;

    @Field(() => DepartmentCreateWithoutParentInput, {nullable:false})
    create!: DepartmentCreateWithoutParentInput;
}

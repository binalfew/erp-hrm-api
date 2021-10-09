import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateManyParentInput } from './department-create-many-parent.input';

@InputType()
export class DepartmentCreateManyParentInputEnvelope {

    @Field(() => [DepartmentCreateManyParentInput], {nullable:false})
    data!: Array<DepartmentCreateManyParentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

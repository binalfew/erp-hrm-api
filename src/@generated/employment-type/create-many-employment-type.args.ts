import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmploymentTypeCreateManyInput } from './employment-type-create-many.input';

@ArgsType()
export class CreateManyEmploymentTypeArgs {

    @Field(() => [EmploymentTypeCreateManyInput], {nullable:false})
    data!: Array<EmploymentTypeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

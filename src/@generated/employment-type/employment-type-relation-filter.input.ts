import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmploymentTypeWhereInput } from './employment-type-where.input';

@InputType()
export class EmploymentTypeRelationFilter {

    @Field(() => EmploymentTypeWhereInput, {nullable:true})
    is?: EmploymentTypeWhereInput;

    @Field(() => EmploymentTypeWhereInput, {nullable:true})
    isNot?: EmploymentTypeWhereInput;
}

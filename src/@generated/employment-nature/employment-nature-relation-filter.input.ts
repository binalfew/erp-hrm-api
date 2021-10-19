import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmploymentNatureWhereInput } from './employment-nature-where.input';

@InputType()
export class EmploymentNatureRelationFilter {

    @Field(() => EmploymentNatureWhereInput, {nullable:true})
    is?: EmploymentNatureWhereInput;

    @Field(() => EmploymentNatureWhereInput, {nullable:true})
    isNot?: EmploymentNatureWhereInput;
}

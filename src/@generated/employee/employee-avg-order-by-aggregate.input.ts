import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class EmployeeAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    genderId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    nationalityId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    maritalStatusId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employmentTypeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    employmentNatureId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    numberOfChildren?: keyof typeof SortOrder;
}

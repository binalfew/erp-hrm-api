import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeeWhereInput } from './employee-where.input';
import { EmployeeOrderByWithRelationInput } from './employee-order-by-with-relation.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EmployeeScalarFieldEnum } from './employee-scalar-field.enum';

@ArgsType()
export class FindFirstEmployeeArgs {

    @Field(() => EmployeeWhereInput, {nullable:true})
    where?: EmployeeWhereInput;

    @Field(() => [EmployeeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EmployeeOrderByWithRelationInput>;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    cursor?: EmployeeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EmployeeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EmployeeScalarFieldEnum>;
}
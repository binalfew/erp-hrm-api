import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmploymentTypeWhereInput } from './employment-type-where.input';
import { EmploymentTypeOrderByWithRelationInput } from './employment-type-order-by-with-relation.input';
import { EmploymentTypeWhereUniqueInput } from './employment-type-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EmploymentTypeScalarFieldEnum } from './employment-type-scalar-field.enum';

@ArgsType()
export class FindManyEmploymentTypeArgs {

    @Field(() => EmploymentTypeWhereInput, {nullable:true})
    where?: EmploymentTypeWhereInput;

    @Field(() => [EmploymentTypeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EmploymentTypeOrderByWithRelationInput>;

    @Field(() => EmploymentTypeWhereUniqueInput, {nullable:true})
    cursor?: EmploymentTypeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EmploymentTypeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EmploymentTypeScalarFieldEnum>;
}

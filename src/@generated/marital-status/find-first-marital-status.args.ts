import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaritalStatusWhereInput } from './marital-status-where.input';
import { MaritalStatusOrderByWithRelationInput } from './marital-status-order-by-with-relation.input';
import { MaritalStatusWhereUniqueInput } from './marital-status-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MaritalStatusScalarFieldEnum } from './marital-status-scalar-field.enum';

@ArgsType()
export class FindFirstMaritalStatusArgs {

    @Field(() => MaritalStatusWhereInput, {nullable:true})
    where?: MaritalStatusWhereInput;

    @Field(() => [MaritalStatusOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MaritalStatusOrderByWithRelationInput>;

    @Field(() => MaritalStatusWhereUniqueInput, {nullable:true})
    cursor?: MaritalStatusWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MaritalStatusScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MaritalStatusScalarFieldEnum>;
}

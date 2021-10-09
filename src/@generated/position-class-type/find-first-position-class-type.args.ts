import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionClassTypeWhereInput } from './position-class-type-where.input';
import { PositionClassTypeOrderByWithRelationInput } from './position-class-type-order-by-with-relation.input';
import { PositionClassTypeWhereUniqueInput } from './position-class-type-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PositionClassTypeScalarFieldEnum } from './position-class-type-scalar-field.enum';

@ArgsType()
export class FindFirstPositionClassTypeArgs {

    @Field(() => PositionClassTypeWhereInput, {nullable:true})
    where?: PositionClassTypeWhereInput;

    @Field(() => [PositionClassTypeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PositionClassTypeOrderByWithRelationInput>;

    @Field(() => PositionClassTypeWhereUniqueInput, {nullable:true})
    cursor?: PositionClassTypeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PositionClassTypeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PositionClassTypeScalarFieldEnum>;
}

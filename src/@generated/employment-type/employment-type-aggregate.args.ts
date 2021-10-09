import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmploymentTypeWhereInput } from './employment-type-where.input';
import { EmploymentTypeOrderByWithRelationInput } from './employment-type-order-by-with-relation.input';
import { EmploymentTypeWhereUniqueInput } from './employment-type-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EmploymentTypeCountAggregateInput } from './employment-type-count-aggregate.input';
import { EmploymentTypeAvgAggregateInput } from './employment-type-avg-aggregate.input';
import { EmploymentTypeSumAggregateInput } from './employment-type-sum-aggregate.input';
import { EmploymentTypeMinAggregateInput } from './employment-type-min-aggregate.input';
import { EmploymentTypeMaxAggregateInput } from './employment-type-max-aggregate.input';

@ArgsType()
export class EmploymentTypeAggregateArgs {

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

    @Field(() => EmploymentTypeCountAggregateInput, {nullable:true})
    _count?: EmploymentTypeCountAggregateInput;

    @Field(() => EmploymentTypeAvgAggregateInput, {nullable:true})
    _avg?: EmploymentTypeAvgAggregateInput;

    @Field(() => EmploymentTypeSumAggregateInput, {nullable:true})
    _sum?: EmploymentTypeSumAggregateInput;

    @Field(() => EmploymentTypeMinAggregateInput, {nullable:true})
    _min?: EmploymentTypeMinAggregateInput;

    @Field(() => EmploymentTypeMaxAggregateInput, {nullable:true})
    _max?: EmploymentTypeMaxAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmploymentTypeWhereInput } from './employment-type-where.input';
import { EmploymentTypeOrderByWithAggregationInput } from './employment-type-order-by-with-aggregation.input';
import { EmploymentTypeScalarFieldEnum } from './employment-type-scalar-field.enum';
import { EmploymentTypeScalarWhereWithAggregatesInput } from './employment-type-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { EmploymentTypeCountAggregateInput } from './employment-type-count-aggregate.input';
import { EmploymentTypeAvgAggregateInput } from './employment-type-avg-aggregate.input';
import { EmploymentTypeSumAggregateInput } from './employment-type-sum-aggregate.input';
import { EmploymentTypeMinAggregateInput } from './employment-type-min-aggregate.input';
import { EmploymentTypeMaxAggregateInput } from './employment-type-max-aggregate.input';

@ArgsType()
export class EmploymentTypeGroupByArgs {

    @Field(() => EmploymentTypeWhereInput, {nullable:true})
    where?: EmploymentTypeWhereInput;

    @Field(() => [EmploymentTypeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<EmploymentTypeOrderByWithAggregationInput>;

    @Field(() => [EmploymentTypeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof EmploymentTypeScalarFieldEnum>;

    @Field(() => EmploymentTypeScalarWhereWithAggregatesInput, {nullable:true})
    having?: EmploymentTypeScalarWhereWithAggregatesInput;

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

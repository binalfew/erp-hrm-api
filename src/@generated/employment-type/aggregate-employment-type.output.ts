import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EmploymentTypeCountAggregate } from './employment-type-count-aggregate.output';
import { EmploymentTypeAvgAggregate } from './employment-type-avg-aggregate.output';
import { EmploymentTypeSumAggregate } from './employment-type-sum-aggregate.output';
import { EmploymentTypeMinAggregate } from './employment-type-min-aggregate.output';
import { EmploymentTypeMaxAggregate } from './employment-type-max-aggregate.output';

@ObjectType()
export class AggregateEmploymentType {

    @Field(() => EmploymentTypeCountAggregate, {nullable:true})
    _count?: EmploymentTypeCountAggregate;

    @Field(() => EmploymentTypeAvgAggregate, {nullable:true})
    _avg?: EmploymentTypeAvgAggregate;

    @Field(() => EmploymentTypeSumAggregate, {nullable:true})
    _sum?: EmploymentTypeSumAggregate;

    @Field(() => EmploymentTypeMinAggregate, {nullable:true})
    _min?: EmploymentTypeMinAggregate;

    @Field(() => EmploymentTypeMaxAggregate, {nullable:true})
    _max?: EmploymentTypeMaxAggregate;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EmploymentNatureCountAggregate } from './employment-nature-count-aggregate.output';
import { EmploymentNatureAvgAggregate } from './employment-nature-avg-aggregate.output';
import { EmploymentNatureSumAggregate } from './employment-nature-sum-aggregate.output';
import { EmploymentNatureMinAggregate } from './employment-nature-min-aggregate.output';
import { EmploymentNatureMaxAggregate } from './employment-nature-max-aggregate.output';

@ObjectType()
export class AggregateEmploymentNature {

    @Field(() => EmploymentNatureCountAggregate, {nullable:true})
    _count?: EmploymentNatureCountAggregate;

    @Field(() => EmploymentNatureAvgAggregate, {nullable:true})
    _avg?: EmploymentNatureAvgAggregate;

    @Field(() => EmploymentNatureSumAggregate, {nullable:true})
    _sum?: EmploymentNatureSumAggregate;

    @Field(() => EmploymentNatureMinAggregate, {nullable:true})
    _min?: EmploymentNatureMinAggregate;

    @Field(() => EmploymentNatureMaxAggregate, {nullable:true})
    _max?: EmploymentNatureMaxAggregate;
}

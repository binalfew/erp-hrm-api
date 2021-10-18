import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SalaryScaleCountAggregate } from './salary-scale-count-aggregate.output';
import { SalaryScaleAvgAggregate } from './salary-scale-avg-aggregate.output';
import { SalaryScaleSumAggregate } from './salary-scale-sum-aggregate.output';
import { SalaryScaleMinAggregate } from './salary-scale-min-aggregate.output';
import { SalaryScaleMaxAggregate } from './salary-scale-max-aggregate.output';

@ObjectType()
export class AggregateSalaryScale {
  @Field(() => SalaryScaleCountAggregate, { nullable: true })
  _count?: SalaryScaleCountAggregate;

  @Field(() => SalaryScaleAvgAggregate, { nullable: true })
  _avg?: SalaryScaleAvgAggregate;

  @Field(() => SalaryScaleSumAggregate, { nullable: true })
  _sum?: SalaryScaleSumAggregate;

  @Field(() => SalaryScaleMinAggregate, { nullable: true })
  _min?: SalaryScaleMinAggregate;

  @Field(() => SalaryScaleMaxAggregate, { nullable: true })
  _max?: SalaryScaleMaxAggregate;
}

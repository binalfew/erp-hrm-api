import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PositionCountAggregate } from './position-count-aggregate.output';
import { PositionAvgAggregate } from './position-avg-aggregate.output';
import { PositionSumAggregate } from './position-sum-aggregate.output';
import { PositionMinAggregate } from './position-min-aggregate.output';
import { PositionMaxAggregate } from './position-max-aggregate.output';

@ObjectType()
export class PositionGroupBy {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  code!: string;

  @Field(() => Int, { nullable: true })
  positionClassId?: number;

  @Field(() => Int, { nullable: true })
  departmentId?: number;

  @Field(() => Boolean, { nullable: false })
  vacant!: boolean;

  @Field(() => Boolean, { nullable: false })
  deleted!: boolean;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => PositionCountAggregate, { nullable: true })
  _count?: PositionCountAggregate;

  @Field(() => PositionAvgAggregate, { nullable: true })
  _avg?: PositionAvgAggregate;

  @Field(() => PositionSumAggregate, { nullable: true })
  _sum?: PositionSumAggregate;

  @Field(() => PositionMinAggregate, { nullable: true })
  _min?: PositionMinAggregate;

  @Field(() => PositionMaxAggregate, { nullable: true })
  _max?: PositionMaxAggregate;
}

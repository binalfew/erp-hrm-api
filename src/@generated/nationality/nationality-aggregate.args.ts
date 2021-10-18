import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NationalityWhereInput } from './nationality-where.input';
import { NationalityOrderByWithRelationInput } from './nationality-order-by-with-relation.input';
import { NationalityWhereUniqueInput } from './nationality-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NationalityCountAggregateInput } from './nationality-count-aggregate.input';
import { NationalityAvgAggregateInput } from './nationality-avg-aggregate.input';
import { NationalitySumAggregateInput } from './nationality-sum-aggregate.input';
import { NationalityMinAggregateInput } from './nationality-min-aggregate.input';
import { NationalityMaxAggregateInput } from './nationality-max-aggregate.input';

@ArgsType()
export class NationalityAggregateArgs {
  @Field(() => NationalityWhereInput, { nullable: true })
  where?: NationalityWhereInput;

  @Field(() => [NationalityOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<NationalityOrderByWithRelationInput>;

  @Field(() => NationalityWhereUniqueInput, { nullable: true })
  cursor?: NationalityWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => NationalityCountAggregateInput, { nullable: true })
  _count?: NationalityCountAggregateInput;

  @Field(() => NationalityAvgAggregateInput, { nullable: true })
  _avg?: NationalityAvgAggregateInput;

  @Field(() => NationalitySumAggregateInput, { nullable: true })
  _sum?: NationalitySumAggregateInput;

  @Field(() => NationalityMinAggregateInput, { nullable: true })
  _min?: NationalityMinAggregateInput;

  @Field(() => NationalityMaxAggregateInput, { nullable: true })
  _max?: NationalityMaxAggregateInput;
}

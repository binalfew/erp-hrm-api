import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionWhereInput } from './position-where.input';
import { PositionOrderByWithRelationInput } from './position-order-by-with-relation.input';
import { PositionWhereUniqueInput } from './position-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PositionScalarFieldEnum } from './position-scalar-field.enum';

@ArgsType()
export class FindManyPositionArgs {
  @Field(() => PositionWhereInput, { nullable: true })
  where?: PositionWhereInput;

  @Field(() => [PositionOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<PositionOrderByWithRelationInput>;

  @Field(() => PositionWhereUniqueInput, { nullable: true })
  cursor?: PositionWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [PositionScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof PositionScalarFieldEnum>;
}

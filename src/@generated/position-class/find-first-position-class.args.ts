import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PositionClassWhereInput } from './position-class-where.input';
import { PositionClassOrderByWithRelationInput } from './position-class-order-by-with-relation.input';
import { PositionClassWhereUniqueInput } from './position-class-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PositionClassScalarFieldEnum } from './position-class-scalar-field.enum';

@ArgsType()
export class FindFirstPositionClassArgs {
  @Field(() => PositionClassWhereInput, { nullable: true })
  where?: PositionClassWhereInput;

  @Field(() => [PositionClassOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<PositionClassOrderByWithRelationInput>;

  @Field(() => PositionClassWhereUniqueInput, { nullable: true })
  cursor?: PositionClassWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [PositionClassScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof PositionClassScalarFieldEnum>;
}

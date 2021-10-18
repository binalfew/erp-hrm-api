import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenderWhereInput } from './gender-where.input';
import { GenderOrderByWithRelationInput } from './gender-order-by-with-relation.input';
import { GenderWhereUniqueInput } from './gender-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GenderScalarFieldEnum } from './gender-scalar-field.enum';

@ArgsType()
export class FindFirstGenderArgs {
  @Field(() => GenderWhereInput, { nullable: true })
  where?: GenderWhereInput;

  @Field(() => [GenderOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<GenderOrderByWithRelationInput>;

  @Field(() => GenderWhereUniqueInput, { nullable: true })
  cursor?: GenderWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [GenderScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof GenderScalarFieldEnum>;
}

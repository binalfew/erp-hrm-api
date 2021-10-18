import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NationalityWhereInput } from './nationality-where.input';
import { NationalityOrderByWithRelationInput } from './nationality-order-by-with-relation.input';
import { NationalityWhereUniqueInput } from './nationality-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NationalityScalarFieldEnum } from './nationality-scalar-field.enum';

@ArgsType()
export class FindFirstNationalityArgs {
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

  @Field(() => [NationalityScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof NationalityScalarFieldEnum>;
}

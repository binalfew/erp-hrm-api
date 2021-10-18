import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmploymentNatureWhereInput } from './employment-nature-where.input';
import { EmploymentNatureOrderByWithRelationInput } from './employment-nature-order-by-with-relation.input';
import { EmploymentNatureWhereUniqueInput } from './employment-nature-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EmploymentNatureScalarFieldEnum } from './employment-nature-scalar-field.enum';

@ArgsType()
export class FindManyEmploymentNatureArgs {
  @Field(() => EmploymentNatureWhereInput, { nullable: true })
  where?: EmploymentNatureWhereInput;

  @Field(() => [EmploymentNatureOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<EmploymentNatureOrderByWithRelationInput>;

  @Field(() => EmploymentNatureWhereUniqueInput, { nullable: true })
  cursor?: EmploymentNatureWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [EmploymentNatureScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof EmploymentNatureScalarFieldEnum>;
}

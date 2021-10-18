import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EmployeeAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  genderId?: true;

  @Field(() => Boolean, { nullable: true })
  nationalityId?: true;

  @Field(() => Boolean, { nullable: true })
  maritalStatusId?: true;

  @Field(() => Boolean, { nullable: true })
  employmentTypeId?: true;

  @Field(() => Boolean, { nullable: true })
  employmentNatureId?: true;

  @Field(() => Boolean, { nullable: true })
  numberOfChildren?: true;
}

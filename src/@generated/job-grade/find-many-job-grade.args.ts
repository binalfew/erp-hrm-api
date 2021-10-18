import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobGradeWhereInput } from './job-grade-where.input';
import { JobGradeOrderByWithRelationInput } from './job-grade-order-by-with-relation.input';
import { JobGradeWhereUniqueInput } from './job-grade-where-unique.input';
import { Int } from '@nestjs/graphql';
import { JobGradeScalarFieldEnum } from './job-grade-scalar-field.enum';

@ArgsType()
export class FindManyJobGradeArgs {
  @Field(() => JobGradeWhereInput, { nullable: true })
  where?: JobGradeWhereInput;

  @Field(() => [JobGradeOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<JobGradeOrderByWithRelationInput>;

  @Field(() => JobGradeWhereUniqueInput, { nullable: true })
  cursor?: JobGradeWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [JobGradeScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof JobGradeScalarFieldEnum>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PositionCreateManyDepartmentInput } from './position-create-many-department.input';

@InputType()
export class PositionCreateManyDepartmentInputEnvelope {
  @Field(() => [PositionCreateManyDepartmentInput], { nullable: false })
  data!: Array<PositionCreateManyDepartmentInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

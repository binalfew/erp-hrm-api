import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateManyMaritalStatusInput } from './employee-create-many-marital-status.input';

@InputType()
export class EmployeeCreateManyMaritalStatusInputEnvelope {
  @Field(() => [EmployeeCreateManyMaritalStatusInput], { nullable: false })
  data!: Array<EmployeeCreateManyMaritalStatusInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

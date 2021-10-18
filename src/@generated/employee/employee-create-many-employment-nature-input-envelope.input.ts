import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateManyEmploymentNatureInput } from './employee-create-many-employment-nature.input';

@InputType()
export class EmployeeCreateManyEmploymentNatureInputEnvelope {
  @Field(() => [EmployeeCreateManyEmploymentNatureInput], { nullable: false })
  data!: Array<EmployeeCreateManyEmploymentNatureInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

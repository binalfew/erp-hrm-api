import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateManyNationalityInput } from './employee-create-many-nationality.input';

@InputType()
export class EmployeeCreateManyNationalityInputEnvelope {
  @Field(() => [EmployeeCreateManyNationalityInput], { nullable: false })
  data!: Array<EmployeeCreateManyNationalityInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

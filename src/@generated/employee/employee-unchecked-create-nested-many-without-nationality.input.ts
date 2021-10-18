import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutNationalityInput } from './employee-create-without-nationality.input';
import { EmployeeCreateOrConnectWithoutNationalityInput } from './employee-create-or-connect-without-nationality.input';
import { EmployeeCreateManyNationalityInputEnvelope } from './employee-create-many-nationality-input-envelope.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@InputType()
export class EmployeeUncheckedCreateNestedManyWithoutNationalityInput {
  @Field(() => [EmployeeCreateWithoutNationalityInput], { nullable: true })
  create?: Array<EmployeeCreateWithoutNationalityInput>;

  @Field(() => [EmployeeCreateOrConnectWithoutNationalityInput], {
    nullable: true,
  })
  connectOrCreate?: Array<EmployeeCreateOrConnectWithoutNationalityInput>;

  @Field(() => EmployeeCreateManyNationalityInputEnvelope, { nullable: true })
  createMany?: EmployeeCreateManyNationalityInputEnvelope;

  @Field(() => [EmployeeWhereUniqueInput], { nullable: true })
  connect?: Array<EmployeeWhereUniqueInput>;
}

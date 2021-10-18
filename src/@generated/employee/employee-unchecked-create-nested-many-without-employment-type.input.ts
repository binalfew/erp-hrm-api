import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutEmploymentTypeInput } from './employee-create-without-employment-type.input';
import { EmployeeCreateOrConnectWithoutEmploymentTypeInput } from './employee-create-or-connect-without-employment-type.input';
import { EmployeeCreateManyEmploymentTypeInputEnvelope } from './employee-create-many-employment-type-input-envelope.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@InputType()
export class EmployeeUncheckedCreateNestedManyWithoutEmploymentTypeInput {
  @Field(() => [EmployeeCreateWithoutEmploymentTypeInput], { nullable: true })
  create?: Array<EmployeeCreateWithoutEmploymentTypeInput>;

  @Field(() => [EmployeeCreateOrConnectWithoutEmploymentTypeInput], {
    nullable: true,
  })
  connectOrCreate?: Array<EmployeeCreateOrConnectWithoutEmploymentTypeInput>;

  @Field(() => EmployeeCreateManyEmploymentTypeInputEnvelope, {
    nullable: true,
  })
  createMany?: EmployeeCreateManyEmploymentTypeInputEnvelope;

  @Field(() => [EmployeeWhereUniqueInput], { nullable: true })
  connect?: Array<EmployeeWhereUniqueInput>;
}

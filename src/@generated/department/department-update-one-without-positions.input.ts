import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateWithoutPositionsInput } from './department-create-without-positions.input';
import { DepartmentCreateOrConnectWithoutPositionsInput } from './department-create-or-connect-without-positions.input';
import { DepartmentUpsertWithoutPositionsInput } from './department-upsert-without-positions.input';
import { DepartmentWhereUniqueInput } from './department-where-unique.input';
import { DepartmentUpdateWithoutPositionsInput } from './department-update-without-positions.input';

@InputType()
export class DepartmentUpdateOneWithoutPositionsInput {
  @Field(() => DepartmentCreateWithoutPositionsInput, { nullable: true })
  create?: DepartmentCreateWithoutPositionsInput;

  @Field(() => DepartmentCreateOrConnectWithoutPositionsInput, {
    nullable: true,
  })
  connectOrCreate?: DepartmentCreateOrConnectWithoutPositionsInput;

  @Field(() => DepartmentUpsertWithoutPositionsInput, { nullable: true })
  upsert?: DepartmentUpsertWithoutPositionsInput;

  @Field(() => DepartmentWhereUniqueInput, { nullable: true })
  connect?: DepartmentWhereUniqueInput;

  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;

  @Field(() => Boolean, { nullable: true })
  delete?: boolean;

  @Field(() => DepartmentUpdateWithoutPositionsInput, { nullable: true })
  update?: DepartmentUpdateWithoutPositionsInput;
}

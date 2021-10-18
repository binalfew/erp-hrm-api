import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryScaleCreateWithoutPositionClassesInput } from './salary-scale-create-without-position-classes.input';
import { SalaryScaleCreateOrConnectWithoutPositionClassesInput } from './salary-scale-create-or-connect-without-position-classes.input';
import { SalaryScaleUpsertWithoutPositionClassesInput } from './salary-scale-upsert-without-position-classes.input';
import { SalaryScaleWhereUniqueInput } from './salary-scale-where-unique.input';
import { SalaryScaleUpdateWithoutPositionClassesInput } from './salary-scale-update-without-position-classes.input';

@InputType()
export class SalaryScaleUpdateOneWithoutPositionClassesInput {
  @Field(() => SalaryScaleCreateWithoutPositionClassesInput, { nullable: true })
  create?: SalaryScaleCreateWithoutPositionClassesInput;

  @Field(() => SalaryScaleCreateOrConnectWithoutPositionClassesInput, {
    nullable: true,
  })
  connectOrCreate?: SalaryScaleCreateOrConnectWithoutPositionClassesInput;

  @Field(() => SalaryScaleUpsertWithoutPositionClassesInput, { nullable: true })
  upsert?: SalaryScaleUpsertWithoutPositionClassesInput;

  @Field(() => SalaryScaleWhereUniqueInput, { nullable: true })
  connect?: SalaryScaleWhereUniqueInput;

  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;

  @Field(() => Boolean, { nullable: true })
  delete?: boolean;

  @Field(() => SalaryScaleUpdateWithoutPositionClassesInput, { nullable: true })
  update?: SalaryScaleUpdateWithoutPositionClassesInput;
}

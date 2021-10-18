import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryScaleUpdateWithoutPositionClassesInput } from './salary-scale-update-without-position-classes.input';
import { SalaryScaleCreateWithoutPositionClassesInput } from './salary-scale-create-without-position-classes.input';

@InputType()
export class SalaryScaleUpsertWithoutPositionClassesInput {
  @Field(() => SalaryScaleUpdateWithoutPositionClassesInput, {
    nullable: false,
  })
  update!: SalaryScaleUpdateWithoutPositionClassesInput;

  @Field(() => SalaryScaleCreateWithoutPositionClassesInput, {
    nullable: false,
  })
  create!: SalaryScaleCreateWithoutPositionClassesInput;
}

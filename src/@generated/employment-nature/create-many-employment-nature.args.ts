import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmploymentNatureCreateManyInput } from './employment-nature-create-many.input';

@ArgsType()
export class CreateManyEmploymentNatureArgs {
  @Field(() => [EmploymentNatureCreateManyInput], { nullable: false })
  data!: Array<EmploymentNatureCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

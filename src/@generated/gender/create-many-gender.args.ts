import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenderCreateManyInput } from './gender-create-many.input';

@ArgsType()
export class CreateManyGenderArgs {
  @Field(() => [GenderCreateManyInput], { nullable: false })
  data!: Array<GenderCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

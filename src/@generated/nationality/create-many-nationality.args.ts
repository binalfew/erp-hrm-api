import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NationalityCreateManyInput } from './nationality-create-many.input';

@ArgsType()
export class CreateManyNationalityArgs {
  @Field(() => [NationalityCreateManyInput], { nullable: false })
  data!: Array<NationalityCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

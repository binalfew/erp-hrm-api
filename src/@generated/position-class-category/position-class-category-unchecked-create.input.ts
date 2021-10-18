import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { PositionClassUncheckedCreateNestedManyWithoutPositionClassCategoryInput } from '../position-class/position-class-unchecked-create-nested-many-without-position-class-category.input';

@InputType()
export class PositionClassCategoryUncheckedCreateInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  code!: string;

  @Field(() => GraphQLJSON, { nullable: true })
  locales?: any;

  @Field(() => Boolean, { nullable: true })
  deleted?: boolean;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(
    () =>
      PositionClassUncheckedCreateNestedManyWithoutPositionClassCategoryInput,
    { nullable: true },
  )
  positionClasses?: PositionClassUncheckedCreateNestedManyWithoutPositionClassCategoryInput;
}

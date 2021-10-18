import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { PositionClass } from '../position-class/position-class.model';
import { Employee } from '../employee/employee.model';
import { GenderCount } from './gender-count.output';

@ObjectType()
export class Gender {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  code!: string;

  @Field(() => GraphQLJSON, { nullable: true })
  locales!: any | null;

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  deleted!: boolean;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => [PositionClass], { nullable: true })
  positionClasses?: Array<PositionClass>;

  @Field(() => [Employee], { nullable: true })
  employees?: Array<Employee>;

  @Field(() => GenderCount, { nullable: true })
  _count?: GenderCount | null;
}

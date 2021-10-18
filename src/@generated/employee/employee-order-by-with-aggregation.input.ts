import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EmployeeCountOrderByAggregateInput } from './employee-count-order-by-aggregate.input';
import { EmployeeAvgOrderByAggregateInput } from './employee-avg-order-by-aggregate.input';
import { EmployeeMaxOrderByAggregateInput } from './employee-max-order-by-aggregate.input';
import { EmployeeMinOrderByAggregateInput } from './employee-min-order-by-aggregate.input';
import { EmployeeSumOrderByAggregateInput } from './employee-sum-order-by-aggregate.input';

@InputType()
export class EmployeeOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  firstName?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  lastName?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  grandfatherName?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  locales?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  genderId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  nationalityId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  maritalStatusId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  employmentTypeId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  employmentNatureId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  dateOfBirth?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  placeOfBirth?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  countryOfBirth?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  idNumber?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  passportNumber?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  Phone?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  emergencyContact?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  emergencyPhone?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  numberOfChildren?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  employmentDate?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  probationDate?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  retirementDate?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  deleted?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => EmployeeCountOrderByAggregateInput, { nullable: true })
  _count?: EmployeeCountOrderByAggregateInput;

  @Field(() => EmployeeAvgOrderByAggregateInput, { nullable: true })
  _avg?: EmployeeAvgOrderByAggregateInput;

  @Field(() => EmployeeMaxOrderByAggregateInput, { nullable: true })
  _max?: EmployeeMaxOrderByAggregateInput;

  @Field(() => EmployeeMinOrderByAggregateInput, { nullable: true })
  _min?: EmployeeMinOrderByAggregateInput;

  @Field(() => EmployeeSumOrderByAggregateInput, { nullable: true })
  _sum?: EmployeeSumOrderByAggregateInput;
}

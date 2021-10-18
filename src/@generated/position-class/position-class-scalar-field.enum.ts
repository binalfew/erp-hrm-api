import { registerEnumType } from '@nestjs/graphql';

export enum PositionClassScalarFieldEnum {
  id = 'id',
  name = 'name',
  code = 'code',
  locales = 'locales',
  genderId = 'genderId',
  positionClassTypeId = 'positionClassTypeId',
  positionClassCategoryId = 'positionClassCategoryId',
  salaryScaleId = 'salaryScaleId',
  minimumAge = 'minimumAge',
  maximumAge = 'maximumAge',
  monthlyWorkingHours = 'monthlyWorkingHours',
  salary = 'salary',
  specification = 'specification',
  deleted = 'deleted',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(PositionClassScalarFieldEnum, {
  name: 'PositionClassScalarFieldEnum',
  description: undefined,
});

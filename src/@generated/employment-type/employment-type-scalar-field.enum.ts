import { registerEnumType } from '@nestjs/graphql';

export enum EmploymentTypeScalarFieldEnum {
  id = 'id',
  name = 'name',
  code = 'code',
  locales = 'locales',
  deleted = 'deleted',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(EmploymentTypeScalarFieldEnum, {
  name: 'EmploymentTypeScalarFieldEnum',
  description: undefined,
});

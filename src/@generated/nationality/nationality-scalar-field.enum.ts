import { registerEnumType } from '@nestjs/graphql';

export enum NationalityScalarFieldEnum {
  id = 'id',
  name = 'name',
  code = 'code',
  locales = 'locales',
  deleted = 'deleted',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(NationalityScalarFieldEnum, {
  name: 'NationalityScalarFieldEnum',
  description: undefined,
});

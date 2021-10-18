import { registerEnumType } from '@nestjs/graphql';

export enum MaritalStatusScalarFieldEnum {
  id = 'id',
  name = 'name',
  code = 'code',
  locales = 'locales',
  deleted = 'deleted',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(MaritalStatusScalarFieldEnum, {
  name: 'MaritalStatusScalarFieldEnum',
  description: undefined,
});

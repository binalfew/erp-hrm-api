import { registerEnumType } from '@nestjs/graphql';

export enum GenderScalarFieldEnum {
  id = 'id',
  name = 'name',
  code = 'code',
  locales = 'locales',
  deleted = 'deleted',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(GenderScalarFieldEnum, {
  name: 'GenderScalarFieldEnum',
  description: undefined,
});

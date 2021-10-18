import { registerEnumType } from '@nestjs/graphql';

export enum PositionClassCategoryScalarFieldEnum {
  id = 'id',
  name = 'name',
  code = 'code',
  locales = 'locales',
  deleted = 'deleted',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(PositionClassCategoryScalarFieldEnum, {
  name: 'PositionClassCategoryScalarFieldEnum',
  description: undefined,
});

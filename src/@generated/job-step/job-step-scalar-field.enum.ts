import { registerEnumType } from '@nestjs/graphql';

export enum JobStepScalarFieldEnum {
  id = 'id',
  name = 'name',
  code = 'code',
  locales = 'locales',
  deleted = 'deleted',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(JobStepScalarFieldEnum, {
  name: 'JobStepScalarFieldEnum',
  description: undefined,
});

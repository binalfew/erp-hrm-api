import { registerEnumType } from '@nestjs/graphql';

export enum SalaryScaleScalarFieldEnum {
  id = 'id',
  jobGradeId = 'jobGradeId',
  jobStepId = 'jobStepId',
  salary = 'salary',
  deleted = 'deleted',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(SalaryScaleScalarFieldEnum, {
  name: 'SalaryScaleScalarFieldEnum',
  description: undefined,
});

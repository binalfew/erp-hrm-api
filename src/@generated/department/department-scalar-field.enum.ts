import { registerEnumType } from '@nestjs/graphql';

export enum DepartmentScalarFieldEnum {
    id = "id",
    name = "name",
    code = "code",
    locales = "locales",
    parentId = "parentId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DepartmentScalarFieldEnum, { name: 'DepartmentScalarFieldEnum', description: undefined })

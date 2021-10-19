import { registerEnumType } from '@nestjs/graphql';

export enum EmploymentNatureScalarFieldEnum {
    id = "id",
    name = "name",
    code = "code",
    locales = "locales",
    deleted = "deleted",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(EmploymentNatureScalarFieldEnum, { name: 'EmploymentNatureScalarFieldEnum', description: undefined })

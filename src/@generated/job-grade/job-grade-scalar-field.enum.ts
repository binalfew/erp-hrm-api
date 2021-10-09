import { registerEnumType } from '@nestjs/graphql';

export enum JobGradeScalarFieldEnum {
    id = "id",
    name = "name",
    code = "code",
    locales = "locales",
    deleted = "deleted",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(JobGradeScalarFieldEnum, { name: 'JobGradeScalarFieldEnum', description: undefined })

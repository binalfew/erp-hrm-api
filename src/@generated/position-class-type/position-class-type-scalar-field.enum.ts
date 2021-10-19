import { registerEnumType } from '@nestjs/graphql';

export enum PositionClassTypeScalarFieldEnum {
    id = "id",
    name = "name",
    code = "code",
    locales = "locales",
    deleted = "deleted",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PositionClassTypeScalarFieldEnum, { name: 'PositionClassTypeScalarFieldEnum', description: undefined })

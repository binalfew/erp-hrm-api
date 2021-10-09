import { registerEnumType } from '@nestjs/graphql';

export enum PositionScalarFieldEnum {
    id = "id",
    code = "code",
    positionClassId = "positionClassId",
    departmentId = "departmentId",
    vacant = "vacant",
    deleted = "deleted",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PositionScalarFieldEnum, { name: 'PositionScalarFieldEnum', description: undefined })

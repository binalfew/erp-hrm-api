import { registerEnumType } from '@nestjs/graphql';

export enum EmployeeScalarFieldEnum {
    id = "id",
    firstName = "firstName",
    lastName = "lastName",
    grandfatherName = "grandfatherName",
    locales = "locales",
    genderId = "genderId",
    nationalityId = "nationalityId",
    maritalStatusId = "maritalStatusId",
    employmentTypeId = "employmentTypeId",
    employmentNatureId = "employmentNatureId",
    dateOfBirth = "dateOfBirth",
    placeOfBirth = "placeOfBirth",
    countryOfBirth = "countryOfBirth",
    idNumber = "idNumber",
    passportNumber = "passportNumber",
    email = "email",
    Phone = "Phone",
    emergencyContact = "emergencyContact",
    emergencyPhone = "emergencyPhone",
    numberOfChildren = "numberOfChildren",
    employmentDate = "employmentDate",
    probationDate = "probationDate",
    retirementDate = "retirementDate",
    deleted = "deleted",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(EmployeeScalarFieldEnum, { name: 'EmployeeScalarFieldEnum', description: undefined })

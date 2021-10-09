import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

export enum UserScalarFieldEnum {
    id = "id",
    username = "username",
    email = "email",
    password = "password",
    verified = "verified",
    deleted = "deleted",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum SalaryScaleScalarFieldEnum {
    id = "id",
    jobGradeId = "jobGradeId",
    jobStepId = "jobStepId",
    salary = "salary",
    deleted = "deleted",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum NullableJsonNullValueInput {
    DbNull = "DbNull",
    JsonNull = "JsonNull"
}

export enum JsonNullValueInput {
    JsonNull = "JsonNull"
}

export enum JsonNullValueFilter {
    DbNull = "DbNull",
    JsonNull = "JsonNull",
    AnyNull = "AnyNull"
}

export enum PositionClassTypeScalarFieldEnum {
    id = "id",
    name = "name",
    code = "code",
    locales = "locales",
    deleted = "deleted",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum PositionClassCategoryScalarFieldEnum {
    id = "id",
    name = "name",
    code = "code",
    locales = "locales",
    deleted = "deleted",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum PositionClassScalarFieldEnum {
    id = "id",
    name = "name",
    code = "code",
    locales = "locales",
    genderId = "genderId",
    positionClassTypeId = "positionClassTypeId",
    positionClassCategoryId = "positionClassCategoryId",
    salaryScaleId = "salaryScaleId",
    minimumAge = "minimumAge",
    maximumAge = "maximumAge",
    monthlyWorkingHours = "monthlyWorkingHours",
    salary = "salary",
    specification = "specification",
    deleted = "deleted",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

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

export enum NationalityScalarFieldEnum {
    id = "id",
    name = "name",
    code = "code",
    locales = "locales",
    deleted = "deleted",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum MaritalStatusScalarFieldEnum {
    id = "id",
    name = "name",
    code = "code",
    locales = "locales",
    deleted = "deleted",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum JobStepScalarFieldEnum {
    id = "id",
    name = "name",
    code = "code",
    locales = "locales",
    deleted = "deleted",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum JobGradeScalarFieldEnum {
    id = "id",
    name = "name",
    code = "code",
    locales = "locales",
    deleted = "deleted",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum GenderScalarFieldEnum {
    id = "id",
    name = "name",
    code = "code",
    locales = "locales",
    deleted = "deleted",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum EmploymentTypeScalarFieldEnum {
    id = "id",
    name = "name",
    code = "code",
    locales = "locales",
    deleted = "deleted",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum EmploymentNatureScalarFieldEnum {
    id = "id",
    name = "name",
    code = "code",
    locales = "locales",
    deleted = "deleted",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

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
registerEnumType(EmployeeScalarFieldEnum, { name: 'EmployeeScalarFieldEnum', description: undefined })
registerEnumType(EmploymentNatureScalarFieldEnum, { name: 'EmploymentNatureScalarFieldEnum', description: undefined })
registerEnumType(EmploymentTypeScalarFieldEnum, { name: 'EmploymentTypeScalarFieldEnum', description: undefined })
registerEnumType(GenderScalarFieldEnum, { name: 'GenderScalarFieldEnum', description: undefined })
registerEnumType(JobGradeScalarFieldEnum, { name: 'JobGradeScalarFieldEnum', description: undefined })
registerEnumType(JobStepScalarFieldEnum, { name: 'JobStepScalarFieldEnum', description: undefined })
registerEnumType(MaritalStatusScalarFieldEnum, { name: 'MaritalStatusScalarFieldEnum', description: undefined })
registerEnumType(NationalityScalarFieldEnum, { name: 'NationalityScalarFieldEnum', description: undefined })
registerEnumType(PositionScalarFieldEnum, { name: 'PositionScalarFieldEnum', description: undefined })
registerEnumType(PositionClassScalarFieldEnum, { name: 'PositionClassScalarFieldEnum', description: undefined })
registerEnumType(PositionClassCategoryScalarFieldEnum, { name: 'PositionClassCategoryScalarFieldEnum', description: undefined })
registerEnumType(PositionClassTypeScalarFieldEnum, { name: 'PositionClassTypeScalarFieldEnum', description: undefined })
registerEnumType(JsonNullValueFilter, { name: 'JsonNullValueFilter', description: undefined })
registerEnumType(JsonNullValueInput, { name: 'JsonNullValueInput', description: undefined })
registerEnumType(NullableJsonNullValueInput, { name: 'NullableJsonNullValueInput', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(SalaryScaleScalarFieldEnum, { name: 'SalaryScaleScalarFieldEnum', description: undefined })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })

@ObjectType()
export class AggregateDepartment {
    @Field(() => DepartmentCountAggregate, {nullable:true})
    _count?: InstanceType<typeof DepartmentCountAggregate>;
    @Field(() => DepartmentAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof DepartmentAvgAggregate>;
    @Field(() => DepartmentSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof DepartmentSumAggregate>;
    @Field(() => DepartmentMinAggregate, {nullable:true})
    _min?: InstanceType<typeof DepartmentMinAggregate>;
    @Field(() => DepartmentMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof DepartmentMaxAggregate>;
}

@ArgsType()
export class CreateManyDepartmentArgs {
    @Field(() => [DepartmentCreateManyInput], {nullable:false})
    data!: Array<DepartmentCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneDepartmentArgs {
    @Field(() => DepartmentCreateInput, {nullable:false})
    data!: InstanceType<typeof DepartmentCreateInput>;
}

@ArgsType()
export class DeleteManyDepartmentArgs {
    @Field(() => DepartmentWhereInput, {nullable:true})
    where?: InstanceType<typeof DepartmentWhereInput>;
}

@ArgsType()
export class DeleteOneDepartmentArgs {
    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof DepartmentWhereUniqueInput>;
}

@ArgsType()
export class DepartmentAggregateArgs {
    @Field(() => DepartmentWhereInput, {nullable:true})
    where?: InstanceType<typeof DepartmentWhereInput>;
    @Field(() => [DepartmentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DepartmentOrderByWithRelationInput>;
    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof DepartmentWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => DepartmentCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof DepartmentCountAggregateInput>;
    @Field(() => DepartmentAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof DepartmentAvgAggregateInput>;
    @Field(() => DepartmentSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof DepartmentSumAggregateInput>;
    @Field(() => DepartmentMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof DepartmentMinAggregateInput>;
    @Field(() => DepartmentMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof DepartmentMaxAggregateInput>;
}

@InputType()
export class DepartmentAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    parentId?: true;
}

@ObjectType()
export class DepartmentAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    parentId?: number;
}

@InputType()
export class DepartmentAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    parentId?: keyof typeof SortOrder;
}

@InputType()
export class DepartmentCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    locales?: true;
    @Field(() => Boolean, {nullable:true})
    parentId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class DepartmentCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    code!: number;
    @Field(() => Int, {nullable:false})
    locales!: number;
    @Field(() => Int, {nullable:false})
    parentId!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class DepartmentCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    parentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class DepartmentCount {
    @Field(() => Int, {nullable:false})
    children!: number;
    @Field(() => Int, {nullable:false})
    positions!: number;
}

@InputType()
export class DepartmentCreateManyParentInputEnvelope {
    @Field(() => [DepartmentCreateManyParentInput], {nullable:false})
    data!: Array<DepartmentCreateManyParentInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class DepartmentCreateManyParentInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class DepartmentCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    parentId?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class DepartmentCreateNestedManyWithoutParentInput {
    @Field(() => [DepartmentCreateWithoutParentInput], {nullable:true})
    create?: Array<DepartmentCreateWithoutParentInput>;
    @Field(() => [DepartmentCreateOrConnectWithoutParentInput], {nullable:true})
    connectOrCreate?: Array<DepartmentCreateOrConnectWithoutParentInput>;
    @Field(() => DepartmentCreateManyParentInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof DepartmentCreateManyParentInputEnvelope>;
    @Field(() => [DepartmentWhereUniqueInput], {nullable:true})
    connect?: Array<DepartmentWhereUniqueInput>;
}

@InputType()
export class DepartmentCreateNestedOneWithoutChildrenInput {
    @Field(() => DepartmentCreateWithoutChildrenInput, {nullable:true})
    create?: InstanceType<typeof DepartmentCreateWithoutChildrenInput>;
    @Field(() => DepartmentCreateOrConnectWithoutChildrenInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof DepartmentCreateOrConnectWithoutChildrenInput>;
    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof DepartmentWhereUniqueInput>;
}

@InputType()
export class DepartmentCreateNestedOneWithoutPositionsInput {
    @Field(() => DepartmentCreateWithoutPositionsInput, {nullable:true})
    create?: InstanceType<typeof DepartmentCreateWithoutPositionsInput>;
    @Field(() => DepartmentCreateOrConnectWithoutPositionsInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof DepartmentCreateOrConnectWithoutPositionsInput>;
    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof DepartmentWhereUniqueInput>;
}

@InputType()
export class DepartmentCreateOrConnectWithoutChildrenInput {
    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof DepartmentWhereUniqueInput>;
    @Field(() => DepartmentCreateWithoutChildrenInput, {nullable:false})
    create!: InstanceType<typeof DepartmentCreateWithoutChildrenInput>;
}

@InputType()
export class DepartmentCreateOrConnectWithoutParentInput {
    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof DepartmentWhereUniqueInput>;
    @Field(() => DepartmentCreateWithoutParentInput, {nullable:false})
    create!: InstanceType<typeof DepartmentCreateWithoutParentInput>;
}

@InputType()
export class DepartmentCreateOrConnectWithoutPositionsInput {
    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof DepartmentWhereUniqueInput>;
    @Field(() => DepartmentCreateWithoutPositionsInput, {nullable:false})
    create!: InstanceType<typeof DepartmentCreateWithoutPositionsInput>;
}

@InputType()
export class DepartmentCreateWithoutChildrenInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => DepartmentCreateNestedOneWithoutChildrenInput, {nullable:true})
    parent?: InstanceType<typeof DepartmentCreateNestedOneWithoutChildrenInput>;
    @Field(() => PositionCreateNestedManyWithoutDepartmentInput, {nullable:true})
    positions?: InstanceType<typeof PositionCreateNestedManyWithoutDepartmentInput>;
}

@InputType()
export class DepartmentCreateWithoutParentInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => DepartmentCreateNestedManyWithoutParentInput, {nullable:true})
    children?: InstanceType<typeof DepartmentCreateNestedManyWithoutParentInput>;
    @Field(() => PositionCreateNestedManyWithoutDepartmentInput, {nullable:true})
    positions?: InstanceType<typeof PositionCreateNestedManyWithoutDepartmentInput>;
}

@InputType()
export class DepartmentCreateWithoutPositionsInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => DepartmentCreateNestedOneWithoutChildrenInput, {nullable:true})
    parent?: InstanceType<typeof DepartmentCreateNestedOneWithoutChildrenInput>;
    @Field(() => DepartmentCreateNestedManyWithoutParentInput, {nullable:true})
    children?: InstanceType<typeof DepartmentCreateNestedManyWithoutParentInput>;
}

@InputType()
export class DepartmentCreateInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => DepartmentCreateNestedOneWithoutChildrenInput, {nullable:true})
    parent?: InstanceType<typeof DepartmentCreateNestedOneWithoutChildrenInput>;
    @Field(() => DepartmentCreateNestedManyWithoutParentInput, {nullable:true})
    children?: InstanceType<typeof DepartmentCreateNestedManyWithoutParentInput>;
    @Field(() => PositionCreateNestedManyWithoutDepartmentInput, {nullable:true})
    positions?: InstanceType<typeof PositionCreateNestedManyWithoutDepartmentInput>;
}

@ArgsType()
export class DepartmentGroupByArgs {
    @Field(() => DepartmentWhereInput, {nullable:true})
    where?: InstanceType<typeof DepartmentWhereInput>;
    @Field(() => [DepartmentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DepartmentOrderByWithAggregationInput>;
    @Field(() => [DepartmentScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DepartmentScalarFieldEnum>;
    @Field(() => DepartmentScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof DepartmentScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => DepartmentCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof DepartmentCountAggregateInput>;
    @Field(() => DepartmentAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof DepartmentAvgAggregateInput>;
    @Field(() => DepartmentSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof DepartmentSumAggregateInput>;
    @Field(() => DepartmentMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof DepartmentMinAggregateInput>;
    @Field(() => DepartmentMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof DepartmentMaxAggregateInput>;
}

@ObjectType()
export class DepartmentGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    parentId?: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => DepartmentCountAggregate, {nullable:true})
    _count?: InstanceType<typeof DepartmentCountAggregate>;
    @Field(() => DepartmentAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof DepartmentAvgAggregate>;
    @Field(() => DepartmentSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof DepartmentSumAggregate>;
    @Field(() => DepartmentMinAggregate, {nullable:true})
    _min?: InstanceType<typeof DepartmentMinAggregate>;
    @Field(() => DepartmentMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof DepartmentMaxAggregate>;
}

@InputType()
export class DepartmentListRelationFilter {
    @Field(() => DepartmentWhereInput, {nullable:true})
    every?: InstanceType<typeof DepartmentWhereInput>;
    @Field(() => DepartmentWhereInput, {nullable:true})
    some?: InstanceType<typeof DepartmentWhereInput>;
    @Field(() => DepartmentWhereInput, {nullable:true})
    none?: InstanceType<typeof DepartmentWhereInput>;
}

@InputType()
export class DepartmentMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    parentId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class DepartmentMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    code?: string;
    @Field(() => Int, {nullable:true})
    parentId?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class DepartmentMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    parentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class DepartmentMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    parentId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class DepartmentMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    code?: string;
    @Field(() => Int, {nullable:true})
    parentId?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class DepartmentMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    parentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class DepartmentOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class DepartmentOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    parentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => DepartmentCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof DepartmentCountOrderByAggregateInput>;
    @Field(() => DepartmentAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof DepartmentAvgOrderByAggregateInput>;
    @Field(() => DepartmentMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof DepartmentMaxOrderByAggregateInput>;
    @Field(() => DepartmentMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof DepartmentMinOrderByAggregateInput>;
    @Field(() => DepartmentSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof DepartmentSumOrderByAggregateInput>;
}

@InputType()
export class DepartmentOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    parentId?: keyof typeof SortOrder;
    @Field(() => DepartmentOrderByWithRelationInput, {nullable:true})
    parent?: InstanceType<typeof DepartmentOrderByWithRelationInput>;
    @Field(() => DepartmentOrderByRelationAggregateInput, {nullable:true})
    children?: InstanceType<typeof DepartmentOrderByRelationAggregateInput>;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => PositionOrderByRelationAggregateInput, {nullable:true})
    positions?: InstanceType<typeof PositionOrderByRelationAggregateInput>;
}

@InputType()
export class DepartmentRelationFilter {
    @Field(() => DepartmentWhereInput, {nullable:true})
    is?: InstanceType<typeof DepartmentWhereInput>;
    @Field(() => DepartmentWhereInput, {nullable:true})
    isNot?: InstanceType<typeof DepartmentWhereInput>;
}

@InputType()
export class DepartmentScalarWhereWithAggregatesInput {
    @Field(() => [DepartmentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DepartmentScalarWhereWithAggregatesInput>;
    @Field(() => [DepartmentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DepartmentScalarWhereWithAggregatesInput>;
    @Field(() => [DepartmentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DepartmentScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    locales?: InstanceType<typeof JsonNullableWithAggregatesFilter>;
    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    parentId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class DepartmentScalarWhereInput {
    @Field(() => [DepartmentScalarWhereInput], {nullable:true})
    AND?: Array<DepartmentScalarWhereInput>;
    @Field(() => [DepartmentScalarWhereInput], {nullable:true})
    OR?: Array<DepartmentScalarWhereInput>;
    @Field(() => [DepartmentScalarWhereInput], {nullable:true})
    NOT?: Array<DepartmentScalarWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    code?: InstanceType<typeof StringFilter>;
    @Field(() => JsonNullableFilter, {nullable:true})
    locales?: InstanceType<typeof JsonNullableFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    parentId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class DepartmentSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    parentId?: true;
}

@ObjectType()
export class DepartmentSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    parentId?: number;
}

@InputType()
export class DepartmentSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    parentId?: keyof typeof SortOrder;
}

@InputType()
export class DepartmentUncheckedCreateNestedManyWithoutParentInput {
    @Field(() => [DepartmentCreateWithoutParentInput], {nullable:true})
    create?: Array<DepartmentCreateWithoutParentInput>;
    @Field(() => [DepartmentCreateOrConnectWithoutParentInput], {nullable:true})
    connectOrCreate?: Array<DepartmentCreateOrConnectWithoutParentInput>;
    @Field(() => DepartmentCreateManyParentInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof DepartmentCreateManyParentInputEnvelope>;
    @Field(() => [DepartmentWhereUniqueInput], {nullable:true})
    connect?: Array<DepartmentWhereUniqueInput>;
}

@InputType()
export class DepartmentUncheckedCreateWithoutChildrenInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    parentId?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PositionUncheckedCreateNestedManyWithoutDepartmentInput, {nullable:true})
    positions?: InstanceType<typeof PositionUncheckedCreateNestedManyWithoutDepartmentInput>;
}

@InputType()
export class DepartmentUncheckedCreateWithoutParentInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => DepartmentUncheckedCreateNestedManyWithoutParentInput, {nullable:true})
    children?: InstanceType<typeof DepartmentUncheckedCreateNestedManyWithoutParentInput>;
    @Field(() => PositionUncheckedCreateNestedManyWithoutDepartmentInput, {nullable:true})
    positions?: InstanceType<typeof PositionUncheckedCreateNestedManyWithoutDepartmentInput>;
}

@InputType()
export class DepartmentUncheckedCreateWithoutPositionsInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    parentId?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => DepartmentUncheckedCreateNestedManyWithoutParentInput, {nullable:true})
    children?: InstanceType<typeof DepartmentUncheckedCreateNestedManyWithoutParentInput>;
}

@InputType()
export class DepartmentUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    parentId?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => DepartmentUncheckedCreateNestedManyWithoutParentInput, {nullable:true})
    children?: InstanceType<typeof DepartmentUncheckedCreateNestedManyWithoutParentInput>;
    @Field(() => PositionUncheckedCreateNestedManyWithoutDepartmentInput, {nullable:true})
    positions?: InstanceType<typeof PositionUncheckedCreateNestedManyWithoutDepartmentInput>;
}

@InputType()
export class DepartmentUncheckedUpdateManyWithoutChildrenInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class DepartmentUncheckedUpdateManyWithoutParentInput {
    @Field(() => [DepartmentCreateWithoutParentInput], {nullable:true})
    create?: Array<DepartmentCreateWithoutParentInput>;
    @Field(() => [DepartmentCreateOrConnectWithoutParentInput], {nullable:true})
    connectOrCreate?: Array<DepartmentCreateOrConnectWithoutParentInput>;
    @Field(() => [DepartmentUpsertWithWhereUniqueWithoutParentInput], {nullable:true})
    upsert?: Array<DepartmentUpsertWithWhereUniqueWithoutParentInput>;
    @Field(() => DepartmentCreateManyParentInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof DepartmentCreateManyParentInputEnvelope>;
    @Field(() => [DepartmentWhereUniqueInput], {nullable:true})
    connect?: Array<DepartmentWhereUniqueInput>;
    @Field(() => [DepartmentWhereUniqueInput], {nullable:true})
    set?: Array<DepartmentWhereUniqueInput>;
    @Field(() => [DepartmentWhereUniqueInput], {nullable:true})
    disconnect?: Array<DepartmentWhereUniqueInput>;
    @Field(() => [DepartmentWhereUniqueInput], {nullable:true})
    delete?: Array<DepartmentWhereUniqueInput>;
    @Field(() => [DepartmentUpdateWithWhereUniqueWithoutParentInput], {nullable:true})
    update?: Array<DepartmentUpdateWithWhereUniqueWithoutParentInput>;
    @Field(() => [DepartmentUpdateManyWithWhereWithoutParentInput], {nullable:true})
    updateMany?: Array<DepartmentUpdateManyWithWhereWithoutParentInput>;
    @Field(() => [DepartmentScalarWhereInput], {nullable:true})
    deleteMany?: Array<DepartmentScalarWhereInput>;
}

@InputType()
export class DepartmentUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    parentId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class DepartmentUncheckedUpdateWithoutChildrenInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    parentId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PositionUncheckedUpdateManyWithoutDepartmentInput, {nullable:true})
    positions?: InstanceType<typeof PositionUncheckedUpdateManyWithoutDepartmentInput>;
}

@InputType()
export class DepartmentUncheckedUpdateWithoutParentInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DepartmentUncheckedUpdateManyWithoutParentInput, {nullable:true})
    children?: InstanceType<typeof DepartmentUncheckedUpdateManyWithoutParentInput>;
    @Field(() => PositionUncheckedUpdateManyWithoutDepartmentInput, {nullable:true})
    positions?: InstanceType<typeof PositionUncheckedUpdateManyWithoutDepartmentInput>;
}

@InputType()
export class DepartmentUncheckedUpdateWithoutPositionsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    parentId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DepartmentUncheckedUpdateManyWithoutParentInput, {nullable:true})
    children?: InstanceType<typeof DepartmentUncheckedUpdateManyWithoutParentInput>;
}

@InputType()
export class DepartmentUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    parentId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DepartmentUncheckedUpdateManyWithoutParentInput, {nullable:true})
    children?: InstanceType<typeof DepartmentUncheckedUpdateManyWithoutParentInput>;
    @Field(() => PositionUncheckedUpdateManyWithoutDepartmentInput, {nullable:true})
    positions?: InstanceType<typeof PositionUncheckedUpdateManyWithoutDepartmentInput>;
}

@InputType()
export class DepartmentUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class DepartmentUpdateManyWithWhereWithoutParentInput {
    @Field(() => DepartmentScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof DepartmentScalarWhereInput>;
    @Field(() => DepartmentUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof DepartmentUpdateManyMutationInput>;
}

@InputType()
export class DepartmentUpdateManyWithoutParentInput {
    @Field(() => [DepartmentCreateWithoutParentInput], {nullable:true})
    create?: Array<DepartmentCreateWithoutParentInput>;
    @Field(() => [DepartmentCreateOrConnectWithoutParentInput], {nullable:true})
    connectOrCreate?: Array<DepartmentCreateOrConnectWithoutParentInput>;
    @Field(() => [DepartmentUpsertWithWhereUniqueWithoutParentInput], {nullable:true})
    upsert?: Array<DepartmentUpsertWithWhereUniqueWithoutParentInput>;
    @Field(() => DepartmentCreateManyParentInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof DepartmentCreateManyParentInputEnvelope>;
    @Field(() => [DepartmentWhereUniqueInput], {nullable:true})
    connect?: Array<DepartmentWhereUniqueInput>;
    @Field(() => [DepartmentWhereUniqueInput], {nullable:true})
    set?: Array<DepartmentWhereUniqueInput>;
    @Field(() => [DepartmentWhereUniqueInput], {nullable:true})
    disconnect?: Array<DepartmentWhereUniqueInput>;
    @Field(() => [DepartmentWhereUniqueInput], {nullable:true})
    delete?: Array<DepartmentWhereUniqueInput>;
    @Field(() => [DepartmentUpdateWithWhereUniqueWithoutParentInput], {nullable:true})
    update?: Array<DepartmentUpdateWithWhereUniqueWithoutParentInput>;
    @Field(() => [DepartmentUpdateManyWithWhereWithoutParentInput], {nullable:true})
    updateMany?: Array<DepartmentUpdateManyWithWhereWithoutParentInput>;
    @Field(() => [DepartmentScalarWhereInput], {nullable:true})
    deleteMany?: Array<DepartmentScalarWhereInput>;
}

@InputType()
export class DepartmentUpdateOneWithoutChildrenInput {
    @Field(() => DepartmentCreateWithoutChildrenInput, {nullable:true})
    create?: InstanceType<typeof DepartmentCreateWithoutChildrenInput>;
    @Field(() => DepartmentCreateOrConnectWithoutChildrenInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof DepartmentCreateOrConnectWithoutChildrenInput>;
    @Field(() => DepartmentUpsertWithoutChildrenInput, {nullable:true})
    upsert?: InstanceType<typeof DepartmentUpsertWithoutChildrenInput>;
    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof DepartmentWhereUniqueInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => DepartmentUpdateWithoutChildrenInput, {nullable:true})
    update?: InstanceType<typeof DepartmentUpdateWithoutChildrenInput>;
}

@InputType()
export class DepartmentUpdateOneWithoutPositionsInput {
    @Field(() => DepartmentCreateWithoutPositionsInput, {nullable:true})
    create?: InstanceType<typeof DepartmentCreateWithoutPositionsInput>;
    @Field(() => DepartmentCreateOrConnectWithoutPositionsInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof DepartmentCreateOrConnectWithoutPositionsInput>;
    @Field(() => DepartmentUpsertWithoutPositionsInput, {nullable:true})
    upsert?: InstanceType<typeof DepartmentUpsertWithoutPositionsInput>;
    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof DepartmentWhereUniqueInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => DepartmentUpdateWithoutPositionsInput, {nullable:true})
    update?: InstanceType<typeof DepartmentUpdateWithoutPositionsInput>;
}

@InputType()
export class DepartmentUpdateWithWhereUniqueWithoutParentInput {
    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof DepartmentWhereUniqueInput>;
    @Field(() => DepartmentUpdateWithoutParentInput, {nullable:false})
    data!: InstanceType<typeof DepartmentUpdateWithoutParentInput>;
}

@InputType()
export class DepartmentUpdateWithoutChildrenInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DepartmentUpdateOneWithoutChildrenInput, {nullable:true})
    parent?: InstanceType<typeof DepartmentUpdateOneWithoutChildrenInput>;
    @Field(() => PositionUpdateManyWithoutDepartmentInput, {nullable:true})
    positions?: InstanceType<typeof PositionUpdateManyWithoutDepartmentInput>;
}

@InputType()
export class DepartmentUpdateWithoutParentInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DepartmentUpdateManyWithoutParentInput, {nullable:true})
    children?: InstanceType<typeof DepartmentUpdateManyWithoutParentInput>;
    @Field(() => PositionUpdateManyWithoutDepartmentInput, {nullable:true})
    positions?: InstanceType<typeof PositionUpdateManyWithoutDepartmentInput>;
}

@InputType()
export class DepartmentUpdateWithoutPositionsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DepartmentUpdateOneWithoutChildrenInput, {nullable:true})
    parent?: InstanceType<typeof DepartmentUpdateOneWithoutChildrenInput>;
    @Field(() => DepartmentUpdateManyWithoutParentInput, {nullable:true})
    children?: InstanceType<typeof DepartmentUpdateManyWithoutParentInput>;
}

@InputType()
export class DepartmentUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DepartmentUpdateOneWithoutChildrenInput, {nullable:true})
    parent?: InstanceType<typeof DepartmentUpdateOneWithoutChildrenInput>;
    @Field(() => DepartmentUpdateManyWithoutParentInput, {nullable:true})
    children?: InstanceType<typeof DepartmentUpdateManyWithoutParentInput>;
    @Field(() => PositionUpdateManyWithoutDepartmentInput, {nullable:true})
    positions?: InstanceType<typeof PositionUpdateManyWithoutDepartmentInput>;
}

@InputType()
export class DepartmentUpsertWithWhereUniqueWithoutParentInput {
    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof DepartmentWhereUniqueInput>;
    @Field(() => DepartmentUpdateWithoutParentInput, {nullable:false})
    update!: InstanceType<typeof DepartmentUpdateWithoutParentInput>;
    @Field(() => DepartmentCreateWithoutParentInput, {nullable:false})
    create!: InstanceType<typeof DepartmentCreateWithoutParentInput>;
}

@InputType()
export class DepartmentUpsertWithoutChildrenInput {
    @Field(() => DepartmentUpdateWithoutChildrenInput, {nullable:false})
    update!: InstanceType<typeof DepartmentUpdateWithoutChildrenInput>;
    @Field(() => DepartmentCreateWithoutChildrenInput, {nullable:false})
    create!: InstanceType<typeof DepartmentCreateWithoutChildrenInput>;
}

@InputType()
export class DepartmentUpsertWithoutPositionsInput {
    @Field(() => DepartmentUpdateWithoutPositionsInput, {nullable:false})
    update!: InstanceType<typeof DepartmentUpdateWithoutPositionsInput>;
    @Field(() => DepartmentCreateWithoutPositionsInput, {nullable:false})
    create!: InstanceType<typeof DepartmentCreateWithoutPositionsInput>;
}

@InputType()
export class DepartmentWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class DepartmentWhereInput {
    @Field(() => [DepartmentWhereInput], {nullable:true})
    AND?: Array<DepartmentWhereInput>;
    @Field(() => [DepartmentWhereInput], {nullable:true})
    OR?: Array<DepartmentWhereInput>;
    @Field(() => [DepartmentWhereInput], {nullable:true})
    NOT?: Array<DepartmentWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    code?: InstanceType<typeof StringFilter>;
    @Field(() => JsonNullableFilter, {nullable:true})
    locales?: InstanceType<typeof JsonNullableFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    parentId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => DepartmentRelationFilter, {nullable:true})
    parent?: InstanceType<typeof DepartmentRelationFilter>;
    @Field(() => DepartmentListRelationFilter, {nullable:true})
    children?: InstanceType<typeof DepartmentListRelationFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => PositionListRelationFilter, {nullable:true})
    positions?: InstanceType<typeof PositionListRelationFilter>;
}

@ObjectType()
export class Department {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales!: any | null;
    @Field(() => Int, {nullable:true})
    parentId!: number | null;
    @Field(() => Department, {nullable:true})
    parent?: InstanceType<typeof Department> | null;
    @Field(() => [Department], {nullable:true})
    children?: Array<Department>;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [Position], {nullable:true})
    positions?: Array<Position>;
    @Field(() => DepartmentCount, {nullable:true})
    _count?: InstanceType<typeof DepartmentCount> | null;
}

@ArgsType()
export class FindFirstDepartmentArgs {
    @Field(() => DepartmentWhereInput, {nullable:true})
    where?: InstanceType<typeof DepartmentWhereInput>;
    @Field(() => [DepartmentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DepartmentOrderByWithRelationInput>;
    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof DepartmentWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [DepartmentScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DepartmentScalarFieldEnum>;
}

@ArgsType()
export class FindManyDepartmentArgs {
    @Field(() => DepartmentWhereInput, {nullable:true})
    where?: InstanceType<typeof DepartmentWhereInput>;
    @Field(() => [DepartmentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DepartmentOrderByWithRelationInput>;
    @Field(() => DepartmentWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof DepartmentWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [DepartmentScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DepartmentScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueDepartmentArgs {
    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof DepartmentWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyDepartmentArgs {
    @Field(() => DepartmentUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof DepartmentUpdateManyMutationInput>;
    @Field(() => DepartmentWhereInput, {nullable:true})
    where?: InstanceType<typeof DepartmentWhereInput>;
}

@ArgsType()
export class UpdateOneDepartmentArgs {
    @Field(() => DepartmentUpdateInput, {nullable:false})
    data!: InstanceType<typeof DepartmentUpdateInput>;
    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof DepartmentWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneDepartmentArgs {
    @Field(() => DepartmentWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof DepartmentWhereUniqueInput>;
    @Field(() => DepartmentCreateInput, {nullable:false})
    create!: InstanceType<typeof DepartmentCreateInput>;
    @Field(() => DepartmentUpdateInput, {nullable:false})
    update!: InstanceType<typeof DepartmentUpdateInput>;
}

@ObjectType()
export class AggregateEmployee {
    @Field(() => EmployeeCountAggregate, {nullable:true})
    _count?: InstanceType<typeof EmployeeCountAggregate>;
    @Field(() => EmployeeAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof EmployeeAvgAggregate>;
    @Field(() => EmployeeSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof EmployeeSumAggregate>;
    @Field(() => EmployeeMinAggregate, {nullable:true})
    _min?: InstanceType<typeof EmployeeMinAggregate>;
    @Field(() => EmployeeMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof EmployeeMaxAggregate>;
}

@ArgsType()
export class CreateManyEmployeeArgs {
    @Field(() => [EmployeeCreateManyInput], {nullable:false})
    data!: Array<EmployeeCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneEmployeeArgs {
    @Field(() => EmployeeCreateInput, {nullable:false})
    data!: InstanceType<typeof EmployeeCreateInput>;
}

@ArgsType()
export class DeleteManyEmployeeArgs {
    @Field(() => EmployeeWhereInput, {nullable:true})
    where?: InstanceType<typeof EmployeeWhereInput>;
}

@ArgsType()
export class DeleteOneEmployeeArgs {
    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof EmployeeWhereUniqueInput>;
}

@ArgsType()
export class EmployeeAggregateArgs {
    @Field(() => EmployeeWhereInput, {nullable:true})
    where?: InstanceType<typeof EmployeeWhereInput>;
    @Field(() => [EmployeeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EmployeeOrderByWithRelationInput>;
    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof EmployeeWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => EmployeeCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof EmployeeCountAggregateInput>;
    @Field(() => EmployeeAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof EmployeeAvgAggregateInput>;
    @Field(() => EmployeeSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof EmployeeSumAggregateInput>;
    @Field(() => EmployeeMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof EmployeeMinAggregateInput>;
    @Field(() => EmployeeMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof EmployeeMaxAggregateInput>;
}

@InputType()
export class EmployeeAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    genderId?: true;
    @Field(() => Boolean, {nullable:true})
    nationalityId?: true;
    @Field(() => Boolean, {nullable:true})
    maritalStatusId?: true;
    @Field(() => Boolean, {nullable:true})
    employmentTypeId?: true;
    @Field(() => Boolean, {nullable:true})
    employmentNatureId?: true;
    @Field(() => Boolean, {nullable:true})
    numberOfChildren?: true;
}

@ObjectType()
export class EmployeeAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    genderId?: number;
    @Field(() => Float, {nullable:true})
    nationalityId?: number;
    @Field(() => Float, {nullable:true})
    maritalStatusId?: number;
    @Field(() => Float, {nullable:true})
    employmentTypeId?: number;
    @Field(() => Float, {nullable:true})
    employmentNatureId?: number;
    @Field(() => Float, {nullable:true})
    numberOfChildren?: number;
}

@InputType()
export class EmployeeAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    genderId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    nationalityId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    maritalStatusId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employmentTypeId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employmentNatureId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    numberOfChildren?: keyof typeof SortOrder;
}

@InputType()
export class EmployeeCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    firstName?: true;
    @Field(() => Boolean, {nullable:true})
    lastName?: true;
    @Field(() => Boolean, {nullable:true})
    grandfatherName?: true;
    @Field(() => Boolean, {nullable:true})
    locales?: true;
    @Field(() => Boolean, {nullable:true})
    genderId?: true;
    @Field(() => Boolean, {nullable:true})
    nationalityId?: true;
    @Field(() => Boolean, {nullable:true})
    maritalStatusId?: true;
    @Field(() => Boolean, {nullable:true})
    employmentTypeId?: true;
    @Field(() => Boolean, {nullable:true})
    employmentNatureId?: true;
    @Field(() => Boolean, {nullable:true})
    dateOfBirth?: true;
    @Field(() => Boolean, {nullable:true})
    placeOfBirth?: true;
    @Field(() => Boolean, {nullable:true})
    countryOfBirth?: true;
    @Field(() => Boolean, {nullable:true})
    idNumber?: true;
    @Field(() => Boolean, {nullable:true})
    passportNumber?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    Phone?: true;
    @Field(() => Boolean, {nullable:true})
    emergencyContact?: true;
    @Field(() => Boolean, {nullable:true})
    emergencyPhone?: true;
    @Field(() => Boolean, {nullable:true})
    numberOfChildren?: true;
    @Field(() => Boolean, {nullable:true})
    employmentDate?: true;
    @Field(() => Boolean, {nullable:true})
    probationDate?: true;
    @Field(() => Boolean, {nullable:true})
    retirementDate?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class EmployeeCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    firstName!: number;
    @Field(() => Int, {nullable:false})
    lastName!: number;
    @Field(() => Int, {nullable:false})
    grandfatherName!: number;
    @Field(() => Int, {nullable:false})
    locales!: number;
    @Field(() => Int, {nullable:false})
    genderId!: number;
    @Field(() => Int, {nullable:false})
    nationalityId!: number;
    @Field(() => Int, {nullable:false})
    maritalStatusId!: number;
    @Field(() => Int, {nullable:false})
    employmentTypeId!: number;
    @Field(() => Int, {nullable:false})
    employmentNatureId!: number;
    @Field(() => Int, {nullable:false})
    dateOfBirth!: number;
    @Field(() => Int, {nullable:false})
    placeOfBirth!: number;
    @Field(() => Int, {nullable:false})
    countryOfBirth!: number;
    @Field(() => Int, {nullable:false})
    idNumber!: number;
    @Field(() => Int, {nullable:false})
    passportNumber!: number;
    @Field(() => Int, {nullable:false})
    email!: number;
    @Field(() => Int, {nullable:false})
    Phone!: number;
    @Field(() => Int, {nullable:false})
    emergencyContact!: number;
    @Field(() => Int, {nullable:false})
    emergencyPhone!: number;
    @Field(() => Int, {nullable:false})
    numberOfChildren!: number;
    @Field(() => Int, {nullable:false})
    employmentDate!: number;
    @Field(() => Int, {nullable:false})
    probationDate!: number;
    @Field(() => Int, {nullable:false})
    retirementDate!: number;
    @Field(() => Int, {nullable:false})
    deleted!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class EmployeeCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    grandfatherName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    genderId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    nationalityId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    maritalStatusId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employmentTypeId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employmentNatureId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    dateOfBirth?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    placeOfBirth?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    countryOfBirth?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    idNumber?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    passportNumber?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    Phone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    emergencyContact?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    emergencyPhone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    numberOfChildren?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employmentDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    probationDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    retirementDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class EmployeeCreateManyEmploymentNatureInputEnvelope {
    @Field(() => [EmployeeCreateManyEmploymentNatureInput], {nullable:false})
    data!: Array<EmployeeCreateManyEmploymentNatureInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class EmployeeCreateManyEmploymentNatureInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => GraphQLJSON, {nullable:false})
    firstName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    lastName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    grandfatherName!: any;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    genderId?: number;
    @Field(() => Int, {nullable:true})
    nationalityId?: number;
    @Field(() => Int, {nullable:true})
    maritalStatusId?: number;
    @Field(() => Int, {nullable:true})
    employmentTypeId?: number;
    @Field(() => Date, {nullable:true})
    dateOfBirth?: Date | string;
    @Field(() => String, {nullable:false})
    placeOfBirth!: string;
    @Field(() => String, {nullable:false})
    countryOfBirth!: string;
    @Field(() => String, {nullable:false})
    idNumber!: string;
    @Field(() => String, {nullable:false})
    passportNumber!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    Phone!: string;
    @Field(() => String, {nullable:false})
    emergencyContact!: string;
    @Field(() => String, {nullable:false})
    emergencyPhone!: string;
    @Field(() => Int, {nullable:false})
    numberOfChildren!: number;
    @Field(() => Date, {nullable:true})
    employmentDate?: Date | string;
    @Field(() => Date, {nullable:true})
    probationDate?: Date | string;
    @Field(() => Date, {nullable:true})
    retirementDate?: Date | string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class EmployeeCreateManyEmploymentTypeInputEnvelope {
    @Field(() => [EmployeeCreateManyEmploymentTypeInput], {nullable:false})
    data!: Array<EmployeeCreateManyEmploymentTypeInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class EmployeeCreateManyEmploymentTypeInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => GraphQLJSON, {nullable:false})
    firstName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    lastName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    grandfatherName!: any;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    genderId?: number;
    @Field(() => Int, {nullable:true})
    nationalityId?: number;
    @Field(() => Int, {nullable:true})
    maritalStatusId?: number;
    @Field(() => Int, {nullable:true})
    employmentNatureId?: number;
    @Field(() => Date, {nullable:true})
    dateOfBirth?: Date | string;
    @Field(() => String, {nullable:false})
    placeOfBirth!: string;
    @Field(() => String, {nullable:false})
    countryOfBirth!: string;
    @Field(() => String, {nullable:false})
    idNumber!: string;
    @Field(() => String, {nullable:false})
    passportNumber!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    Phone!: string;
    @Field(() => String, {nullable:false})
    emergencyContact!: string;
    @Field(() => String, {nullable:false})
    emergencyPhone!: string;
    @Field(() => Int, {nullable:false})
    numberOfChildren!: number;
    @Field(() => Date, {nullable:true})
    employmentDate?: Date | string;
    @Field(() => Date, {nullable:true})
    probationDate?: Date | string;
    @Field(() => Date, {nullable:true})
    retirementDate?: Date | string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class EmployeeCreateManyGenderInputEnvelope {
    @Field(() => [EmployeeCreateManyGenderInput], {nullable:false})
    data!: Array<EmployeeCreateManyGenderInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class EmployeeCreateManyGenderInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => GraphQLJSON, {nullable:false})
    firstName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    lastName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    grandfatherName!: any;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    nationalityId?: number;
    @Field(() => Int, {nullable:true})
    maritalStatusId?: number;
    @Field(() => Int, {nullable:true})
    employmentTypeId?: number;
    @Field(() => Int, {nullable:true})
    employmentNatureId?: number;
    @Field(() => Date, {nullable:true})
    dateOfBirth?: Date | string;
    @Field(() => String, {nullable:false})
    placeOfBirth!: string;
    @Field(() => String, {nullable:false})
    countryOfBirth!: string;
    @Field(() => String, {nullable:false})
    idNumber!: string;
    @Field(() => String, {nullable:false})
    passportNumber!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    Phone!: string;
    @Field(() => String, {nullable:false})
    emergencyContact!: string;
    @Field(() => String, {nullable:false})
    emergencyPhone!: string;
    @Field(() => Int, {nullable:false})
    numberOfChildren!: number;
    @Field(() => Date, {nullable:true})
    employmentDate?: Date | string;
    @Field(() => Date, {nullable:true})
    probationDate?: Date | string;
    @Field(() => Date, {nullable:true})
    retirementDate?: Date | string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class EmployeeCreateManyMaritalStatusInputEnvelope {
    @Field(() => [EmployeeCreateManyMaritalStatusInput], {nullable:false})
    data!: Array<EmployeeCreateManyMaritalStatusInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class EmployeeCreateManyMaritalStatusInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => GraphQLJSON, {nullable:false})
    firstName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    lastName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    grandfatherName!: any;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    genderId?: number;
    @Field(() => Int, {nullable:true})
    nationalityId?: number;
    @Field(() => Int, {nullable:true})
    employmentTypeId?: number;
    @Field(() => Int, {nullable:true})
    employmentNatureId?: number;
    @Field(() => Date, {nullable:true})
    dateOfBirth?: Date | string;
    @Field(() => String, {nullable:false})
    placeOfBirth!: string;
    @Field(() => String, {nullable:false})
    countryOfBirth!: string;
    @Field(() => String, {nullable:false})
    idNumber!: string;
    @Field(() => String, {nullable:false})
    passportNumber!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    Phone!: string;
    @Field(() => String, {nullable:false})
    emergencyContact!: string;
    @Field(() => String, {nullable:false})
    emergencyPhone!: string;
    @Field(() => Int, {nullable:false})
    numberOfChildren!: number;
    @Field(() => Date, {nullable:true})
    employmentDate?: Date | string;
    @Field(() => Date, {nullable:true})
    probationDate?: Date | string;
    @Field(() => Date, {nullable:true})
    retirementDate?: Date | string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class EmployeeCreateManyNationalityInputEnvelope {
    @Field(() => [EmployeeCreateManyNationalityInput], {nullable:false})
    data!: Array<EmployeeCreateManyNationalityInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class EmployeeCreateManyNationalityInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => GraphQLJSON, {nullable:false})
    firstName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    lastName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    grandfatherName!: any;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    genderId?: number;
    @Field(() => Int, {nullable:true})
    maritalStatusId?: number;
    @Field(() => Int, {nullable:true})
    employmentTypeId?: number;
    @Field(() => Int, {nullable:true})
    employmentNatureId?: number;
    @Field(() => Date, {nullable:true})
    dateOfBirth?: Date | string;
    @Field(() => String, {nullable:false})
    placeOfBirth!: string;
    @Field(() => String, {nullable:false})
    countryOfBirth!: string;
    @Field(() => String, {nullable:false})
    idNumber!: string;
    @Field(() => String, {nullable:false})
    passportNumber!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    Phone!: string;
    @Field(() => String, {nullable:false})
    emergencyContact!: string;
    @Field(() => String, {nullable:false})
    emergencyPhone!: string;
    @Field(() => Int, {nullable:false})
    numberOfChildren!: number;
    @Field(() => Date, {nullable:true})
    employmentDate?: Date | string;
    @Field(() => Date, {nullable:true})
    probationDate?: Date | string;
    @Field(() => Date, {nullable:true})
    retirementDate?: Date | string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class EmployeeCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => GraphQLJSON, {nullable:false})
    firstName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    lastName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    grandfatherName!: any;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    genderId?: number;
    @Field(() => Int, {nullable:true})
    nationalityId?: number;
    @Field(() => Int, {nullable:true})
    maritalStatusId?: number;
    @Field(() => Int, {nullable:true})
    employmentTypeId?: number;
    @Field(() => Int, {nullable:true})
    employmentNatureId?: number;
    @Field(() => Date, {nullable:true})
    dateOfBirth?: Date | string;
    @Field(() => String, {nullable:false})
    placeOfBirth!: string;
    @Field(() => String, {nullable:false})
    countryOfBirth!: string;
    @Field(() => String, {nullable:false})
    idNumber!: string;
    @Field(() => String, {nullable:false})
    passportNumber!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    Phone!: string;
    @Field(() => String, {nullable:false})
    emergencyContact!: string;
    @Field(() => String, {nullable:false})
    emergencyPhone!: string;
    @Field(() => Int, {nullable:false})
    numberOfChildren!: number;
    @Field(() => Date, {nullable:true})
    employmentDate?: Date | string;
    @Field(() => Date, {nullable:true})
    probationDate?: Date | string;
    @Field(() => Date, {nullable:true})
    retirementDate?: Date | string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class EmployeeCreateNestedManyWithoutEmploymentNatureInput {
    @Field(() => [EmployeeCreateWithoutEmploymentNatureInput], {nullable:true})
    create?: Array<EmployeeCreateWithoutEmploymentNatureInput>;
    @Field(() => [EmployeeCreateOrConnectWithoutEmploymentNatureInput], {nullable:true})
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutEmploymentNatureInput>;
    @Field(() => EmployeeCreateManyEmploymentNatureInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof EmployeeCreateManyEmploymentNatureInputEnvelope>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeWhereUniqueInput>;
}

@InputType()
export class EmployeeCreateNestedManyWithoutEmploymentTypeInput {
    @Field(() => [EmployeeCreateWithoutEmploymentTypeInput], {nullable:true})
    create?: Array<EmployeeCreateWithoutEmploymentTypeInput>;
    @Field(() => [EmployeeCreateOrConnectWithoutEmploymentTypeInput], {nullable:true})
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutEmploymentTypeInput>;
    @Field(() => EmployeeCreateManyEmploymentTypeInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof EmployeeCreateManyEmploymentTypeInputEnvelope>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeWhereUniqueInput>;
}

@InputType()
export class EmployeeCreateNestedManyWithoutGenderInput {
    @Field(() => [EmployeeCreateWithoutGenderInput], {nullable:true})
    create?: Array<EmployeeCreateWithoutGenderInput>;
    @Field(() => [EmployeeCreateOrConnectWithoutGenderInput], {nullable:true})
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutGenderInput>;
    @Field(() => EmployeeCreateManyGenderInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof EmployeeCreateManyGenderInputEnvelope>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeWhereUniqueInput>;
}

@InputType()
export class EmployeeCreateNestedManyWithoutMaritalStatusInput {
    @Field(() => [EmployeeCreateWithoutMaritalStatusInput], {nullable:true})
    create?: Array<EmployeeCreateWithoutMaritalStatusInput>;
    @Field(() => [EmployeeCreateOrConnectWithoutMaritalStatusInput], {nullable:true})
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutMaritalStatusInput>;
    @Field(() => EmployeeCreateManyMaritalStatusInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof EmployeeCreateManyMaritalStatusInputEnvelope>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeWhereUniqueInput>;
}

@InputType()
export class EmployeeCreateNestedManyWithoutNationalityInput {
    @Field(() => [EmployeeCreateWithoutNationalityInput], {nullable:true})
    create?: Array<EmployeeCreateWithoutNationalityInput>;
    @Field(() => [EmployeeCreateOrConnectWithoutNationalityInput], {nullable:true})
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutNationalityInput>;
    @Field(() => EmployeeCreateManyNationalityInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof EmployeeCreateManyNationalityInputEnvelope>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeWhereUniqueInput>;
}

@InputType()
export class EmployeeCreateOrConnectWithoutEmploymentNatureInput {
    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof EmployeeWhereUniqueInput>;
    @Field(() => EmployeeCreateWithoutEmploymentNatureInput, {nullable:false})
    create!: InstanceType<typeof EmployeeCreateWithoutEmploymentNatureInput>;
}

@InputType()
export class EmployeeCreateOrConnectWithoutEmploymentTypeInput {
    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof EmployeeWhereUniqueInput>;
    @Field(() => EmployeeCreateWithoutEmploymentTypeInput, {nullable:false})
    create!: InstanceType<typeof EmployeeCreateWithoutEmploymentTypeInput>;
}

@InputType()
export class EmployeeCreateOrConnectWithoutGenderInput {
    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof EmployeeWhereUniqueInput>;
    @Field(() => EmployeeCreateWithoutGenderInput, {nullable:false})
    create!: InstanceType<typeof EmployeeCreateWithoutGenderInput>;
}

@InputType()
export class EmployeeCreateOrConnectWithoutMaritalStatusInput {
    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof EmployeeWhereUniqueInput>;
    @Field(() => EmployeeCreateWithoutMaritalStatusInput, {nullable:false})
    create!: InstanceType<typeof EmployeeCreateWithoutMaritalStatusInput>;
}

@InputType()
export class EmployeeCreateOrConnectWithoutNationalityInput {
    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof EmployeeWhereUniqueInput>;
    @Field(() => EmployeeCreateWithoutNationalityInput, {nullable:false})
    create!: InstanceType<typeof EmployeeCreateWithoutNationalityInput>;
}

@InputType()
export class EmployeeCreateWithoutEmploymentNatureInput {
    @Field(() => GraphQLJSON, {nullable:false})
    firstName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    lastName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    grandfatherName!: any;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Date, {nullable:true})
    dateOfBirth?: Date | string;
    @Field(() => String, {nullable:false})
    placeOfBirth!: string;
    @Field(() => String, {nullable:false})
    countryOfBirth!: string;
    @Field(() => String, {nullable:false})
    idNumber!: string;
    @Field(() => String, {nullable:false})
    passportNumber!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    Phone!: string;
    @Field(() => String, {nullable:false})
    emergencyContact!: string;
    @Field(() => String, {nullable:false})
    emergencyPhone!: string;
    @Field(() => Int, {nullable:false})
    numberOfChildren!: number;
    @Field(() => Date, {nullable:true})
    employmentDate?: Date | string;
    @Field(() => Date, {nullable:true})
    probationDate?: Date | string;
    @Field(() => Date, {nullable:true})
    retirementDate?: Date | string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => GenderCreateNestedOneWithoutEmployeesInput, {nullable:true})
    gender?: InstanceType<typeof GenderCreateNestedOneWithoutEmployeesInput>;
    @Field(() => NationalityCreateNestedOneWithoutEmployeesInput, {nullable:true})
    nationality?: InstanceType<typeof NationalityCreateNestedOneWithoutEmployeesInput>;
    @Field(() => MaritalStatusCreateNestedOneWithoutEmployeesInput, {nullable:true})
    maritalStatus?: InstanceType<typeof MaritalStatusCreateNestedOneWithoutEmployeesInput>;
    @Field(() => EmploymentTypeCreateNestedOneWithoutEmployeesInput, {nullable:true})
    employmentType?: InstanceType<typeof EmploymentTypeCreateNestedOneWithoutEmployeesInput>;
}

@InputType()
export class EmployeeCreateWithoutEmploymentTypeInput {
    @Field(() => GraphQLJSON, {nullable:false})
    firstName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    lastName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    grandfatherName!: any;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Date, {nullable:true})
    dateOfBirth?: Date | string;
    @Field(() => String, {nullable:false})
    placeOfBirth!: string;
    @Field(() => String, {nullable:false})
    countryOfBirth!: string;
    @Field(() => String, {nullable:false})
    idNumber!: string;
    @Field(() => String, {nullable:false})
    passportNumber!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    Phone!: string;
    @Field(() => String, {nullable:false})
    emergencyContact!: string;
    @Field(() => String, {nullable:false})
    emergencyPhone!: string;
    @Field(() => Int, {nullable:false})
    numberOfChildren!: number;
    @Field(() => Date, {nullable:true})
    employmentDate?: Date | string;
    @Field(() => Date, {nullable:true})
    probationDate?: Date | string;
    @Field(() => Date, {nullable:true})
    retirementDate?: Date | string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => GenderCreateNestedOneWithoutEmployeesInput, {nullable:true})
    gender?: InstanceType<typeof GenderCreateNestedOneWithoutEmployeesInput>;
    @Field(() => NationalityCreateNestedOneWithoutEmployeesInput, {nullable:true})
    nationality?: InstanceType<typeof NationalityCreateNestedOneWithoutEmployeesInput>;
    @Field(() => MaritalStatusCreateNestedOneWithoutEmployeesInput, {nullable:true})
    maritalStatus?: InstanceType<typeof MaritalStatusCreateNestedOneWithoutEmployeesInput>;
    @Field(() => EmploymentNatureCreateNestedOneWithoutEmployeesInput, {nullable:true})
    employmentNature?: InstanceType<typeof EmploymentNatureCreateNestedOneWithoutEmployeesInput>;
}

@InputType()
export class EmployeeCreateWithoutGenderInput {
    @Field(() => GraphQLJSON, {nullable:false})
    firstName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    lastName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    grandfatherName!: any;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Date, {nullable:true})
    dateOfBirth?: Date | string;
    @Field(() => String, {nullable:false})
    placeOfBirth!: string;
    @Field(() => String, {nullable:false})
    countryOfBirth!: string;
    @Field(() => String, {nullable:false})
    idNumber!: string;
    @Field(() => String, {nullable:false})
    passportNumber!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    Phone!: string;
    @Field(() => String, {nullable:false})
    emergencyContact!: string;
    @Field(() => String, {nullable:false})
    emergencyPhone!: string;
    @Field(() => Int, {nullable:false})
    numberOfChildren!: number;
    @Field(() => Date, {nullable:true})
    employmentDate?: Date | string;
    @Field(() => Date, {nullable:true})
    probationDate?: Date | string;
    @Field(() => Date, {nullable:true})
    retirementDate?: Date | string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => NationalityCreateNestedOneWithoutEmployeesInput, {nullable:true})
    nationality?: InstanceType<typeof NationalityCreateNestedOneWithoutEmployeesInput>;
    @Field(() => MaritalStatusCreateNestedOneWithoutEmployeesInput, {nullable:true})
    maritalStatus?: InstanceType<typeof MaritalStatusCreateNestedOneWithoutEmployeesInput>;
    @Field(() => EmploymentTypeCreateNestedOneWithoutEmployeesInput, {nullable:true})
    employmentType?: InstanceType<typeof EmploymentTypeCreateNestedOneWithoutEmployeesInput>;
    @Field(() => EmploymentNatureCreateNestedOneWithoutEmployeesInput, {nullable:true})
    employmentNature?: InstanceType<typeof EmploymentNatureCreateNestedOneWithoutEmployeesInput>;
}

@InputType()
export class EmployeeCreateWithoutMaritalStatusInput {
    @Field(() => GraphQLJSON, {nullable:false})
    firstName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    lastName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    grandfatherName!: any;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Date, {nullable:true})
    dateOfBirth?: Date | string;
    @Field(() => String, {nullable:false})
    placeOfBirth!: string;
    @Field(() => String, {nullable:false})
    countryOfBirth!: string;
    @Field(() => String, {nullable:false})
    idNumber!: string;
    @Field(() => String, {nullable:false})
    passportNumber!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    Phone!: string;
    @Field(() => String, {nullable:false})
    emergencyContact!: string;
    @Field(() => String, {nullable:false})
    emergencyPhone!: string;
    @Field(() => Int, {nullable:false})
    numberOfChildren!: number;
    @Field(() => Date, {nullable:true})
    employmentDate?: Date | string;
    @Field(() => Date, {nullable:true})
    probationDate?: Date | string;
    @Field(() => Date, {nullable:true})
    retirementDate?: Date | string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => GenderCreateNestedOneWithoutEmployeesInput, {nullable:true})
    gender?: InstanceType<typeof GenderCreateNestedOneWithoutEmployeesInput>;
    @Field(() => NationalityCreateNestedOneWithoutEmployeesInput, {nullable:true})
    nationality?: InstanceType<typeof NationalityCreateNestedOneWithoutEmployeesInput>;
    @Field(() => EmploymentTypeCreateNestedOneWithoutEmployeesInput, {nullable:true})
    employmentType?: InstanceType<typeof EmploymentTypeCreateNestedOneWithoutEmployeesInput>;
    @Field(() => EmploymentNatureCreateNestedOneWithoutEmployeesInput, {nullable:true})
    employmentNature?: InstanceType<typeof EmploymentNatureCreateNestedOneWithoutEmployeesInput>;
}

@InputType()
export class EmployeeCreateWithoutNationalityInput {
    @Field(() => GraphQLJSON, {nullable:false})
    firstName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    lastName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    grandfatherName!: any;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Date, {nullable:true})
    dateOfBirth?: Date | string;
    @Field(() => String, {nullable:false})
    placeOfBirth!: string;
    @Field(() => String, {nullable:false})
    countryOfBirth!: string;
    @Field(() => String, {nullable:false})
    idNumber!: string;
    @Field(() => String, {nullable:false})
    passportNumber!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    Phone!: string;
    @Field(() => String, {nullable:false})
    emergencyContact!: string;
    @Field(() => String, {nullable:false})
    emergencyPhone!: string;
    @Field(() => Int, {nullable:false})
    numberOfChildren!: number;
    @Field(() => Date, {nullable:true})
    employmentDate?: Date | string;
    @Field(() => Date, {nullable:true})
    probationDate?: Date | string;
    @Field(() => Date, {nullable:true})
    retirementDate?: Date | string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => GenderCreateNestedOneWithoutEmployeesInput, {nullable:true})
    gender?: InstanceType<typeof GenderCreateNestedOneWithoutEmployeesInput>;
    @Field(() => MaritalStatusCreateNestedOneWithoutEmployeesInput, {nullable:true})
    maritalStatus?: InstanceType<typeof MaritalStatusCreateNestedOneWithoutEmployeesInput>;
    @Field(() => EmploymentTypeCreateNestedOneWithoutEmployeesInput, {nullable:true})
    employmentType?: InstanceType<typeof EmploymentTypeCreateNestedOneWithoutEmployeesInput>;
    @Field(() => EmploymentNatureCreateNestedOneWithoutEmployeesInput, {nullable:true})
    employmentNature?: InstanceType<typeof EmploymentNatureCreateNestedOneWithoutEmployeesInput>;
}

@InputType()
export class EmployeeCreateInput {
    @Field(() => GraphQLJSON, {nullable:false})
    firstName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    lastName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    grandfatherName!: any;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Date, {nullable:true})
    dateOfBirth?: Date | string;
    @Field(() => String, {nullable:false})
    placeOfBirth!: string;
    @Field(() => String, {nullable:false})
    countryOfBirth!: string;
    @Field(() => String, {nullable:false})
    idNumber!: string;
    @Field(() => String, {nullable:false})
    passportNumber!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    Phone!: string;
    @Field(() => String, {nullable:false})
    emergencyContact!: string;
    @Field(() => String, {nullable:false})
    emergencyPhone!: string;
    @Field(() => Int, {nullable:false})
    numberOfChildren!: number;
    @Field(() => Date, {nullable:true})
    employmentDate?: Date | string;
    @Field(() => Date, {nullable:true})
    probationDate?: Date | string;
    @Field(() => Date, {nullable:true})
    retirementDate?: Date | string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => GenderCreateNestedOneWithoutEmployeesInput, {nullable:true})
    gender?: InstanceType<typeof GenderCreateNestedOneWithoutEmployeesInput>;
    @Field(() => NationalityCreateNestedOneWithoutEmployeesInput, {nullable:true})
    nationality?: InstanceType<typeof NationalityCreateNestedOneWithoutEmployeesInput>;
    @Field(() => MaritalStatusCreateNestedOneWithoutEmployeesInput, {nullable:true})
    maritalStatus?: InstanceType<typeof MaritalStatusCreateNestedOneWithoutEmployeesInput>;
    @Field(() => EmploymentTypeCreateNestedOneWithoutEmployeesInput, {nullable:true})
    employmentType?: InstanceType<typeof EmploymentTypeCreateNestedOneWithoutEmployeesInput>;
    @Field(() => EmploymentNatureCreateNestedOneWithoutEmployeesInput, {nullable:true})
    employmentNature?: InstanceType<typeof EmploymentNatureCreateNestedOneWithoutEmployeesInput>;
}

@ArgsType()
export class EmployeeGroupByArgs {
    @Field(() => EmployeeWhereInput, {nullable:true})
    where?: InstanceType<typeof EmployeeWhereInput>;
    @Field(() => [EmployeeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<EmployeeOrderByWithAggregationInput>;
    @Field(() => [EmployeeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof EmployeeScalarFieldEnum>;
    @Field(() => EmployeeScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof EmployeeScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => EmployeeCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof EmployeeCountAggregateInput>;
    @Field(() => EmployeeAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof EmployeeAvgAggregateInput>;
    @Field(() => EmployeeSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof EmployeeSumAggregateInput>;
    @Field(() => EmployeeMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof EmployeeMinAggregateInput>;
    @Field(() => EmployeeMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof EmployeeMaxAggregateInput>;
}

@ObjectType()
export class EmployeeGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => GraphQLJSON, {nullable:false})
    firstName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    lastName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    grandfatherName!: any;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    genderId?: number;
    @Field(() => Int, {nullable:true})
    nationalityId?: number;
    @Field(() => Int, {nullable:true})
    maritalStatusId?: number;
    @Field(() => Int, {nullable:true})
    employmentTypeId?: number;
    @Field(() => Int, {nullable:true})
    employmentNatureId?: number;
    @Field(() => Date, {nullable:false})
    dateOfBirth!: Date | string;
    @Field(() => String, {nullable:false})
    placeOfBirth!: string;
    @Field(() => String, {nullable:false})
    countryOfBirth!: string;
    @Field(() => String, {nullable:false})
    idNumber!: string;
    @Field(() => String, {nullable:false})
    passportNumber!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    Phone!: string;
    @Field(() => String, {nullable:false})
    emergencyContact!: string;
    @Field(() => String, {nullable:false})
    emergencyPhone!: string;
    @Field(() => Int, {nullable:false})
    numberOfChildren!: number;
    @Field(() => Date, {nullable:false})
    employmentDate!: Date | string;
    @Field(() => Date, {nullable:false})
    probationDate!: Date | string;
    @Field(() => Date, {nullable:false})
    retirementDate!: Date | string;
    @Field(() => Boolean, {nullable:false})
    deleted!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => EmployeeCountAggregate, {nullable:true})
    _count?: InstanceType<typeof EmployeeCountAggregate>;
    @Field(() => EmployeeAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof EmployeeAvgAggregate>;
    @Field(() => EmployeeSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof EmployeeSumAggregate>;
    @Field(() => EmployeeMinAggregate, {nullable:true})
    _min?: InstanceType<typeof EmployeeMinAggregate>;
    @Field(() => EmployeeMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof EmployeeMaxAggregate>;
}

@InputType()
export class EmployeeListRelationFilter {
    @Field(() => EmployeeWhereInput, {nullable:true})
    every?: InstanceType<typeof EmployeeWhereInput>;
    @Field(() => EmployeeWhereInput, {nullable:true})
    some?: InstanceType<typeof EmployeeWhereInput>;
    @Field(() => EmployeeWhereInput, {nullable:true})
    none?: InstanceType<typeof EmployeeWhereInput>;
}

@InputType()
export class EmployeeMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    genderId?: true;
    @Field(() => Boolean, {nullable:true})
    nationalityId?: true;
    @Field(() => Boolean, {nullable:true})
    maritalStatusId?: true;
    @Field(() => Boolean, {nullable:true})
    employmentTypeId?: true;
    @Field(() => Boolean, {nullable:true})
    employmentNatureId?: true;
    @Field(() => Boolean, {nullable:true})
    dateOfBirth?: true;
    @Field(() => Boolean, {nullable:true})
    placeOfBirth?: true;
    @Field(() => Boolean, {nullable:true})
    countryOfBirth?: true;
    @Field(() => Boolean, {nullable:true})
    idNumber?: true;
    @Field(() => Boolean, {nullable:true})
    passportNumber?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    Phone?: true;
    @Field(() => Boolean, {nullable:true})
    emergencyContact?: true;
    @Field(() => Boolean, {nullable:true})
    emergencyPhone?: true;
    @Field(() => Boolean, {nullable:true})
    numberOfChildren?: true;
    @Field(() => Boolean, {nullable:true})
    employmentDate?: true;
    @Field(() => Boolean, {nullable:true})
    probationDate?: true;
    @Field(() => Boolean, {nullable:true})
    retirementDate?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class EmployeeMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    genderId?: number;
    @Field(() => Int, {nullable:true})
    nationalityId?: number;
    @Field(() => Int, {nullable:true})
    maritalStatusId?: number;
    @Field(() => Int, {nullable:true})
    employmentTypeId?: number;
    @Field(() => Int, {nullable:true})
    employmentNatureId?: number;
    @Field(() => Date, {nullable:true})
    dateOfBirth?: Date | string;
    @Field(() => String, {nullable:true})
    placeOfBirth?: string;
    @Field(() => String, {nullable:true})
    countryOfBirth?: string;
    @Field(() => String, {nullable:true})
    idNumber?: string;
    @Field(() => String, {nullable:true})
    passportNumber?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    Phone?: string;
    @Field(() => String, {nullable:true})
    emergencyContact?: string;
    @Field(() => String, {nullable:true})
    emergencyPhone?: string;
    @Field(() => Int, {nullable:true})
    numberOfChildren?: number;
    @Field(() => Date, {nullable:true})
    employmentDate?: Date | string;
    @Field(() => Date, {nullable:true})
    probationDate?: Date | string;
    @Field(() => Date, {nullable:true})
    retirementDate?: Date | string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class EmployeeMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    genderId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    nationalityId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    maritalStatusId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employmentTypeId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employmentNatureId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    dateOfBirth?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    placeOfBirth?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    countryOfBirth?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    idNumber?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    passportNumber?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    Phone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    emergencyContact?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    emergencyPhone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    numberOfChildren?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employmentDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    probationDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    retirementDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class EmployeeMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    genderId?: true;
    @Field(() => Boolean, {nullable:true})
    nationalityId?: true;
    @Field(() => Boolean, {nullable:true})
    maritalStatusId?: true;
    @Field(() => Boolean, {nullable:true})
    employmentTypeId?: true;
    @Field(() => Boolean, {nullable:true})
    employmentNatureId?: true;
    @Field(() => Boolean, {nullable:true})
    dateOfBirth?: true;
    @Field(() => Boolean, {nullable:true})
    placeOfBirth?: true;
    @Field(() => Boolean, {nullable:true})
    countryOfBirth?: true;
    @Field(() => Boolean, {nullable:true})
    idNumber?: true;
    @Field(() => Boolean, {nullable:true})
    passportNumber?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    Phone?: true;
    @Field(() => Boolean, {nullable:true})
    emergencyContact?: true;
    @Field(() => Boolean, {nullable:true})
    emergencyPhone?: true;
    @Field(() => Boolean, {nullable:true})
    numberOfChildren?: true;
    @Field(() => Boolean, {nullable:true})
    employmentDate?: true;
    @Field(() => Boolean, {nullable:true})
    probationDate?: true;
    @Field(() => Boolean, {nullable:true})
    retirementDate?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class EmployeeMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    genderId?: number;
    @Field(() => Int, {nullable:true})
    nationalityId?: number;
    @Field(() => Int, {nullable:true})
    maritalStatusId?: number;
    @Field(() => Int, {nullable:true})
    employmentTypeId?: number;
    @Field(() => Int, {nullable:true})
    employmentNatureId?: number;
    @Field(() => Date, {nullable:true})
    dateOfBirth?: Date | string;
    @Field(() => String, {nullable:true})
    placeOfBirth?: string;
    @Field(() => String, {nullable:true})
    countryOfBirth?: string;
    @Field(() => String, {nullable:true})
    idNumber?: string;
    @Field(() => String, {nullable:true})
    passportNumber?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    Phone?: string;
    @Field(() => String, {nullable:true})
    emergencyContact?: string;
    @Field(() => String, {nullable:true})
    emergencyPhone?: string;
    @Field(() => Int, {nullable:true})
    numberOfChildren?: number;
    @Field(() => Date, {nullable:true})
    employmentDate?: Date | string;
    @Field(() => Date, {nullable:true})
    probationDate?: Date | string;
    @Field(() => Date, {nullable:true})
    retirementDate?: Date | string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class EmployeeMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    genderId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    nationalityId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    maritalStatusId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employmentTypeId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employmentNatureId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    dateOfBirth?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    placeOfBirth?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    countryOfBirth?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    idNumber?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    passportNumber?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    Phone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    emergencyContact?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    emergencyPhone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    numberOfChildren?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employmentDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    probationDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    retirementDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class EmployeeOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class EmployeeOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    grandfatherName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    genderId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    nationalityId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    maritalStatusId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employmentTypeId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employmentNatureId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    dateOfBirth?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    placeOfBirth?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    countryOfBirth?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    idNumber?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    passportNumber?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    Phone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    emergencyContact?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    emergencyPhone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    numberOfChildren?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employmentDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    probationDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    retirementDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => EmployeeCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof EmployeeCountOrderByAggregateInput>;
    @Field(() => EmployeeAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof EmployeeAvgOrderByAggregateInput>;
    @Field(() => EmployeeMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof EmployeeMaxOrderByAggregateInput>;
    @Field(() => EmployeeMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof EmployeeMinOrderByAggregateInput>;
    @Field(() => EmployeeSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof EmployeeSumOrderByAggregateInput>;
}

@InputType()
export class EmployeeOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    grandfatherName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => GenderOrderByWithRelationInput, {nullable:true})
    gender?: InstanceType<typeof GenderOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    genderId?: keyof typeof SortOrder;
    @Field(() => NationalityOrderByWithRelationInput, {nullable:true})
    nationality?: InstanceType<typeof NationalityOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    nationalityId?: keyof typeof SortOrder;
    @Field(() => MaritalStatusOrderByWithRelationInput, {nullable:true})
    maritalStatus?: InstanceType<typeof MaritalStatusOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    maritalStatusId?: keyof typeof SortOrder;
    @Field(() => EmploymentTypeOrderByWithRelationInput, {nullable:true})
    employmentType?: InstanceType<typeof EmploymentTypeOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    employmentTypeId?: keyof typeof SortOrder;
    @Field(() => EmploymentNatureOrderByWithRelationInput, {nullable:true})
    employmentNature?: InstanceType<typeof EmploymentNatureOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    employmentNatureId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    dateOfBirth?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    placeOfBirth?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    countryOfBirth?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    idNumber?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    passportNumber?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    Phone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    emergencyContact?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    emergencyPhone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    numberOfChildren?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employmentDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    probationDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    retirementDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class EmployeeScalarWhereWithAggregatesInput {
    @Field(() => [EmployeeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EmployeeScalarWhereWithAggregatesInput>;
    @Field(() => [EmployeeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EmployeeScalarWhereWithAggregatesInput>;
    @Field(() => [EmployeeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EmployeeScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    firstName?: InstanceType<typeof JsonWithAggregatesFilter>;
    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    lastName?: InstanceType<typeof JsonWithAggregatesFilter>;
    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    grandfatherName?: InstanceType<typeof JsonWithAggregatesFilter>;
    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    locales?: InstanceType<typeof JsonNullableWithAggregatesFilter>;
    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    genderId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    nationalityId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    maritalStatusId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    employmentTypeId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    employmentNatureId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    dateOfBirth?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    placeOfBirth?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    countryOfBirth?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    idNumber?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    passportNumber?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    Phone?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    emergencyContact?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    emergencyPhone?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    numberOfChildren?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    employmentDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    probationDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    retirementDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    deleted?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class EmployeeScalarWhereInput {
    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    AND?: Array<EmployeeScalarWhereInput>;
    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    OR?: Array<EmployeeScalarWhereInput>;
    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    NOT?: Array<EmployeeScalarWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => JsonFilter, {nullable:true})
    firstName?: InstanceType<typeof JsonFilter>;
    @Field(() => JsonFilter, {nullable:true})
    lastName?: InstanceType<typeof JsonFilter>;
    @Field(() => JsonFilter, {nullable:true})
    grandfatherName?: InstanceType<typeof JsonFilter>;
    @Field(() => JsonNullableFilter, {nullable:true})
    locales?: InstanceType<typeof JsonNullableFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    genderId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    nationalityId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    maritalStatusId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    employmentTypeId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    employmentNatureId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    dateOfBirth?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    placeOfBirth?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    countryOfBirth?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    idNumber?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    passportNumber?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    Phone?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    emergencyContact?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    emergencyPhone?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    numberOfChildren?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    employmentDate?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    probationDate?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    retirementDate?: InstanceType<typeof DateTimeFilter>;
    @Field(() => BoolFilter, {nullable:true})
    deleted?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class EmployeeSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    genderId?: true;
    @Field(() => Boolean, {nullable:true})
    nationalityId?: true;
    @Field(() => Boolean, {nullable:true})
    maritalStatusId?: true;
    @Field(() => Boolean, {nullable:true})
    employmentTypeId?: true;
    @Field(() => Boolean, {nullable:true})
    employmentNatureId?: true;
    @Field(() => Boolean, {nullable:true})
    numberOfChildren?: true;
}

@ObjectType()
export class EmployeeSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    genderId?: number;
    @Field(() => Int, {nullable:true})
    nationalityId?: number;
    @Field(() => Int, {nullable:true})
    maritalStatusId?: number;
    @Field(() => Int, {nullable:true})
    employmentTypeId?: number;
    @Field(() => Int, {nullable:true})
    employmentNatureId?: number;
    @Field(() => Int, {nullable:true})
    numberOfChildren?: number;
}

@InputType()
export class EmployeeSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    genderId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    nationalityId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    maritalStatusId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employmentTypeId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    employmentNatureId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    numberOfChildren?: keyof typeof SortOrder;
}

@InputType()
export class EmployeeUncheckedCreateNestedManyWithoutEmploymentNatureInput {
    @Field(() => [EmployeeCreateWithoutEmploymentNatureInput], {nullable:true})
    create?: Array<EmployeeCreateWithoutEmploymentNatureInput>;
    @Field(() => [EmployeeCreateOrConnectWithoutEmploymentNatureInput], {nullable:true})
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutEmploymentNatureInput>;
    @Field(() => EmployeeCreateManyEmploymentNatureInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof EmployeeCreateManyEmploymentNatureInputEnvelope>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeWhereUniqueInput>;
}

@InputType()
export class EmployeeUncheckedCreateNestedManyWithoutEmploymentTypeInput {
    @Field(() => [EmployeeCreateWithoutEmploymentTypeInput], {nullable:true})
    create?: Array<EmployeeCreateWithoutEmploymentTypeInput>;
    @Field(() => [EmployeeCreateOrConnectWithoutEmploymentTypeInput], {nullable:true})
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutEmploymentTypeInput>;
    @Field(() => EmployeeCreateManyEmploymentTypeInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof EmployeeCreateManyEmploymentTypeInputEnvelope>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeWhereUniqueInput>;
}

@InputType()
export class EmployeeUncheckedCreateNestedManyWithoutGenderInput {
    @Field(() => [EmployeeCreateWithoutGenderInput], {nullable:true})
    create?: Array<EmployeeCreateWithoutGenderInput>;
    @Field(() => [EmployeeCreateOrConnectWithoutGenderInput], {nullable:true})
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutGenderInput>;
    @Field(() => EmployeeCreateManyGenderInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof EmployeeCreateManyGenderInputEnvelope>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeWhereUniqueInput>;
}

@InputType()
export class EmployeeUncheckedCreateNestedManyWithoutMaritalStatusInput {
    @Field(() => [EmployeeCreateWithoutMaritalStatusInput], {nullable:true})
    create?: Array<EmployeeCreateWithoutMaritalStatusInput>;
    @Field(() => [EmployeeCreateOrConnectWithoutMaritalStatusInput], {nullable:true})
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutMaritalStatusInput>;
    @Field(() => EmployeeCreateManyMaritalStatusInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof EmployeeCreateManyMaritalStatusInputEnvelope>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeWhereUniqueInput>;
}

@InputType()
export class EmployeeUncheckedCreateNestedManyWithoutNationalityInput {
    @Field(() => [EmployeeCreateWithoutNationalityInput], {nullable:true})
    create?: Array<EmployeeCreateWithoutNationalityInput>;
    @Field(() => [EmployeeCreateOrConnectWithoutNationalityInput], {nullable:true})
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutNationalityInput>;
    @Field(() => EmployeeCreateManyNationalityInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof EmployeeCreateManyNationalityInputEnvelope>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeWhereUniqueInput>;
}

@InputType()
export class EmployeeUncheckedCreateWithoutEmploymentNatureInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => GraphQLJSON, {nullable:false})
    firstName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    lastName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    grandfatherName!: any;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    genderId?: number;
    @Field(() => Int, {nullable:true})
    nationalityId?: number;
    @Field(() => Int, {nullable:true})
    maritalStatusId?: number;
    @Field(() => Int, {nullable:true})
    employmentTypeId?: number;
    @Field(() => Date, {nullable:true})
    dateOfBirth?: Date | string;
    @Field(() => String, {nullable:false})
    placeOfBirth!: string;
    @Field(() => String, {nullable:false})
    countryOfBirth!: string;
    @Field(() => String, {nullable:false})
    idNumber!: string;
    @Field(() => String, {nullable:false})
    passportNumber!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    Phone!: string;
    @Field(() => String, {nullable:false})
    emergencyContact!: string;
    @Field(() => String, {nullable:false})
    emergencyPhone!: string;
    @Field(() => Int, {nullable:false})
    numberOfChildren!: number;
    @Field(() => Date, {nullable:true})
    employmentDate?: Date | string;
    @Field(() => Date, {nullable:true})
    probationDate?: Date | string;
    @Field(() => Date, {nullable:true})
    retirementDate?: Date | string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class EmployeeUncheckedCreateWithoutEmploymentTypeInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => GraphQLJSON, {nullable:false})
    firstName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    lastName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    grandfatherName!: any;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    genderId?: number;
    @Field(() => Int, {nullable:true})
    nationalityId?: number;
    @Field(() => Int, {nullable:true})
    maritalStatusId?: number;
    @Field(() => Int, {nullable:true})
    employmentNatureId?: number;
    @Field(() => Date, {nullable:true})
    dateOfBirth?: Date | string;
    @Field(() => String, {nullable:false})
    placeOfBirth!: string;
    @Field(() => String, {nullable:false})
    countryOfBirth!: string;
    @Field(() => String, {nullable:false})
    idNumber!: string;
    @Field(() => String, {nullable:false})
    passportNumber!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    Phone!: string;
    @Field(() => String, {nullable:false})
    emergencyContact!: string;
    @Field(() => String, {nullable:false})
    emergencyPhone!: string;
    @Field(() => Int, {nullable:false})
    numberOfChildren!: number;
    @Field(() => Date, {nullable:true})
    employmentDate?: Date | string;
    @Field(() => Date, {nullable:true})
    probationDate?: Date | string;
    @Field(() => Date, {nullable:true})
    retirementDate?: Date | string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class EmployeeUncheckedCreateWithoutGenderInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => GraphQLJSON, {nullable:false})
    firstName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    lastName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    grandfatherName!: any;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    nationalityId?: number;
    @Field(() => Int, {nullable:true})
    maritalStatusId?: number;
    @Field(() => Int, {nullable:true})
    employmentTypeId?: number;
    @Field(() => Int, {nullable:true})
    employmentNatureId?: number;
    @Field(() => Date, {nullable:true})
    dateOfBirth?: Date | string;
    @Field(() => String, {nullable:false})
    placeOfBirth!: string;
    @Field(() => String, {nullable:false})
    countryOfBirth!: string;
    @Field(() => String, {nullable:false})
    idNumber!: string;
    @Field(() => String, {nullable:false})
    passportNumber!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    Phone!: string;
    @Field(() => String, {nullable:false})
    emergencyContact!: string;
    @Field(() => String, {nullable:false})
    emergencyPhone!: string;
    @Field(() => Int, {nullable:false})
    numberOfChildren!: number;
    @Field(() => Date, {nullable:true})
    employmentDate?: Date | string;
    @Field(() => Date, {nullable:true})
    probationDate?: Date | string;
    @Field(() => Date, {nullable:true})
    retirementDate?: Date | string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class EmployeeUncheckedCreateWithoutMaritalStatusInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => GraphQLJSON, {nullable:false})
    firstName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    lastName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    grandfatherName!: any;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    genderId?: number;
    @Field(() => Int, {nullable:true})
    nationalityId?: number;
    @Field(() => Int, {nullable:true})
    employmentTypeId?: number;
    @Field(() => Int, {nullable:true})
    employmentNatureId?: number;
    @Field(() => Date, {nullable:true})
    dateOfBirth?: Date | string;
    @Field(() => String, {nullable:false})
    placeOfBirth!: string;
    @Field(() => String, {nullable:false})
    countryOfBirth!: string;
    @Field(() => String, {nullable:false})
    idNumber!: string;
    @Field(() => String, {nullable:false})
    passportNumber!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    Phone!: string;
    @Field(() => String, {nullable:false})
    emergencyContact!: string;
    @Field(() => String, {nullable:false})
    emergencyPhone!: string;
    @Field(() => Int, {nullable:false})
    numberOfChildren!: number;
    @Field(() => Date, {nullable:true})
    employmentDate?: Date | string;
    @Field(() => Date, {nullable:true})
    probationDate?: Date | string;
    @Field(() => Date, {nullable:true})
    retirementDate?: Date | string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class EmployeeUncheckedCreateWithoutNationalityInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => GraphQLJSON, {nullable:false})
    firstName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    lastName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    grandfatherName!: any;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    genderId?: number;
    @Field(() => Int, {nullable:true})
    maritalStatusId?: number;
    @Field(() => Int, {nullable:true})
    employmentTypeId?: number;
    @Field(() => Int, {nullable:true})
    employmentNatureId?: number;
    @Field(() => Date, {nullable:true})
    dateOfBirth?: Date | string;
    @Field(() => String, {nullable:false})
    placeOfBirth!: string;
    @Field(() => String, {nullable:false})
    countryOfBirth!: string;
    @Field(() => String, {nullable:false})
    idNumber!: string;
    @Field(() => String, {nullable:false})
    passportNumber!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    Phone!: string;
    @Field(() => String, {nullable:false})
    emergencyContact!: string;
    @Field(() => String, {nullable:false})
    emergencyPhone!: string;
    @Field(() => Int, {nullable:false})
    numberOfChildren!: number;
    @Field(() => Date, {nullable:true})
    employmentDate?: Date | string;
    @Field(() => Date, {nullable:true})
    probationDate?: Date | string;
    @Field(() => Date, {nullable:true})
    retirementDate?: Date | string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class EmployeeUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => GraphQLJSON, {nullable:false})
    firstName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    lastName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    grandfatherName!: any;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    genderId?: number;
    @Field(() => Int, {nullable:true})
    nationalityId?: number;
    @Field(() => Int, {nullable:true})
    maritalStatusId?: number;
    @Field(() => Int, {nullable:true})
    employmentTypeId?: number;
    @Field(() => Int, {nullable:true})
    employmentNatureId?: number;
    @Field(() => Date, {nullable:true})
    dateOfBirth?: Date | string;
    @Field(() => String, {nullable:false})
    placeOfBirth!: string;
    @Field(() => String, {nullable:false})
    countryOfBirth!: string;
    @Field(() => String, {nullable:false})
    idNumber!: string;
    @Field(() => String, {nullable:false})
    passportNumber!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    Phone!: string;
    @Field(() => String, {nullable:false})
    emergencyContact!: string;
    @Field(() => String, {nullable:false})
    emergencyPhone!: string;
    @Field(() => Int, {nullable:false})
    numberOfChildren!: number;
    @Field(() => Date, {nullable:true})
    employmentDate?: Date | string;
    @Field(() => Date, {nullable:true})
    probationDate?: Date | string;
    @Field(() => Date, {nullable:true})
    retirementDate?: Date | string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class EmployeeUncheckedUpdateManyWithoutEmployeesInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    firstName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    lastName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    grandfatherName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    nationalityId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    maritalStatusId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    employmentTypeId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    employmentNatureId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfBirth?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    placeOfBirth?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryOfBirth?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    passportNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    Phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    emergencyContact?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    emergencyPhone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    numberOfChildren?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    employmentDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    probationDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    retirementDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class EmployeeUncheckedUpdateManyWithoutEmploymentNatureInput {
    @Field(() => [EmployeeCreateWithoutEmploymentNatureInput], {nullable:true})
    create?: Array<EmployeeCreateWithoutEmploymentNatureInput>;
    @Field(() => [EmployeeCreateOrConnectWithoutEmploymentNatureInput], {nullable:true})
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutEmploymentNatureInput>;
    @Field(() => [EmployeeUpsertWithWhereUniqueWithoutEmploymentNatureInput], {nullable:true})
    upsert?: Array<EmployeeUpsertWithWhereUniqueWithoutEmploymentNatureInput>;
    @Field(() => EmployeeCreateManyEmploymentNatureInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof EmployeeCreateManyEmploymentNatureInputEnvelope>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    set?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    disconnect?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    delete?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeUpdateWithWhereUniqueWithoutEmploymentNatureInput], {nullable:true})
    update?: Array<EmployeeUpdateWithWhereUniqueWithoutEmploymentNatureInput>;
    @Field(() => [EmployeeUpdateManyWithWhereWithoutEmploymentNatureInput], {nullable:true})
    updateMany?: Array<EmployeeUpdateManyWithWhereWithoutEmploymentNatureInput>;
    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    deleteMany?: Array<EmployeeScalarWhereInput>;
}

@InputType()
export class EmployeeUncheckedUpdateManyWithoutEmploymentTypeInput {
    @Field(() => [EmployeeCreateWithoutEmploymentTypeInput], {nullable:true})
    create?: Array<EmployeeCreateWithoutEmploymentTypeInput>;
    @Field(() => [EmployeeCreateOrConnectWithoutEmploymentTypeInput], {nullable:true})
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutEmploymentTypeInput>;
    @Field(() => [EmployeeUpsertWithWhereUniqueWithoutEmploymentTypeInput], {nullable:true})
    upsert?: Array<EmployeeUpsertWithWhereUniqueWithoutEmploymentTypeInput>;
    @Field(() => EmployeeCreateManyEmploymentTypeInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof EmployeeCreateManyEmploymentTypeInputEnvelope>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    set?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    disconnect?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    delete?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeUpdateWithWhereUniqueWithoutEmploymentTypeInput], {nullable:true})
    update?: Array<EmployeeUpdateWithWhereUniqueWithoutEmploymentTypeInput>;
    @Field(() => [EmployeeUpdateManyWithWhereWithoutEmploymentTypeInput], {nullable:true})
    updateMany?: Array<EmployeeUpdateManyWithWhereWithoutEmploymentTypeInput>;
    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    deleteMany?: Array<EmployeeScalarWhereInput>;
}

@InputType()
export class EmployeeUncheckedUpdateManyWithoutGenderInput {
    @Field(() => [EmployeeCreateWithoutGenderInput], {nullable:true})
    create?: Array<EmployeeCreateWithoutGenderInput>;
    @Field(() => [EmployeeCreateOrConnectWithoutGenderInput], {nullable:true})
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutGenderInput>;
    @Field(() => [EmployeeUpsertWithWhereUniqueWithoutGenderInput], {nullable:true})
    upsert?: Array<EmployeeUpsertWithWhereUniqueWithoutGenderInput>;
    @Field(() => EmployeeCreateManyGenderInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof EmployeeCreateManyGenderInputEnvelope>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    set?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    disconnect?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    delete?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeUpdateWithWhereUniqueWithoutGenderInput], {nullable:true})
    update?: Array<EmployeeUpdateWithWhereUniqueWithoutGenderInput>;
    @Field(() => [EmployeeUpdateManyWithWhereWithoutGenderInput], {nullable:true})
    updateMany?: Array<EmployeeUpdateManyWithWhereWithoutGenderInput>;
    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    deleteMany?: Array<EmployeeScalarWhereInput>;
}

@InputType()
export class EmployeeUncheckedUpdateManyWithoutMaritalStatusInput {
    @Field(() => [EmployeeCreateWithoutMaritalStatusInput], {nullable:true})
    create?: Array<EmployeeCreateWithoutMaritalStatusInput>;
    @Field(() => [EmployeeCreateOrConnectWithoutMaritalStatusInput], {nullable:true})
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutMaritalStatusInput>;
    @Field(() => [EmployeeUpsertWithWhereUniqueWithoutMaritalStatusInput], {nullable:true})
    upsert?: Array<EmployeeUpsertWithWhereUniqueWithoutMaritalStatusInput>;
    @Field(() => EmployeeCreateManyMaritalStatusInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof EmployeeCreateManyMaritalStatusInputEnvelope>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    set?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    disconnect?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    delete?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeUpdateWithWhereUniqueWithoutMaritalStatusInput], {nullable:true})
    update?: Array<EmployeeUpdateWithWhereUniqueWithoutMaritalStatusInput>;
    @Field(() => [EmployeeUpdateManyWithWhereWithoutMaritalStatusInput], {nullable:true})
    updateMany?: Array<EmployeeUpdateManyWithWhereWithoutMaritalStatusInput>;
    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    deleteMany?: Array<EmployeeScalarWhereInput>;
}

@InputType()
export class EmployeeUncheckedUpdateManyWithoutNationalityInput {
    @Field(() => [EmployeeCreateWithoutNationalityInput], {nullable:true})
    create?: Array<EmployeeCreateWithoutNationalityInput>;
    @Field(() => [EmployeeCreateOrConnectWithoutNationalityInput], {nullable:true})
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutNationalityInput>;
    @Field(() => [EmployeeUpsertWithWhereUniqueWithoutNationalityInput], {nullable:true})
    upsert?: Array<EmployeeUpsertWithWhereUniqueWithoutNationalityInput>;
    @Field(() => EmployeeCreateManyNationalityInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof EmployeeCreateManyNationalityInputEnvelope>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    set?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    disconnect?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    delete?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeUpdateWithWhereUniqueWithoutNationalityInput], {nullable:true})
    update?: Array<EmployeeUpdateWithWhereUniqueWithoutNationalityInput>;
    @Field(() => [EmployeeUpdateManyWithWhereWithoutNationalityInput], {nullable:true})
    updateMany?: Array<EmployeeUpdateManyWithWhereWithoutNationalityInput>;
    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    deleteMany?: Array<EmployeeScalarWhereInput>;
}

@InputType()
export class EmployeeUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    firstName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    lastName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    grandfatherName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    genderId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    nationalityId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    maritalStatusId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    employmentTypeId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    employmentNatureId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfBirth?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    placeOfBirth?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryOfBirth?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    passportNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    Phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    emergencyContact?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    emergencyPhone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    numberOfChildren?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    employmentDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    probationDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    retirementDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class EmployeeUncheckedUpdateWithoutEmploymentNatureInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    firstName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    lastName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    grandfatherName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    genderId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    nationalityId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    maritalStatusId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    employmentTypeId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfBirth?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    placeOfBirth?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryOfBirth?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    passportNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    Phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    emergencyContact?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    emergencyPhone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    numberOfChildren?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    employmentDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    probationDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    retirementDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class EmployeeUncheckedUpdateWithoutEmploymentTypeInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    firstName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    lastName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    grandfatherName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    genderId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    nationalityId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    maritalStatusId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    employmentNatureId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfBirth?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    placeOfBirth?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryOfBirth?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    passportNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    Phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    emergencyContact?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    emergencyPhone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    numberOfChildren?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    employmentDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    probationDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    retirementDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class EmployeeUncheckedUpdateWithoutGenderInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    firstName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    lastName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    grandfatherName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    nationalityId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    maritalStatusId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    employmentTypeId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    employmentNatureId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfBirth?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    placeOfBirth?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryOfBirth?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    passportNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    Phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    emergencyContact?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    emergencyPhone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    numberOfChildren?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    employmentDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    probationDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    retirementDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class EmployeeUncheckedUpdateWithoutMaritalStatusInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    firstName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    lastName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    grandfatherName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    genderId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    nationalityId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    employmentTypeId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    employmentNatureId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfBirth?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    placeOfBirth?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryOfBirth?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    passportNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    Phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    emergencyContact?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    emergencyPhone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    numberOfChildren?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    employmentDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    probationDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    retirementDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class EmployeeUncheckedUpdateWithoutNationalityInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    firstName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    lastName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    grandfatherName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    genderId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    maritalStatusId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    employmentTypeId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    employmentNatureId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfBirth?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    placeOfBirth?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryOfBirth?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    passportNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    Phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    emergencyContact?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    emergencyPhone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    numberOfChildren?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    employmentDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    probationDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    retirementDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class EmployeeUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    firstName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    lastName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    grandfatherName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    genderId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    nationalityId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    maritalStatusId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    employmentTypeId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    employmentNatureId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfBirth?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    placeOfBirth?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryOfBirth?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    passportNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    Phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    emergencyContact?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    emergencyPhone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    numberOfChildren?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    employmentDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    probationDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    retirementDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class EmployeeUpdateManyMutationInput {
    @Field(() => GraphQLJSON, {nullable:true})
    firstName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    lastName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    grandfatherName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfBirth?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    placeOfBirth?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryOfBirth?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    passportNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    Phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    emergencyContact?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    emergencyPhone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    numberOfChildren?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    employmentDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    probationDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    retirementDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class EmployeeUpdateManyWithWhereWithoutEmploymentNatureInput {
    @Field(() => EmployeeScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof EmployeeScalarWhereInput>;
    @Field(() => EmployeeUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof EmployeeUpdateManyMutationInput>;
}

@InputType()
export class EmployeeUpdateManyWithWhereWithoutEmploymentTypeInput {
    @Field(() => EmployeeScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof EmployeeScalarWhereInput>;
    @Field(() => EmployeeUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof EmployeeUpdateManyMutationInput>;
}

@InputType()
export class EmployeeUpdateManyWithWhereWithoutGenderInput {
    @Field(() => EmployeeScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof EmployeeScalarWhereInput>;
    @Field(() => EmployeeUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof EmployeeUpdateManyMutationInput>;
}

@InputType()
export class EmployeeUpdateManyWithWhereWithoutMaritalStatusInput {
    @Field(() => EmployeeScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof EmployeeScalarWhereInput>;
    @Field(() => EmployeeUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof EmployeeUpdateManyMutationInput>;
}

@InputType()
export class EmployeeUpdateManyWithWhereWithoutNationalityInput {
    @Field(() => EmployeeScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof EmployeeScalarWhereInput>;
    @Field(() => EmployeeUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof EmployeeUpdateManyMutationInput>;
}

@InputType()
export class EmployeeUpdateManyWithoutEmploymentNatureInput {
    @Field(() => [EmployeeCreateWithoutEmploymentNatureInput], {nullable:true})
    create?: Array<EmployeeCreateWithoutEmploymentNatureInput>;
    @Field(() => [EmployeeCreateOrConnectWithoutEmploymentNatureInput], {nullable:true})
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutEmploymentNatureInput>;
    @Field(() => [EmployeeUpsertWithWhereUniqueWithoutEmploymentNatureInput], {nullable:true})
    upsert?: Array<EmployeeUpsertWithWhereUniqueWithoutEmploymentNatureInput>;
    @Field(() => EmployeeCreateManyEmploymentNatureInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof EmployeeCreateManyEmploymentNatureInputEnvelope>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    set?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    disconnect?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    delete?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeUpdateWithWhereUniqueWithoutEmploymentNatureInput], {nullable:true})
    update?: Array<EmployeeUpdateWithWhereUniqueWithoutEmploymentNatureInput>;
    @Field(() => [EmployeeUpdateManyWithWhereWithoutEmploymentNatureInput], {nullable:true})
    updateMany?: Array<EmployeeUpdateManyWithWhereWithoutEmploymentNatureInput>;
    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    deleteMany?: Array<EmployeeScalarWhereInput>;
}

@InputType()
export class EmployeeUpdateManyWithoutEmploymentTypeInput {
    @Field(() => [EmployeeCreateWithoutEmploymentTypeInput], {nullable:true})
    create?: Array<EmployeeCreateWithoutEmploymentTypeInput>;
    @Field(() => [EmployeeCreateOrConnectWithoutEmploymentTypeInput], {nullable:true})
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutEmploymentTypeInput>;
    @Field(() => [EmployeeUpsertWithWhereUniqueWithoutEmploymentTypeInput], {nullable:true})
    upsert?: Array<EmployeeUpsertWithWhereUniqueWithoutEmploymentTypeInput>;
    @Field(() => EmployeeCreateManyEmploymentTypeInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof EmployeeCreateManyEmploymentTypeInputEnvelope>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    set?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    disconnect?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    delete?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeUpdateWithWhereUniqueWithoutEmploymentTypeInput], {nullable:true})
    update?: Array<EmployeeUpdateWithWhereUniqueWithoutEmploymentTypeInput>;
    @Field(() => [EmployeeUpdateManyWithWhereWithoutEmploymentTypeInput], {nullable:true})
    updateMany?: Array<EmployeeUpdateManyWithWhereWithoutEmploymentTypeInput>;
    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    deleteMany?: Array<EmployeeScalarWhereInput>;
}

@InputType()
export class EmployeeUpdateManyWithoutGenderInput {
    @Field(() => [EmployeeCreateWithoutGenderInput], {nullable:true})
    create?: Array<EmployeeCreateWithoutGenderInput>;
    @Field(() => [EmployeeCreateOrConnectWithoutGenderInput], {nullable:true})
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutGenderInput>;
    @Field(() => [EmployeeUpsertWithWhereUniqueWithoutGenderInput], {nullable:true})
    upsert?: Array<EmployeeUpsertWithWhereUniqueWithoutGenderInput>;
    @Field(() => EmployeeCreateManyGenderInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof EmployeeCreateManyGenderInputEnvelope>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    set?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    disconnect?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    delete?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeUpdateWithWhereUniqueWithoutGenderInput], {nullable:true})
    update?: Array<EmployeeUpdateWithWhereUniqueWithoutGenderInput>;
    @Field(() => [EmployeeUpdateManyWithWhereWithoutGenderInput], {nullable:true})
    updateMany?: Array<EmployeeUpdateManyWithWhereWithoutGenderInput>;
    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    deleteMany?: Array<EmployeeScalarWhereInput>;
}

@InputType()
export class EmployeeUpdateManyWithoutMaritalStatusInput {
    @Field(() => [EmployeeCreateWithoutMaritalStatusInput], {nullable:true})
    create?: Array<EmployeeCreateWithoutMaritalStatusInput>;
    @Field(() => [EmployeeCreateOrConnectWithoutMaritalStatusInput], {nullable:true})
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutMaritalStatusInput>;
    @Field(() => [EmployeeUpsertWithWhereUniqueWithoutMaritalStatusInput], {nullable:true})
    upsert?: Array<EmployeeUpsertWithWhereUniqueWithoutMaritalStatusInput>;
    @Field(() => EmployeeCreateManyMaritalStatusInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof EmployeeCreateManyMaritalStatusInputEnvelope>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    set?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    disconnect?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    delete?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeUpdateWithWhereUniqueWithoutMaritalStatusInput], {nullable:true})
    update?: Array<EmployeeUpdateWithWhereUniqueWithoutMaritalStatusInput>;
    @Field(() => [EmployeeUpdateManyWithWhereWithoutMaritalStatusInput], {nullable:true})
    updateMany?: Array<EmployeeUpdateManyWithWhereWithoutMaritalStatusInput>;
    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    deleteMany?: Array<EmployeeScalarWhereInput>;
}

@InputType()
export class EmployeeUpdateManyWithoutNationalityInput {
    @Field(() => [EmployeeCreateWithoutNationalityInput], {nullable:true})
    create?: Array<EmployeeCreateWithoutNationalityInput>;
    @Field(() => [EmployeeCreateOrConnectWithoutNationalityInput], {nullable:true})
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutNationalityInput>;
    @Field(() => [EmployeeUpsertWithWhereUniqueWithoutNationalityInput], {nullable:true})
    upsert?: Array<EmployeeUpsertWithWhereUniqueWithoutNationalityInput>;
    @Field(() => EmployeeCreateManyNationalityInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof EmployeeCreateManyNationalityInputEnvelope>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    connect?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    set?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    disconnect?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    delete?: Array<EmployeeWhereUniqueInput>;
    @Field(() => [EmployeeUpdateWithWhereUniqueWithoutNationalityInput], {nullable:true})
    update?: Array<EmployeeUpdateWithWhereUniqueWithoutNationalityInput>;
    @Field(() => [EmployeeUpdateManyWithWhereWithoutNationalityInput], {nullable:true})
    updateMany?: Array<EmployeeUpdateManyWithWhereWithoutNationalityInput>;
    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    deleteMany?: Array<EmployeeScalarWhereInput>;
}

@InputType()
export class EmployeeUpdateWithWhereUniqueWithoutEmploymentNatureInput {
    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof EmployeeWhereUniqueInput>;
    @Field(() => EmployeeUpdateWithoutEmploymentNatureInput, {nullable:false})
    data!: InstanceType<typeof EmployeeUpdateWithoutEmploymentNatureInput>;
}

@InputType()
export class EmployeeUpdateWithWhereUniqueWithoutEmploymentTypeInput {
    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof EmployeeWhereUniqueInput>;
    @Field(() => EmployeeUpdateWithoutEmploymentTypeInput, {nullable:false})
    data!: InstanceType<typeof EmployeeUpdateWithoutEmploymentTypeInput>;
}

@InputType()
export class EmployeeUpdateWithWhereUniqueWithoutGenderInput {
    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof EmployeeWhereUniqueInput>;
    @Field(() => EmployeeUpdateWithoutGenderInput, {nullable:false})
    data!: InstanceType<typeof EmployeeUpdateWithoutGenderInput>;
}

@InputType()
export class EmployeeUpdateWithWhereUniqueWithoutMaritalStatusInput {
    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof EmployeeWhereUniqueInput>;
    @Field(() => EmployeeUpdateWithoutMaritalStatusInput, {nullable:false})
    data!: InstanceType<typeof EmployeeUpdateWithoutMaritalStatusInput>;
}

@InputType()
export class EmployeeUpdateWithWhereUniqueWithoutNationalityInput {
    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof EmployeeWhereUniqueInput>;
    @Field(() => EmployeeUpdateWithoutNationalityInput, {nullable:false})
    data!: InstanceType<typeof EmployeeUpdateWithoutNationalityInput>;
}

@InputType()
export class EmployeeUpdateWithoutEmploymentNatureInput {
    @Field(() => GraphQLJSON, {nullable:true})
    firstName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    lastName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    grandfatherName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfBirth?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    placeOfBirth?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryOfBirth?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    passportNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    Phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    emergencyContact?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    emergencyPhone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    numberOfChildren?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    employmentDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    probationDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    retirementDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => GenderUpdateOneWithoutEmployeesInput, {nullable:true})
    gender?: InstanceType<typeof GenderUpdateOneWithoutEmployeesInput>;
    @Field(() => NationalityUpdateOneWithoutEmployeesInput, {nullable:true})
    nationality?: InstanceType<typeof NationalityUpdateOneWithoutEmployeesInput>;
    @Field(() => MaritalStatusUpdateOneWithoutEmployeesInput, {nullable:true})
    maritalStatus?: InstanceType<typeof MaritalStatusUpdateOneWithoutEmployeesInput>;
    @Field(() => EmploymentTypeUpdateOneWithoutEmployeesInput, {nullable:true})
    employmentType?: InstanceType<typeof EmploymentTypeUpdateOneWithoutEmployeesInput>;
}

@InputType()
export class EmployeeUpdateWithoutEmploymentTypeInput {
    @Field(() => GraphQLJSON, {nullable:true})
    firstName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    lastName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    grandfatherName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfBirth?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    placeOfBirth?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryOfBirth?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    passportNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    Phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    emergencyContact?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    emergencyPhone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    numberOfChildren?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    employmentDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    probationDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    retirementDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => GenderUpdateOneWithoutEmployeesInput, {nullable:true})
    gender?: InstanceType<typeof GenderUpdateOneWithoutEmployeesInput>;
    @Field(() => NationalityUpdateOneWithoutEmployeesInput, {nullable:true})
    nationality?: InstanceType<typeof NationalityUpdateOneWithoutEmployeesInput>;
    @Field(() => MaritalStatusUpdateOneWithoutEmployeesInput, {nullable:true})
    maritalStatus?: InstanceType<typeof MaritalStatusUpdateOneWithoutEmployeesInput>;
    @Field(() => EmploymentNatureUpdateOneWithoutEmployeesInput, {nullable:true})
    employmentNature?: InstanceType<typeof EmploymentNatureUpdateOneWithoutEmployeesInput>;
}

@InputType()
export class EmployeeUpdateWithoutGenderInput {
    @Field(() => GraphQLJSON, {nullable:true})
    firstName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    lastName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    grandfatherName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfBirth?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    placeOfBirth?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryOfBirth?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    passportNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    Phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    emergencyContact?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    emergencyPhone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    numberOfChildren?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    employmentDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    probationDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    retirementDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NationalityUpdateOneWithoutEmployeesInput, {nullable:true})
    nationality?: InstanceType<typeof NationalityUpdateOneWithoutEmployeesInput>;
    @Field(() => MaritalStatusUpdateOneWithoutEmployeesInput, {nullable:true})
    maritalStatus?: InstanceType<typeof MaritalStatusUpdateOneWithoutEmployeesInput>;
    @Field(() => EmploymentTypeUpdateOneWithoutEmployeesInput, {nullable:true})
    employmentType?: InstanceType<typeof EmploymentTypeUpdateOneWithoutEmployeesInput>;
    @Field(() => EmploymentNatureUpdateOneWithoutEmployeesInput, {nullable:true})
    employmentNature?: InstanceType<typeof EmploymentNatureUpdateOneWithoutEmployeesInput>;
}

@InputType()
export class EmployeeUpdateWithoutMaritalStatusInput {
    @Field(() => GraphQLJSON, {nullable:true})
    firstName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    lastName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    grandfatherName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfBirth?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    placeOfBirth?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryOfBirth?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    passportNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    Phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    emergencyContact?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    emergencyPhone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    numberOfChildren?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    employmentDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    probationDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    retirementDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => GenderUpdateOneWithoutEmployeesInput, {nullable:true})
    gender?: InstanceType<typeof GenderUpdateOneWithoutEmployeesInput>;
    @Field(() => NationalityUpdateOneWithoutEmployeesInput, {nullable:true})
    nationality?: InstanceType<typeof NationalityUpdateOneWithoutEmployeesInput>;
    @Field(() => EmploymentTypeUpdateOneWithoutEmployeesInput, {nullable:true})
    employmentType?: InstanceType<typeof EmploymentTypeUpdateOneWithoutEmployeesInput>;
    @Field(() => EmploymentNatureUpdateOneWithoutEmployeesInput, {nullable:true})
    employmentNature?: InstanceType<typeof EmploymentNatureUpdateOneWithoutEmployeesInput>;
}

@InputType()
export class EmployeeUpdateWithoutNationalityInput {
    @Field(() => GraphQLJSON, {nullable:true})
    firstName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    lastName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    grandfatherName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfBirth?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    placeOfBirth?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryOfBirth?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    passportNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    Phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    emergencyContact?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    emergencyPhone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    numberOfChildren?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    employmentDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    probationDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    retirementDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => GenderUpdateOneWithoutEmployeesInput, {nullable:true})
    gender?: InstanceType<typeof GenderUpdateOneWithoutEmployeesInput>;
    @Field(() => MaritalStatusUpdateOneWithoutEmployeesInput, {nullable:true})
    maritalStatus?: InstanceType<typeof MaritalStatusUpdateOneWithoutEmployeesInput>;
    @Field(() => EmploymentTypeUpdateOneWithoutEmployeesInput, {nullable:true})
    employmentType?: InstanceType<typeof EmploymentTypeUpdateOneWithoutEmployeesInput>;
    @Field(() => EmploymentNatureUpdateOneWithoutEmployeesInput, {nullable:true})
    employmentNature?: InstanceType<typeof EmploymentNatureUpdateOneWithoutEmployeesInput>;
}

@InputType()
export class EmployeeUpdateInput {
    @Field(() => GraphQLJSON, {nullable:true})
    firstName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    lastName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    grandfatherName?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    dateOfBirth?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    placeOfBirth?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryOfBirth?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    idNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    passportNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    Phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    emergencyContact?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    emergencyPhone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    numberOfChildren?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    employmentDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    probationDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    retirementDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => GenderUpdateOneWithoutEmployeesInput, {nullable:true})
    gender?: InstanceType<typeof GenderUpdateOneWithoutEmployeesInput>;
    @Field(() => NationalityUpdateOneWithoutEmployeesInput, {nullable:true})
    nationality?: InstanceType<typeof NationalityUpdateOneWithoutEmployeesInput>;
    @Field(() => MaritalStatusUpdateOneWithoutEmployeesInput, {nullable:true})
    maritalStatus?: InstanceType<typeof MaritalStatusUpdateOneWithoutEmployeesInput>;
    @Field(() => EmploymentTypeUpdateOneWithoutEmployeesInput, {nullable:true})
    employmentType?: InstanceType<typeof EmploymentTypeUpdateOneWithoutEmployeesInput>;
    @Field(() => EmploymentNatureUpdateOneWithoutEmployeesInput, {nullable:true})
    employmentNature?: InstanceType<typeof EmploymentNatureUpdateOneWithoutEmployeesInput>;
}

@InputType()
export class EmployeeUpsertWithWhereUniqueWithoutEmploymentNatureInput {
    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof EmployeeWhereUniqueInput>;
    @Field(() => EmployeeUpdateWithoutEmploymentNatureInput, {nullable:false})
    update!: InstanceType<typeof EmployeeUpdateWithoutEmploymentNatureInput>;
    @Field(() => EmployeeCreateWithoutEmploymentNatureInput, {nullable:false})
    create!: InstanceType<typeof EmployeeCreateWithoutEmploymentNatureInput>;
}

@InputType()
export class EmployeeUpsertWithWhereUniqueWithoutEmploymentTypeInput {
    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof EmployeeWhereUniqueInput>;
    @Field(() => EmployeeUpdateWithoutEmploymentTypeInput, {nullable:false})
    update!: InstanceType<typeof EmployeeUpdateWithoutEmploymentTypeInput>;
    @Field(() => EmployeeCreateWithoutEmploymentTypeInput, {nullable:false})
    create!: InstanceType<typeof EmployeeCreateWithoutEmploymentTypeInput>;
}

@InputType()
export class EmployeeUpsertWithWhereUniqueWithoutGenderInput {
    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof EmployeeWhereUniqueInput>;
    @Field(() => EmployeeUpdateWithoutGenderInput, {nullable:false})
    update!: InstanceType<typeof EmployeeUpdateWithoutGenderInput>;
    @Field(() => EmployeeCreateWithoutGenderInput, {nullable:false})
    create!: InstanceType<typeof EmployeeCreateWithoutGenderInput>;
}

@InputType()
export class EmployeeUpsertWithWhereUniqueWithoutMaritalStatusInput {
    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof EmployeeWhereUniqueInput>;
    @Field(() => EmployeeUpdateWithoutMaritalStatusInput, {nullable:false})
    update!: InstanceType<typeof EmployeeUpdateWithoutMaritalStatusInput>;
    @Field(() => EmployeeCreateWithoutMaritalStatusInput, {nullable:false})
    create!: InstanceType<typeof EmployeeCreateWithoutMaritalStatusInput>;
}

@InputType()
export class EmployeeUpsertWithWhereUniqueWithoutNationalityInput {
    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof EmployeeWhereUniqueInput>;
    @Field(() => EmployeeUpdateWithoutNationalityInput, {nullable:false})
    update!: InstanceType<typeof EmployeeUpdateWithoutNationalityInput>;
    @Field(() => EmployeeCreateWithoutNationalityInput, {nullable:false})
    create!: InstanceType<typeof EmployeeCreateWithoutNationalityInput>;
}

@InputType()
export class EmployeeWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class EmployeeWhereInput {
    @Field(() => [EmployeeWhereInput], {nullable:true})
    AND?: Array<EmployeeWhereInput>;
    @Field(() => [EmployeeWhereInput], {nullable:true})
    OR?: Array<EmployeeWhereInput>;
    @Field(() => [EmployeeWhereInput], {nullable:true})
    NOT?: Array<EmployeeWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => JsonFilter, {nullable:true})
    firstName?: InstanceType<typeof JsonFilter>;
    @Field(() => JsonFilter, {nullable:true})
    lastName?: InstanceType<typeof JsonFilter>;
    @Field(() => JsonFilter, {nullable:true})
    grandfatherName?: InstanceType<typeof JsonFilter>;
    @Field(() => JsonNullableFilter, {nullable:true})
    locales?: InstanceType<typeof JsonNullableFilter>;
    @Field(() => GenderRelationFilter, {nullable:true})
    gender?: InstanceType<typeof GenderRelationFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    genderId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => NationalityRelationFilter, {nullable:true})
    nationality?: InstanceType<typeof NationalityRelationFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    nationalityId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => MaritalStatusRelationFilter, {nullable:true})
    maritalStatus?: InstanceType<typeof MaritalStatusRelationFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    maritalStatusId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => EmploymentTypeRelationFilter, {nullable:true})
    employmentType?: InstanceType<typeof EmploymentTypeRelationFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    employmentTypeId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => EmploymentNatureRelationFilter, {nullable:true})
    employmentNature?: InstanceType<typeof EmploymentNatureRelationFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    employmentNatureId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    dateOfBirth?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    placeOfBirth?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    countryOfBirth?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    idNumber?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    passportNumber?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    Phone?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    emergencyContact?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    emergencyPhone?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    numberOfChildren?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    employmentDate?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    probationDate?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    retirementDate?: InstanceType<typeof DateTimeFilter>;
    @Field(() => BoolFilter, {nullable:true})
    deleted?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class Employee {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => GraphQLJSON, {nullable:false})
    firstName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    lastName!: any;
    @Field(() => GraphQLJSON, {nullable:false})
    grandfatherName!: any;
    @Field(() => GraphQLJSON, {nullable:true})
    locales!: any | null;
    @Field(() => Gender, {nullable:true})
    gender?: InstanceType<typeof Gender> | null;
    @Field(() => Int, {nullable:true})
    genderId!: number | null;
    @Field(() => Nationality, {nullable:true})
    nationality?: InstanceType<typeof Nationality> | null;
    @Field(() => Int, {nullable:true})
    nationalityId!: number | null;
    @Field(() => MaritalStatus, {nullable:true})
    maritalStatus?: InstanceType<typeof MaritalStatus> | null;
    @Field(() => Int, {nullable:true})
    maritalStatusId!: number | null;
    @Field(() => EmploymentType, {nullable:true})
    employmentType?: InstanceType<typeof EmploymentType> | null;
    @Field(() => Int, {nullable:true})
    employmentTypeId!: number | null;
    @Field(() => EmploymentNature, {nullable:true})
    employmentNature?: InstanceType<typeof EmploymentNature> | null;
    @Field(() => Int, {nullable:true})
    employmentNatureId!: number | null;
    @Field(() => Date, {nullable:false})
    dateOfBirth!: Date;
    @Field(() => String, {nullable:false})
    placeOfBirth!: string;
    @Field(() => String, {nullable:false})
    countryOfBirth!: string;
    @Field(() => String, {nullable:false})
    idNumber!: string;
    @Field(() => String, {nullable:false})
    passportNumber!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    Phone!: string;
    @Field(() => String, {nullable:false})
    emergencyContact!: string;
    @Field(() => String, {nullable:false})
    emergencyPhone!: string;
    @Field(() => Int, {nullable:false})
    numberOfChildren!: number;
    @Field(() => Date, {nullable:false})
    employmentDate!: Date;
    @Field(() => Date, {nullable:false})
    probationDate!: Date;
    @Field(() => Date, {nullable:false})
    retirementDate!: Date;
    @Field(() => Boolean, {nullable:false,defaultValue:false})
    deleted!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}

@ArgsType()
export class FindFirstEmployeeArgs {
    @Field(() => EmployeeWhereInput, {nullable:true})
    where?: InstanceType<typeof EmployeeWhereInput>;
    @Field(() => [EmployeeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EmployeeOrderByWithRelationInput>;
    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof EmployeeWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [EmployeeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EmployeeScalarFieldEnum>;
}

@ArgsType()
export class FindManyEmployeeArgs {
    @Field(() => EmployeeWhereInput, {nullable:true})
    where?: InstanceType<typeof EmployeeWhereInput>;
    @Field(() => [EmployeeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EmployeeOrderByWithRelationInput>;
    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof EmployeeWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [EmployeeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EmployeeScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueEmployeeArgs {
    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof EmployeeWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyEmployeeArgs {
    @Field(() => EmployeeUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof EmployeeUpdateManyMutationInput>;
    @Field(() => EmployeeWhereInput, {nullable:true})
    where?: InstanceType<typeof EmployeeWhereInput>;
}

@ArgsType()
export class UpdateOneEmployeeArgs {
    @Field(() => EmployeeUpdateInput, {nullable:false})
    data!: InstanceType<typeof EmployeeUpdateInput>;
    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof EmployeeWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneEmployeeArgs {
    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof EmployeeWhereUniqueInput>;
    @Field(() => EmployeeCreateInput, {nullable:false})
    create!: InstanceType<typeof EmployeeCreateInput>;
    @Field(() => EmployeeUpdateInput, {nullable:false})
    update!: InstanceType<typeof EmployeeUpdateInput>;
}

@ObjectType()
export class AggregateEmploymentNature {
    @Field(() => EmploymentNatureCountAggregate, {nullable:true})
    _count?: InstanceType<typeof EmploymentNatureCountAggregate>;
    @Field(() => EmploymentNatureAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof EmploymentNatureAvgAggregate>;
    @Field(() => EmploymentNatureSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof EmploymentNatureSumAggregate>;
    @Field(() => EmploymentNatureMinAggregate, {nullable:true})
    _min?: InstanceType<typeof EmploymentNatureMinAggregate>;
    @Field(() => EmploymentNatureMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof EmploymentNatureMaxAggregate>;
}

@ArgsType()
export class CreateManyEmploymentNatureArgs {
    @Field(() => [EmploymentNatureCreateManyInput], {nullable:false})
    data!: Array<EmploymentNatureCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneEmploymentNatureArgs {
    @Field(() => EmploymentNatureCreateInput, {nullable:false})
    data!: InstanceType<typeof EmploymentNatureCreateInput>;
}

@ArgsType()
export class DeleteManyEmploymentNatureArgs {
    @Field(() => EmploymentNatureWhereInput, {nullable:true})
    where?: InstanceType<typeof EmploymentNatureWhereInput>;
}

@ArgsType()
export class DeleteOneEmploymentNatureArgs {
    @Field(() => EmploymentNatureWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof EmploymentNatureWhereUniqueInput>;
}

@ArgsType()
export class EmploymentNatureAggregateArgs {
    @Field(() => EmploymentNatureWhereInput, {nullable:true})
    where?: InstanceType<typeof EmploymentNatureWhereInput>;
    @Field(() => [EmploymentNatureOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EmploymentNatureOrderByWithRelationInput>;
    @Field(() => EmploymentNatureWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof EmploymentNatureWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => EmploymentNatureCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof EmploymentNatureCountAggregateInput>;
    @Field(() => EmploymentNatureAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof EmploymentNatureAvgAggregateInput>;
    @Field(() => EmploymentNatureSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof EmploymentNatureSumAggregateInput>;
    @Field(() => EmploymentNatureMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof EmploymentNatureMinAggregateInput>;
    @Field(() => EmploymentNatureMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof EmploymentNatureMaxAggregateInput>;
}

@InputType()
export class EmploymentNatureAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class EmploymentNatureAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class EmploymentNatureAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class EmploymentNatureCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    locales?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class EmploymentNatureCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    code!: number;
    @Field(() => Int, {nullable:false})
    locales!: number;
    @Field(() => Int, {nullable:false})
    deleted!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class EmploymentNatureCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class EmploymentNatureCount {
    @Field(() => Int, {nullable:false})
    employees!: number;
}

@InputType()
export class EmploymentNatureCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class EmploymentNatureCreateNestedOneWithoutEmployeesInput {
    @Field(() => EmploymentNatureCreateWithoutEmployeesInput, {nullable:true})
    create?: InstanceType<typeof EmploymentNatureCreateWithoutEmployeesInput>;
    @Field(() => EmploymentNatureCreateOrConnectWithoutEmployeesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof EmploymentNatureCreateOrConnectWithoutEmployeesInput>;
    @Field(() => EmploymentNatureWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof EmploymentNatureWhereUniqueInput>;
}

@InputType()
export class EmploymentNatureCreateOrConnectWithoutEmployeesInput {
    @Field(() => EmploymentNatureWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof EmploymentNatureWhereUniqueInput>;
    @Field(() => EmploymentNatureCreateWithoutEmployeesInput, {nullable:false})
    create!: InstanceType<typeof EmploymentNatureCreateWithoutEmployeesInput>;
}

@InputType()
export class EmploymentNatureCreateWithoutEmployeesInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class EmploymentNatureCreateInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => EmployeeCreateNestedManyWithoutEmploymentNatureInput, {nullable:true})
    employees?: InstanceType<typeof EmployeeCreateNestedManyWithoutEmploymentNatureInput>;
}

@ArgsType()
export class EmploymentNatureGroupByArgs {
    @Field(() => EmploymentNatureWhereInput, {nullable:true})
    where?: InstanceType<typeof EmploymentNatureWhereInput>;
    @Field(() => [EmploymentNatureOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<EmploymentNatureOrderByWithAggregationInput>;
    @Field(() => [EmploymentNatureScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof EmploymentNatureScalarFieldEnum>;
    @Field(() => EmploymentNatureScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof EmploymentNatureScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => EmploymentNatureCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof EmploymentNatureCountAggregateInput>;
    @Field(() => EmploymentNatureAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof EmploymentNatureAvgAggregateInput>;
    @Field(() => EmploymentNatureSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof EmploymentNatureSumAggregateInput>;
    @Field(() => EmploymentNatureMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof EmploymentNatureMinAggregateInput>;
    @Field(() => EmploymentNatureMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof EmploymentNatureMaxAggregateInput>;
}

@ObjectType()
export class EmploymentNatureGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:false})
    deleted!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => EmploymentNatureCountAggregate, {nullable:true})
    _count?: InstanceType<typeof EmploymentNatureCountAggregate>;
    @Field(() => EmploymentNatureAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof EmploymentNatureAvgAggregate>;
    @Field(() => EmploymentNatureSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof EmploymentNatureSumAggregate>;
    @Field(() => EmploymentNatureMinAggregate, {nullable:true})
    _min?: InstanceType<typeof EmploymentNatureMinAggregate>;
    @Field(() => EmploymentNatureMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof EmploymentNatureMaxAggregate>;
}

@InputType()
export class EmploymentNatureMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class EmploymentNatureMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    code?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class EmploymentNatureMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class EmploymentNatureMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class EmploymentNatureMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    code?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class EmploymentNatureMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class EmploymentNatureOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => EmploymentNatureCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof EmploymentNatureCountOrderByAggregateInput>;
    @Field(() => EmploymentNatureAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof EmploymentNatureAvgOrderByAggregateInput>;
    @Field(() => EmploymentNatureMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof EmploymentNatureMaxOrderByAggregateInput>;
    @Field(() => EmploymentNatureMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof EmploymentNatureMinOrderByAggregateInput>;
    @Field(() => EmploymentNatureSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof EmploymentNatureSumOrderByAggregateInput>;
}

@InputType()
export class EmploymentNatureOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => EmployeeOrderByRelationAggregateInput, {nullable:true})
    employees?: InstanceType<typeof EmployeeOrderByRelationAggregateInput>;
}

@InputType()
export class EmploymentNatureRelationFilter {
    @Field(() => EmploymentNatureWhereInput, {nullable:true})
    is?: InstanceType<typeof EmploymentNatureWhereInput>;
    @Field(() => EmploymentNatureWhereInput, {nullable:true})
    isNot?: InstanceType<typeof EmploymentNatureWhereInput>;
}

@InputType()
export class EmploymentNatureScalarWhereWithAggregatesInput {
    @Field(() => [EmploymentNatureScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EmploymentNatureScalarWhereWithAggregatesInput>;
    @Field(() => [EmploymentNatureScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EmploymentNatureScalarWhereWithAggregatesInput>;
    @Field(() => [EmploymentNatureScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EmploymentNatureScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    locales?: InstanceType<typeof JsonNullableWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    deleted?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class EmploymentNatureSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class EmploymentNatureSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class EmploymentNatureSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class EmploymentNatureUncheckedCreateWithoutEmployeesInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class EmploymentNatureUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => EmployeeUncheckedCreateNestedManyWithoutEmploymentNatureInput, {nullable:true})
    employees?: InstanceType<typeof EmployeeUncheckedCreateNestedManyWithoutEmploymentNatureInput>;
}

@InputType()
export class EmploymentNatureUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class EmploymentNatureUncheckedUpdateWithoutEmployeesInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class EmploymentNatureUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => EmployeeUncheckedUpdateManyWithoutEmploymentNatureInput, {nullable:true})
    employees?: InstanceType<typeof EmployeeUncheckedUpdateManyWithoutEmploymentNatureInput>;
}

@InputType()
export class EmploymentNatureUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class EmploymentNatureUpdateOneWithoutEmployeesInput {
    @Field(() => EmploymentNatureCreateWithoutEmployeesInput, {nullable:true})
    create?: InstanceType<typeof EmploymentNatureCreateWithoutEmployeesInput>;
    @Field(() => EmploymentNatureCreateOrConnectWithoutEmployeesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof EmploymentNatureCreateOrConnectWithoutEmployeesInput>;
    @Field(() => EmploymentNatureUpsertWithoutEmployeesInput, {nullable:true})
    upsert?: InstanceType<typeof EmploymentNatureUpsertWithoutEmployeesInput>;
    @Field(() => EmploymentNatureWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof EmploymentNatureWhereUniqueInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => EmploymentNatureUpdateWithoutEmployeesInput, {nullable:true})
    update?: InstanceType<typeof EmploymentNatureUpdateWithoutEmployeesInput>;
}

@InputType()
export class EmploymentNatureUpdateWithoutEmployeesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class EmploymentNatureUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => EmployeeUpdateManyWithoutEmploymentNatureInput, {nullable:true})
    employees?: InstanceType<typeof EmployeeUpdateManyWithoutEmploymentNatureInput>;
}

@InputType()
export class EmploymentNatureUpsertWithoutEmployeesInput {
    @Field(() => EmploymentNatureUpdateWithoutEmployeesInput, {nullable:false})
    update!: InstanceType<typeof EmploymentNatureUpdateWithoutEmployeesInput>;
    @Field(() => EmploymentNatureCreateWithoutEmployeesInput, {nullable:false})
    create!: InstanceType<typeof EmploymentNatureCreateWithoutEmployeesInput>;
}

@InputType()
export class EmploymentNatureWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    code?: string;
}

@InputType()
export class EmploymentNatureWhereInput {
    @Field(() => [EmploymentNatureWhereInput], {nullable:true})
    AND?: Array<EmploymentNatureWhereInput>;
    @Field(() => [EmploymentNatureWhereInput], {nullable:true})
    OR?: Array<EmploymentNatureWhereInput>;
    @Field(() => [EmploymentNatureWhereInput], {nullable:true})
    NOT?: Array<EmploymentNatureWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    code?: InstanceType<typeof StringFilter>;
    @Field(() => JsonNullableFilter, {nullable:true})
    locales?: InstanceType<typeof JsonNullableFilter>;
    @Field(() => BoolFilter, {nullable:true})
    deleted?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => EmployeeListRelationFilter, {nullable:true})
    employees?: InstanceType<typeof EmployeeListRelationFilter>;
}

@ObjectType()
export class EmploymentNature {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales!: any | null;
    @Field(() => Boolean, {nullable:false,defaultValue:false})
    deleted!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [Employee], {nullable:true})
    employees?: Array<Employee>;
    @Field(() => EmploymentNatureCount, {nullable:true})
    _count?: InstanceType<typeof EmploymentNatureCount> | null;
}

@ArgsType()
export class FindFirstEmploymentNatureArgs {
    @Field(() => EmploymentNatureWhereInput, {nullable:true})
    where?: InstanceType<typeof EmploymentNatureWhereInput>;
    @Field(() => [EmploymentNatureOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EmploymentNatureOrderByWithRelationInput>;
    @Field(() => EmploymentNatureWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof EmploymentNatureWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [EmploymentNatureScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EmploymentNatureScalarFieldEnum>;
}

@ArgsType()
export class FindManyEmploymentNatureArgs {
    @Field(() => EmploymentNatureWhereInput, {nullable:true})
    where?: InstanceType<typeof EmploymentNatureWhereInput>;
    @Field(() => [EmploymentNatureOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EmploymentNatureOrderByWithRelationInput>;
    @Field(() => EmploymentNatureWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof EmploymentNatureWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [EmploymentNatureScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EmploymentNatureScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueEmploymentNatureArgs {
    @Field(() => EmploymentNatureWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof EmploymentNatureWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyEmploymentNatureArgs {
    @Field(() => EmploymentNatureUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof EmploymentNatureUpdateManyMutationInput>;
    @Field(() => EmploymentNatureWhereInput, {nullable:true})
    where?: InstanceType<typeof EmploymentNatureWhereInput>;
}

@ArgsType()
export class UpdateOneEmploymentNatureArgs {
    @Field(() => EmploymentNatureUpdateInput, {nullable:false})
    data!: InstanceType<typeof EmploymentNatureUpdateInput>;
    @Field(() => EmploymentNatureWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof EmploymentNatureWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneEmploymentNatureArgs {
    @Field(() => EmploymentNatureWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof EmploymentNatureWhereUniqueInput>;
    @Field(() => EmploymentNatureCreateInput, {nullable:false})
    create!: InstanceType<typeof EmploymentNatureCreateInput>;
    @Field(() => EmploymentNatureUpdateInput, {nullable:false})
    update!: InstanceType<typeof EmploymentNatureUpdateInput>;
}

@ObjectType()
export class AggregateEmploymentType {
    @Field(() => EmploymentTypeCountAggregate, {nullable:true})
    _count?: InstanceType<typeof EmploymentTypeCountAggregate>;
    @Field(() => EmploymentTypeAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof EmploymentTypeAvgAggregate>;
    @Field(() => EmploymentTypeSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof EmploymentTypeSumAggregate>;
    @Field(() => EmploymentTypeMinAggregate, {nullable:true})
    _min?: InstanceType<typeof EmploymentTypeMinAggregate>;
    @Field(() => EmploymentTypeMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof EmploymentTypeMaxAggregate>;
}

@ArgsType()
export class CreateManyEmploymentTypeArgs {
    @Field(() => [EmploymentTypeCreateManyInput], {nullable:false})
    data!: Array<EmploymentTypeCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneEmploymentTypeArgs {
    @Field(() => EmploymentTypeCreateInput, {nullable:false})
    data!: InstanceType<typeof EmploymentTypeCreateInput>;
}

@ArgsType()
export class DeleteManyEmploymentTypeArgs {
    @Field(() => EmploymentTypeWhereInput, {nullable:true})
    where?: InstanceType<typeof EmploymentTypeWhereInput>;
}

@ArgsType()
export class DeleteOneEmploymentTypeArgs {
    @Field(() => EmploymentTypeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof EmploymentTypeWhereUniqueInput>;
}

@ArgsType()
export class EmploymentTypeAggregateArgs {
    @Field(() => EmploymentTypeWhereInput, {nullable:true})
    where?: InstanceType<typeof EmploymentTypeWhereInput>;
    @Field(() => [EmploymentTypeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EmploymentTypeOrderByWithRelationInput>;
    @Field(() => EmploymentTypeWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof EmploymentTypeWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => EmploymentTypeCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof EmploymentTypeCountAggregateInput>;
    @Field(() => EmploymentTypeAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof EmploymentTypeAvgAggregateInput>;
    @Field(() => EmploymentTypeSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof EmploymentTypeSumAggregateInput>;
    @Field(() => EmploymentTypeMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof EmploymentTypeMinAggregateInput>;
    @Field(() => EmploymentTypeMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof EmploymentTypeMaxAggregateInput>;
}

@InputType()
export class EmploymentTypeAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class EmploymentTypeAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class EmploymentTypeAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class EmploymentTypeCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    locales?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class EmploymentTypeCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    code!: number;
    @Field(() => Int, {nullable:false})
    locales!: number;
    @Field(() => Int, {nullable:false})
    deleted!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class EmploymentTypeCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class EmploymentTypeCount {
    @Field(() => Int, {nullable:false})
    employees!: number;
}

@InputType()
export class EmploymentTypeCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class EmploymentTypeCreateNestedOneWithoutEmployeesInput {
    @Field(() => EmploymentTypeCreateWithoutEmployeesInput, {nullable:true})
    create?: InstanceType<typeof EmploymentTypeCreateWithoutEmployeesInput>;
    @Field(() => EmploymentTypeCreateOrConnectWithoutEmployeesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof EmploymentTypeCreateOrConnectWithoutEmployeesInput>;
    @Field(() => EmploymentTypeWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof EmploymentTypeWhereUniqueInput>;
}

@InputType()
export class EmploymentTypeCreateOrConnectWithoutEmployeesInput {
    @Field(() => EmploymentTypeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof EmploymentTypeWhereUniqueInput>;
    @Field(() => EmploymentTypeCreateWithoutEmployeesInput, {nullable:false})
    create!: InstanceType<typeof EmploymentTypeCreateWithoutEmployeesInput>;
}

@InputType()
export class EmploymentTypeCreateWithoutEmployeesInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class EmploymentTypeCreateInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => EmployeeCreateNestedManyWithoutEmploymentTypeInput, {nullable:true})
    employees?: InstanceType<typeof EmployeeCreateNestedManyWithoutEmploymentTypeInput>;
}

@ArgsType()
export class EmploymentTypeGroupByArgs {
    @Field(() => EmploymentTypeWhereInput, {nullable:true})
    where?: InstanceType<typeof EmploymentTypeWhereInput>;
    @Field(() => [EmploymentTypeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<EmploymentTypeOrderByWithAggregationInput>;
    @Field(() => [EmploymentTypeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof EmploymentTypeScalarFieldEnum>;
    @Field(() => EmploymentTypeScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof EmploymentTypeScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => EmploymentTypeCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof EmploymentTypeCountAggregateInput>;
    @Field(() => EmploymentTypeAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof EmploymentTypeAvgAggregateInput>;
    @Field(() => EmploymentTypeSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof EmploymentTypeSumAggregateInput>;
    @Field(() => EmploymentTypeMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof EmploymentTypeMinAggregateInput>;
    @Field(() => EmploymentTypeMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof EmploymentTypeMaxAggregateInput>;
}

@ObjectType()
export class EmploymentTypeGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:false})
    deleted!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => EmploymentTypeCountAggregate, {nullable:true})
    _count?: InstanceType<typeof EmploymentTypeCountAggregate>;
    @Field(() => EmploymentTypeAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof EmploymentTypeAvgAggregate>;
    @Field(() => EmploymentTypeSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof EmploymentTypeSumAggregate>;
    @Field(() => EmploymentTypeMinAggregate, {nullable:true})
    _min?: InstanceType<typeof EmploymentTypeMinAggregate>;
    @Field(() => EmploymentTypeMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof EmploymentTypeMaxAggregate>;
}

@InputType()
export class EmploymentTypeMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class EmploymentTypeMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    code?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class EmploymentTypeMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class EmploymentTypeMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class EmploymentTypeMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    code?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class EmploymentTypeMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class EmploymentTypeOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => EmploymentTypeCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof EmploymentTypeCountOrderByAggregateInput>;
    @Field(() => EmploymentTypeAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof EmploymentTypeAvgOrderByAggregateInput>;
    @Field(() => EmploymentTypeMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof EmploymentTypeMaxOrderByAggregateInput>;
    @Field(() => EmploymentTypeMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof EmploymentTypeMinOrderByAggregateInput>;
    @Field(() => EmploymentTypeSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof EmploymentTypeSumOrderByAggregateInput>;
}

@InputType()
export class EmploymentTypeOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => EmployeeOrderByRelationAggregateInput, {nullable:true})
    employees?: InstanceType<typeof EmployeeOrderByRelationAggregateInput>;
}

@InputType()
export class EmploymentTypeRelationFilter {
    @Field(() => EmploymentTypeWhereInput, {nullable:true})
    is?: InstanceType<typeof EmploymentTypeWhereInput>;
    @Field(() => EmploymentTypeWhereInput, {nullable:true})
    isNot?: InstanceType<typeof EmploymentTypeWhereInput>;
}

@InputType()
export class EmploymentTypeScalarWhereWithAggregatesInput {
    @Field(() => [EmploymentTypeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EmploymentTypeScalarWhereWithAggregatesInput>;
    @Field(() => [EmploymentTypeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EmploymentTypeScalarWhereWithAggregatesInput>;
    @Field(() => [EmploymentTypeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EmploymentTypeScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    locales?: InstanceType<typeof JsonNullableWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    deleted?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class EmploymentTypeSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class EmploymentTypeSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class EmploymentTypeSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class EmploymentTypeUncheckedCreateWithoutEmployeesInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class EmploymentTypeUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => EmployeeUncheckedCreateNestedManyWithoutEmploymentTypeInput, {nullable:true})
    employees?: InstanceType<typeof EmployeeUncheckedCreateNestedManyWithoutEmploymentTypeInput>;
}

@InputType()
export class EmploymentTypeUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class EmploymentTypeUncheckedUpdateWithoutEmployeesInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class EmploymentTypeUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => EmployeeUncheckedUpdateManyWithoutEmploymentTypeInput, {nullable:true})
    employees?: InstanceType<typeof EmployeeUncheckedUpdateManyWithoutEmploymentTypeInput>;
}

@InputType()
export class EmploymentTypeUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class EmploymentTypeUpdateOneWithoutEmployeesInput {
    @Field(() => EmploymentTypeCreateWithoutEmployeesInput, {nullable:true})
    create?: InstanceType<typeof EmploymentTypeCreateWithoutEmployeesInput>;
    @Field(() => EmploymentTypeCreateOrConnectWithoutEmployeesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof EmploymentTypeCreateOrConnectWithoutEmployeesInput>;
    @Field(() => EmploymentTypeUpsertWithoutEmployeesInput, {nullable:true})
    upsert?: InstanceType<typeof EmploymentTypeUpsertWithoutEmployeesInput>;
    @Field(() => EmploymentTypeWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof EmploymentTypeWhereUniqueInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => EmploymentTypeUpdateWithoutEmployeesInput, {nullable:true})
    update?: InstanceType<typeof EmploymentTypeUpdateWithoutEmployeesInput>;
}

@InputType()
export class EmploymentTypeUpdateWithoutEmployeesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class EmploymentTypeUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => EmployeeUpdateManyWithoutEmploymentTypeInput, {nullable:true})
    employees?: InstanceType<typeof EmployeeUpdateManyWithoutEmploymentTypeInput>;
}

@InputType()
export class EmploymentTypeUpsertWithoutEmployeesInput {
    @Field(() => EmploymentTypeUpdateWithoutEmployeesInput, {nullable:false})
    update!: InstanceType<typeof EmploymentTypeUpdateWithoutEmployeesInput>;
    @Field(() => EmploymentTypeCreateWithoutEmployeesInput, {nullable:false})
    create!: InstanceType<typeof EmploymentTypeCreateWithoutEmployeesInput>;
}

@InputType()
export class EmploymentTypeWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    code?: string;
}

@InputType()
export class EmploymentTypeWhereInput {
    @Field(() => [EmploymentTypeWhereInput], {nullable:true})
    AND?: Array<EmploymentTypeWhereInput>;
    @Field(() => [EmploymentTypeWhereInput], {nullable:true})
    OR?: Array<EmploymentTypeWhereInput>;
    @Field(() => [EmploymentTypeWhereInput], {nullable:true})
    NOT?: Array<EmploymentTypeWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    code?: InstanceType<typeof StringFilter>;
    @Field(() => JsonNullableFilter, {nullable:true})
    locales?: InstanceType<typeof JsonNullableFilter>;
    @Field(() => BoolFilter, {nullable:true})
    deleted?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => EmployeeListRelationFilter, {nullable:true})
    employees?: InstanceType<typeof EmployeeListRelationFilter>;
}

@ObjectType()
export class EmploymentType {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales!: any | null;
    @Field(() => Boolean, {nullable:false,defaultValue:false})
    deleted!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [Employee], {nullable:true})
    employees?: Array<Employee>;
    @Field(() => EmploymentTypeCount, {nullable:true})
    _count?: InstanceType<typeof EmploymentTypeCount> | null;
}

@ArgsType()
export class FindFirstEmploymentTypeArgs {
    @Field(() => EmploymentTypeWhereInput, {nullable:true})
    where?: InstanceType<typeof EmploymentTypeWhereInput>;
    @Field(() => [EmploymentTypeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EmploymentTypeOrderByWithRelationInput>;
    @Field(() => EmploymentTypeWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof EmploymentTypeWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [EmploymentTypeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EmploymentTypeScalarFieldEnum>;
}

@ArgsType()
export class FindManyEmploymentTypeArgs {
    @Field(() => EmploymentTypeWhereInput, {nullable:true})
    where?: InstanceType<typeof EmploymentTypeWhereInput>;
    @Field(() => [EmploymentTypeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EmploymentTypeOrderByWithRelationInput>;
    @Field(() => EmploymentTypeWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof EmploymentTypeWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [EmploymentTypeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EmploymentTypeScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueEmploymentTypeArgs {
    @Field(() => EmploymentTypeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof EmploymentTypeWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyEmploymentTypeArgs {
    @Field(() => EmploymentTypeUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof EmploymentTypeUpdateManyMutationInput>;
    @Field(() => EmploymentTypeWhereInput, {nullable:true})
    where?: InstanceType<typeof EmploymentTypeWhereInput>;
}

@ArgsType()
export class UpdateOneEmploymentTypeArgs {
    @Field(() => EmploymentTypeUpdateInput, {nullable:false})
    data!: InstanceType<typeof EmploymentTypeUpdateInput>;
    @Field(() => EmploymentTypeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof EmploymentTypeWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneEmploymentTypeArgs {
    @Field(() => EmploymentTypeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof EmploymentTypeWhereUniqueInput>;
    @Field(() => EmploymentTypeCreateInput, {nullable:false})
    create!: InstanceType<typeof EmploymentTypeCreateInput>;
    @Field(() => EmploymentTypeUpdateInput, {nullable:false})
    update!: InstanceType<typeof EmploymentTypeUpdateInput>;
}

@ObjectType()
export class AggregateGender {
    @Field(() => GenderCountAggregate, {nullable:true})
    _count?: InstanceType<typeof GenderCountAggregate>;
    @Field(() => GenderAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof GenderAvgAggregate>;
    @Field(() => GenderSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof GenderSumAggregate>;
    @Field(() => GenderMinAggregate, {nullable:true})
    _min?: InstanceType<typeof GenderMinAggregate>;
    @Field(() => GenderMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof GenderMaxAggregate>;
}

@ArgsType()
export class CreateManyGenderArgs {
    @Field(() => [GenderCreateManyInput], {nullable:false})
    data!: Array<GenderCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneGenderArgs {
    @Field(() => GenderCreateInput, {nullable:false})
    data!: InstanceType<typeof GenderCreateInput>;
}

@ArgsType()
export class DeleteManyGenderArgs {
    @Field(() => GenderWhereInput, {nullable:true})
    where?: InstanceType<typeof GenderWhereInput>;
}

@ArgsType()
export class DeleteOneGenderArgs {
    @Field(() => GenderWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof GenderWhereUniqueInput>;
}

@ArgsType()
export class FindFirstGenderArgs {
    @Field(() => GenderWhereInput, {nullable:true})
    where?: InstanceType<typeof GenderWhereInput>;
    @Field(() => [GenderOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GenderOrderByWithRelationInput>;
    @Field(() => GenderWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof GenderWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [GenderScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GenderScalarFieldEnum>;
}

@ArgsType()
export class FindManyGenderArgs {
    @Field(() => GenderWhereInput, {nullable:true})
    where?: InstanceType<typeof GenderWhereInput>;
    @Field(() => [GenderOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GenderOrderByWithRelationInput>;
    @Field(() => GenderWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof GenderWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [GenderScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GenderScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueGenderArgs {
    @Field(() => GenderWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof GenderWhereUniqueInput>;
}

@ArgsType()
export class GenderAggregateArgs {
    @Field(() => GenderWhereInput, {nullable:true})
    where?: InstanceType<typeof GenderWhereInput>;
    @Field(() => [GenderOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GenderOrderByWithRelationInput>;
    @Field(() => GenderWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof GenderWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => GenderCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof GenderCountAggregateInput>;
    @Field(() => GenderAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof GenderAvgAggregateInput>;
    @Field(() => GenderSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof GenderSumAggregateInput>;
    @Field(() => GenderMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof GenderMinAggregateInput>;
    @Field(() => GenderMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof GenderMaxAggregateInput>;
}

@InputType()
export class GenderAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class GenderAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class GenderAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class GenderCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    locales?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class GenderCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    code!: number;
    @Field(() => Int, {nullable:false})
    locales!: number;
    @Field(() => Int, {nullable:false})
    deleted!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class GenderCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class GenderCount {
    @Field(() => Int, {nullable:false})
    positionClasses!: number;
    @Field(() => Int, {nullable:false})
    employees!: number;
}

@InputType()
export class GenderCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class GenderCreateNestedOneWithoutEmployeesInput {
    @Field(() => GenderCreateWithoutEmployeesInput, {nullable:true})
    create?: InstanceType<typeof GenderCreateWithoutEmployeesInput>;
    @Field(() => GenderCreateOrConnectWithoutEmployeesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof GenderCreateOrConnectWithoutEmployeesInput>;
    @Field(() => GenderWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof GenderWhereUniqueInput>;
}

@InputType()
export class GenderCreateNestedOneWithoutPositionClassesInput {
    @Field(() => GenderCreateWithoutPositionClassesInput, {nullable:true})
    create?: InstanceType<typeof GenderCreateWithoutPositionClassesInput>;
    @Field(() => GenderCreateOrConnectWithoutPositionClassesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof GenderCreateOrConnectWithoutPositionClassesInput>;
    @Field(() => GenderWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof GenderWhereUniqueInput>;
}

@InputType()
export class GenderCreateOrConnectWithoutEmployeesInput {
    @Field(() => GenderWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof GenderWhereUniqueInput>;
    @Field(() => GenderCreateWithoutEmployeesInput, {nullable:false})
    create!: InstanceType<typeof GenderCreateWithoutEmployeesInput>;
}

@InputType()
export class GenderCreateOrConnectWithoutPositionClassesInput {
    @Field(() => GenderWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof GenderWhereUniqueInput>;
    @Field(() => GenderCreateWithoutPositionClassesInput, {nullable:false})
    create!: InstanceType<typeof GenderCreateWithoutPositionClassesInput>;
}

@InputType()
export class GenderCreateWithoutEmployeesInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PositionClassCreateNestedManyWithoutGenderInput, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassCreateNestedManyWithoutGenderInput>;
}

@InputType()
export class GenderCreateWithoutPositionClassesInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => EmployeeCreateNestedManyWithoutGenderInput, {nullable:true})
    employees?: InstanceType<typeof EmployeeCreateNestedManyWithoutGenderInput>;
}

@InputType()
export class GenderCreateInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PositionClassCreateNestedManyWithoutGenderInput, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassCreateNestedManyWithoutGenderInput>;
    @Field(() => EmployeeCreateNestedManyWithoutGenderInput, {nullable:true})
    employees?: InstanceType<typeof EmployeeCreateNestedManyWithoutGenderInput>;
}

@ArgsType()
export class GenderGroupByArgs {
    @Field(() => GenderWhereInput, {nullable:true})
    where?: InstanceType<typeof GenderWhereInput>;
    @Field(() => [GenderOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<GenderOrderByWithAggregationInput>;
    @Field(() => [GenderScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof GenderScalarFieldEnum>;
    @Field(() => GenderScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof GenderScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => GenderCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof GenderCountAggregateInput>;
    @Field(() => GenderAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof GenderAvgAggregateInput>;
    @Field(() => GenderSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof GenderSumAggregateInput>;
    @Field(() => GenderMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof GenderMinAggregateInput>;
    @Field(() => GenderMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof GenderMaxAggregateInput>;
}

@ObjectType()
export class GenderGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:false})
    deleted!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => GenderCountAggregate, {nullable:true})
    _count?: InstanceType<typeof GenderCountAggregate>;
    @Field(() => GenderAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof GenderAvgAggregate>;
    @Field(() => GenderSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof GenderSumAggregate>;
    @Field(() => GenderMinAggregate, {nullable:true})
    _min?: InstanceType<typeof GenderMinAggregate>;
    @Field(() => GenderMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof GenderMaxAggregate>;
}

@InputType()
export class GenderMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class GenderMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    code?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class GenderMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class GenderMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class GenderMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    code?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class GenderMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class GenderOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => GenderCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof GenderCountOrderByAggregateInput>;
    @Field(() => GenderAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof GenderAvgOrderByAggregateInput>;
    @Field(() => GenderMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof GenderMaxOrderByAggregateInput>;
    @Field(() => GenderMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof GenderMinOrderByAggregateInput>;
    @Field(() => GenderSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof GenderSumOrderByAggregateInput>;
}

@InputType()
export class GenderOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => PositionClassOrderByRelationAggregateInput, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassOrderByRelationAggregateInput>;
    @Field(() => EmployeeOrderByRelationAggregateInput, {nullable:true})
    employees?: InstanceType<typeof EmployeeOrderByRelationAggregateInput>;
}

@InputType()
export class GenderRelationFilter {
    @Field(() => GenderWhereInput, {nullable:true})
    is?: InstanceType<typeof GenderWhereInput>;
    @Field(() => GenderWhereInput, {nullable:true})
    isNot?: InstanceType<typeof GenderWhereInput>;
}

@InputType()
export class GenderScalarWhereWithAggregatesInput {
    @Field(() => [GenderScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<GenderScalarWhereWithAggregatesInput>;
    @Field(() => [GenderScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<GenderScalarWhereWithAggregatesInput>;
    @Field(() => [GenderScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<GenderScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    locales?: InstanceType<typeof JsonNullableWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    deleted?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class GenderSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class GenderSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class GenderSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class GenderUncheckedCreateWithoutEmployeesInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PositionClassUncheckedCreateNestedManyWithoutGenderInput, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassUncheckedCreateNestedManyWithoutGenderInput>;
}

@InputType()
export class GenderUncheckedCreateWithoutPositionClassesInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => EmployeeUncheckedCreateNestedManyWithoutGenderInput, {nullable:true})
    employees?: InstanceType<typeof EmployeeUncheckedCreateNestedManyWithoutGenderInput>;
}

@InputType()
export class GenderUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PositionClassUncheckedCreateNestedManyWithoutGenderInput, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassUncheckedCreateNestedManyWithoutGenderInput>;
    @Field(() => EmployeeUncheckedCreateNestedManyWithoutGenderInput, {nullable:true})
    employees?: InstanceType<typeof EmployeeUncheckedCreateNestedManyWithoutGenderInput>;
}

@InputType()
export class GenderUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class GenderUncheckedUpdateWithoutEmployeesInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PositionClassUncheckedUpdateManyWithoutGenderInput, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassUncheckedUpdateManyWithoutGenderInput>;
}

@InputType()
export class GenderUncheckedUpdateWithoutPositionClassesInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => EmployeeUncheckedUpdateManyWithoutGenderInput, {nullable:true})
    employees?: InstanceType<typeof EmployeeUncheckedUpdateManyWithoutGenderInput>;
}

@InputType()
export class GenderUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PositionClassUncheckedUpdateManyWithoutGenderInput, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassUncheckedUpdateManyWithoutGenderInput>;
    @Field(() => EmployeeUncheckedUpdateManyWithoutGenderInput, {nullable:true})
    employees?: InstanceType<typeof EmployeeUncheckedUpdateManyWithoutGenderInput>;
}

@InputType()
export class GenderUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class GenderUpdateOneWithoutEmployeesInput {
    @Field(() => GenderCreateWithoutEmployeesInput, {nullable:true})
    create?: InstanceType<typeof GenderCreateWithoutEmployeesInput>;
    @Field(() => GenderCreateOrConnectWithoutEmployeesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof GenderCreateOrConnectWithoutEmployeesInput>;
    @Field(() => GenderUpsertWithoutEmployeesInput, {nullable:true})
    upsert?: InstanceType<typeof GenderUpsertWithoutEmployeesInput>;
    @Field(() => GenderWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof GenderWhereUniqueInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => GenderUpdateWithoutEmployeesInput, {nullable:true})
    update?: InstanceType<typeof GenderUpdateWithoutEmployeesInput>;
}

@InputType()
export class GenderUpdateOneWithoutPositionClassesInput {
    @Field(() => GenderCreateWithoutPositionClassesInput, {nullable:true})
    create?: InstanceType<typeof GenderCreateWithoutPositionClassesInput>;
    @Field(() => GenderCreateOrConnectWithoutPositionClassesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof GenderCreateOrConnectWithoutPositionClassesInput>;
    @Field(() => GenderUpsertWithoutPositionClassesInput, {nullable:true})
    upsert?: InstanceType<typeof GenderUpsertWithoutPositionClassesInput>;
    @Field(() => GenderWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof GenderWhereUniqueInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => GenderUpdateWithoutPositionClassesInput, {nullable:true})
    update?: InstanceType<typeof GenderUpdateWithoutPositionClassesInput>;
}

@InputType()
export class GenderUpdateWithoutEmployeesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PositionClassUpdateManyWithoutGenderInput, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassUpdateManyWithoutGenderInput>;
}

@InputType()
export class GenderUpdateWithoutPositionClassesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => EmployeeUpdateManyWithoutGenderInput, {nullable:true})
    employees?: InstanceType<typeof EmployeeUpdateManyWithoutGenderInput>;
}

@InputType()
export class GenderUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PositionClassUpdateManyWithoutGenderInput, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassUpdateManyWithoutGenderInput>;
    @Field(() => EmployeeUpdateManyWithoutGenderInput, {nullable:true})
    employees?: InstanceType<typeof EmployeeUpdateManyWithoutGenderInput>;
}

@InputType()
export class GenderUpsertWithoutEmployeesInput {
    @Field(() => GenderUpdateWithoutEmployeesInput, {nullable:false})
    update!: InstanceType<typeof GenderUpdateWithoutEmployeesInput>;
    @Field(() => GenderCreateWithoutEmployeesInput, {nullable:false})
    create!: InstanceType<typeof GenderCreateWithoutEmployeesInput>;
}

@InputType()
export class GenderUpsertWithoutPositionClassesInput {
    @Field(() => GenderUpdateWithoutPositionClassesInput, {nullable:false})
    update!: InstanceType<typeof GenderUpdateWithoutPositionClassesInput>;
    @Field(() => GenderCreateWithoutPositionClassesInput, {nullable:false})
    create!: InstanceType<typeof GenderCreateWithoutPositionClassesInput>;
}

@InputType()
export class GenderWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    code?: string;
}

@InputType()
export class GenderWhereInput {
    @Field(() => [GenderWhereInput], {nullable:true})
    AND?: Array<GenderWhereInput>;
    @Field(() => [GenderWhereInput], {nullable:true})
    OR?: Array<GenderWhereInput>;
    @Field(() => [GenderWhereInput], {nullable:true})
    NOT?: Array<GenderWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    code?: InstanceType<typeof StringFilter>;
    @Field(() => JsonNullableFilter, {nullable:true})
    locales?: InstanceType<typeof JsonNullableFilter>;
    @Field(() => BoolFilter, {nullable:true})
    deleted?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => PositionClassListRelationFilter, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassListRelationFilter>;
    @Field(() => EmployeeListRelationFilter, {nullable:true})
    employees?: InstanceType<typeof EmployeeListRelationFilter>;
}

@ObjectType()
export class Gender {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales!: any | null;
    @Field(() => Boolean, {nullable:false,defaultValue:false})
    deleted!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [PositionClass], {nullable:true})
    positionClasses?: Array<PositionClass>;
    @Field(() => [Employee], {nullable:true})
    employees?: Array<Employee>;
    @Field(() => GenderCount, {nullable:true})
    _count?: InstanceType<typeof GenderCount> | null;
}

@ArgsType()
export class UpdateManyGenderArgs {
    @Field(() => GenderUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof GenderUpdateManyMutationInput>;
    @Field(() => GenderWhereInput, {nullable:true})
    where?: InstanceType<typeof GenderWhereInput>;
}

@ArgsType()
export class UpdateOneGenderArgs {
    @Field(() => GenderUpdateInput, {nullable:false})
    data!: InstanceType<typeof GenderUpdateInput>;
    @Field(() => GenderWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof GenderWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneGenderArgs {
    @Field(() => GenderWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof GenderWhereUniqueInput>;
    @Field(() => GenderCreateInput, {nullable:false})
    create!: InstanceType<typeof GenderCreateInput>;
    @Field(() => GenderUpdateInput, {nullable:false})
    update!: InstanceType<typeof GenderUpdateInput>;
}

@ObjectType()
export class AggregateJobGrade {
    @Field(() => JobGradeCountAggregate, {nullable:true})
    _count?: InstanceType<typeof JobGradeCountAggregate>;
    @Field(() => JobGradeAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof JobGradeAvgAggregate>;
    @Field(() => JobGradeSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof JobGradeSumAggregate>;
    @Field(() => JobGradeMinAggregate, {nullable:true})
    _min?: InstanceType<typeof JobGradeMinAggregate>;
    @Field(() => JobGradeMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof JobGradeMaxAggregate>;
}

@ArgsType()
export class CreateManyJobGradeArgs {
    @Field(() => [JobGradeCreateManyInput], {nullable:false})
    data!: Array<JobGradeCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneJobGradeArgs {
    @Field(() => JobGradeCreateInput, {nullable:false})
    data!: InstanceType<typeof JobGradeCreateInput>;
}

@ArgsType()
export class DeleteManyJobGradeArgs {
    @Field(() => JobGradeWhereInput, {nullable:true})
    where?: InstanceType<typeof JobGradeWhereInput>;
}

@ArgsType()
export class DeleteOneJobGradeArgs {
    @Field(() => JobGradeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof JobGradeWhereUniqueInput>;
}

@ArgsType()
export class FindFirstJobGradeArgs {
    @Field(() => JobGradeWhereInput, {nullable:true})
    where?: InstanceType<typeof JobGradeWhereInput>;
    @Field(() => [JobGradeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<JobGradeOrderByWithRelationInput>;
    @Field(() => JobGradeWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof JobGradeWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [JobGradeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof JobGradeScalarFieldEnum>;
}

@ArgsType()
export class FindManyJobGradeArgs {
    @Field(() => JobGradeWhereInput, {nullable:true})
    where?: InstanceType<typeof JobGradeWhereInput>;
    @Field(() => [JobGradeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<JobGradeOrderByWithRelationInput>;
    @Field(() => JobGradeWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof JobGradeWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [JobGradeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof JobGradeScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueJobGradeArgs {
    @Field(() => JobGradeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof JobGradeWhereUniqueInput>;
}

@ArgsType()
export class JobGradeAggregateArgs {
    @Field(() => JobGradeWhereInput, {nullable:true})
    where?: InstanceType<typeof JobGradeWhereInput>;
    @Field(() => [JobGradeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<JobGradeOrderByWithRelationInput>;
    @Field(() => JobGradeWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof JobGradeWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => JobGradeCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof JobGradeCountAggregateInput>;
    @Field(() => JobGradeAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof JobGradeAvgAggregateInput>;
    @Field(() => JobGradeSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof JobGradeSumAggregateInput>;
    @Field(() => JobGradeMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof JobGradeMinAggregateInput>;
    @Field(() => JobGradeMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof JobGradeMaxAggregateInput>;
}

@InputType()
export class JobGradeAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class JobGradeAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class JobGradeAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class JobGradeCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    locales?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class JobGradeCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    code!: number;
    @Field(() => Int, {nullable:false})
    locales!: number;
    @Field(() => Int, {nullable:false})
    deleted!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class JobGradeCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class JobGradeCount {
    @Field(() => Int, {nullable:false})
    salaryScales!: number;
}

@InputType()
export class JobGradeCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class JobGradeCreateNestedOneWithoutSalaryScalesInput {
    @Field(() => JobGradeCreateWithoutSalaryScalesInput, {nullable:true})
    create?: InstanceType<typeof JobGradeCreateWithoutSalaryScalesInput>;
    @Field(() => JobGradeCreateOrConnectWithoutSalaryScalesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof JobGradeCreateOrConnectWithoutSalaryScalesInput>;
    @Field(() => JobGradeWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof JobGradeWhereUniqueInput>;
}

@InputType()
export class JobGradeCreateOrConnectWithoutSalaryScalesInput {
    @Field(() => JobGradeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof JobGradeWhereUniqueInput>;
    @Field(() => JobGradeCreateWithoutSalaryScalesInput, {nullable:false})
    create!: InstanceType<typeof JobGradeCreateWithoutSalaryScalesInput>;
}

@InputType()
export class JobGradeCreateWithoutSalaryScalesInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class JobGradeCreateInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => SalaryScaleCreateNestedManyWithoutJobGradeInput, {nullable:true})
    salaryScales?: InstanceType<typeof SalaryScaleCreateNestedManyWithoutJobGradeInput>;
}

@ArgsType()
export class JobGradeGroupByArgs {
    @Field(() => JobGradeWhereInput, {nullable:true})
    where?: InstanceType<typeof JobGradeWhereInput>;
    @Field(() => [JobGradeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<JobGradeOrderByWithAggregationInput>;
    @Field(() => [JobGradeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof JobGradeScalarFieldEnum>;
    @Field(() => JobGradeScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof JobGradeScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => JobGradeCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof JobGradeCountAggregateInput>;
    @Field(() => JobGradeAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof JobGradeAvgAggregateInput>;
    @Field(() => JobGradeSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof JobGradeSumAggregateInput>;
    @Field(() => JobGradeMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof JobGradeMinAggregateInput>;
    @Field(() => JobGradeMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof JobGradeMaxAggregateInput>;
}

@ObjectType()
export class JobGradeGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:false})
    deleted!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => JobGradeCountAggregate, {nullable:true})
    _count?: InstanceType<typeof JobGradeCountAggregate>;
    @Field(() => JobGradeAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof JobGradeAvgAggregate>;
    @Field(() => JobGradeSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof JobGradeSumAggregate>;
    @Field(() => JobGradeMinAggregate, {nullable:true})
    _min?: InstanceType<typeof JobGradeMinAggregate>;
    @Field(() => JobGradeMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof JobGradeMaxAggregate>;
}

@InputType()
export class JobGradeMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class JobGradeMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    code?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class JobGradeMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class JobGradeMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class JobGradeMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    code?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class JobGradeMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class JobGradeOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => JobGradeCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof JobGradeCountOrderByAggregateInput>;
    @Field(() => JobGradeAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof JobGradeAvgOrderByAggregateInput>;
    @Field(() => JobGradeMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof JobGradeMaxOrderByAggregateInput>;
    @Field(() => JobGradeMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof JobGradeMinOrderByAggregateInput>;
    @Field(() => JobGradeSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof JobGradeSumOrderByAggregateInput>;
}

@InputType()
export class JobGradeOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SalaryScaleOrderByRelationAggregateInput, {nullable:true})
    salaryScales?: InstanceType<typeof SalaryScaleOrderByRelationAggregateInput>;
}

@InputType()
export class JobGradeRelationFilter {
    @Field(() => JobGradeWhereInput, {nullable:true})
    is?: InstanceType<typeof JobGradeWhereInput>;
    @Field(() => JobGradeWhereInput, {nullable:true})
    isNot?: InstanceType<typeof JobGradeWhereInput>;
}

@InputType()
export class JobGradeScalarWhereWithAggregatesInput {
    @Field(() => [JobGradeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<JobGradeScalarWhereWithAggregatesInput>;
    @Field(() => [JobGradeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<JobGradeScalarWhereWithAggregatesInput>;
    @Field(() => [JobGradeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<JobGradeScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    locales?: InstanceType<typeof JsonNullableWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    deleted?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class JobGradeSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class JobGradeSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class JobGradeSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class JobGradeUncheckedCreateWithoutSalaryScalesInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class JobGradeUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => SalaryScaleUncheckedCreateNestedManyWithoutJobGradeInput, {nullable:true})
    salaryScales?: InstanceType<typeof SalaryScaleUncheckedCreateNestedManyWithoutJobGradeInput>;
}

@InputType()
export class JobGradeUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class JobGradeUncheckedUpdateWithoutSalaryScalesInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class JobGradeUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => SalaryScaleUncheckedUpdateManyWithoutJobGradeInput, {nullable:true})
    salaryScales?: InstanceType<typeof SalaryScaleUncheckedUpdateManyWithoutJobGradeInput>;
}

@InputType()
export class JobGradeUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class JobGradeUpdateOneWithoutSalaryScalesInput {
    @Field(() => JobGradeCreateWithoutSalaryScalesInput, {nullable:true})
    create?: InstanceType<typeof JobGradeCreateWithoutSalaryScalesInput>;
    @Field(() => JobGradeCreateOrConnectWithoutSalaryScalesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof JobGradeCreateOrConnectWithoutSalaryScalesInput>;
    @Field(() => JobGradeUpsertWithoutSalaryScalesInput, {nullable:true})
    upsert?: InstanceType<typeof JobGradeUpsertWithoutSalaryScalesInput>;
    @Field(() => JobGradeWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof JobGradeWhereUniqueInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => JobGradeUpdateWithoutSalaryScalesInput, {nullable:true})
    update?: InstanceType<typeof JobGradeUpdateWithoutSalaryScalesInput>;
}

@InputType()
export class JobGradeUpdateWithoutSalaryScalesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class JobGradeUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => SalaryScaleUpdateManyWithoutJobGradeInput, {nullable:true})
    salaryScales?: InstanceType<typeof SalaryScaleUpdateManyWithoutJobGradeInput>;
}

@InputType()
export class JobGradeUpsertWithoutSalaryScalesInput {
    @Field(() => JobGradeUpdateWithoutSalaryScalesInput, {nullable:false})
    update!: InstanceType<typeof JobGradeUpdateWithoutSalaryScalesInput>;
    @Field(() => JobGradeCreateWithoutSalaryScalesInput, {nullable:false})
    create!: InstanceType<typeof JobGradeCreateWithoutSalaryScalesInput>;
}

@InputType()
export class JobGradeWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    code?: string;
}

@InputType()
export class JobGradeWhereInput {
    @Field(() => [JobGradeWhereInput], {nullable:true})
    AND?: Array<JobGradeWhereInput>;
    @Field(() => [JobGradeWhereInput], {nullable:true})
    OR?: Array<JobGradeWhereInput>;
    @Field(() => [JobGradeWhereInput], {nullable:true})
    NOT?: Array<JobGradeWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    code?: InstanceType<typeof StringFilter>;
    @Field(() => JsonNullableFilter, {nullable:true})
    locales?: InstanceType<typeof JsonNullableFilter>;
    @Field(() => BoolFilter, {nullable:true})
    deleted?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => SalaryScaleListRelationFilter, {nullable:true})
    salaryScales?: InstanceType<typeof SalaryScaleListRelationFilter>;
}

@ObjectType()
export class JobGrade {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales!: any | null;
    @Field(() => Boolean, {nullable:false,defaultValue:false})
    deleted!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [SalaryScale], {nullable:true})
    salaryScales?: Array<SalaryScale>;
    @Field(() => JobGradeCount, {nullable:true})
    _count?: InstanceType<typeof JobGradeCount> | null;
}

@ArgsType()
export class UpdateManyJobGradeArgs {
    @Field(() => JobGradeUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof JobGradeUpdateManyMutationInput>;
    @Field(() => JobGradeWhereInput, {nullable:true})
    where?: InstanceType<typeof JobGradeWhereInput>;
}

@ArgsType()
export class UpdateOneJobGradeArgs {
    @Field(() => JobGradeUpdateInput, {nullable:false})
    data!: InstanceType<typeof JobGradeUpdateInput>;
    @Field(() => JobGradeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof JobGradeWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneJobGradeArgs {
    @Field(() => JobGradeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof JobGradeWhereUniqueInput>;
    @Field(() => JobGradeCreateInput, {nullable:false})
    create!: InstanceType<typeof JobGradeCreateInput>;
    @Field(() => JobGradeUpdateInput, {nullable:false})
    update!: InstanceType<typeof JobGradeUpdateInput>;
}

@ObjectType()
export class AggregateJobStep {
    @Field(() => JobStepCountAggregate, {nullable:true})
    _count?: InstanceType<typeof JobStepCountAggregate>;
    @Field(() => JobStepAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof JobStepAvgAggregate>;
    @Field(() => JobStepSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof JobStepSumAggregate>;
    @Field(() => JobStepMinAggregate, {nullable:true})
    _min?: InstanceType<typeof JobStepMinAggregate>;
    @Field(() => JobStepMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof JobStepMaxAggregate>;
}

@ArgsType()
export class CreateManyJobStepArgs {
    @Field(() => [JobStepCreateManyInput], {nullable:false})
    data!: Array<JobStepCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneJobStepArgs {
    @Field(() => JobStepCreateInput, {nullable:false})
    data!: InstanceType<typeof JobStepCreateInput>;
}

@ArgsType()
export class DeleteManyJobStepArgs {
    @Field(() => JobStepWhereInput, {nullable:true})
    where?: InstanceType<typeof JobStepWhereInput>;
}

@ArgsType()
export class DeleteOneJobStepArgs {
    @Field(() => JobStepWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof JobStepWhereUniqueInput>;
}

@ArgsType()
export class FindFirstJobStepArgs {
    @Field(() => JobStepWhereInput, {nullable:true})
    where?: InstanceType<typeof JobStepWhereInput>;
    @Field(() => [JobStepOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<JobStepOrderByWithRelationInput>;
    @Field(() => JobStepWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof JobStepWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [JobStepScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof JobStepScalarFieldEnum>;
}

@ArgsType()
export class FindManyJobStepArgs {
    @Field(() => JobStepWhereInput, {nullable:true})
    where?: InstanceType<typeof JobStepWhereInput>;
    @Field(() => [JobStepOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<JobStepOrderByWithRelationInput>;
    @Field(() => JobStepWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof JobStepWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [JobStepScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof JobStepScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueJobStepArgs {
    @Field(() => JobStepWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof JobStepWhereUniqueInput>;
}

@ArgsType()
export class JobStepAggregateArgs {
    @Field(() => JobStepWhereInput, {nullable:true})
    where?: InstanceType<typeof JobStepWhereInput>;
    @Field(() => [JobStepOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<JobStepOrderByWithRelationInput>;
    @Field(() => JobStepWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof JobStepWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => JobStepCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof JobStepCountAggregateInput>;
    @Field(() => JobStepAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof JobStepAvgAggregateInput>;
    @Field(() => JobStepSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof JobStepSumAggregateInput>;
    @Field(() => JobStepMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof JobStepMinAggregateInput>;
    @Field(() => JobStepMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof JobStepMaxAggregateInput>;
}

@InputType()
export class JobStepAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class JobStepAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class JobStepAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class JobStepCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    locales?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class JobStepCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    code!: number;
    @Field(() => Int, {nullable:false})
    locales!: number;
    @Field(() => Int, {nullable:false})
    deleted!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class JobStepCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class JobStepCount {
    @Field(() => Int, {nullable:false})
    salaryScales!: number;
}

@InputType()
export class JobStepCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class JobStepCreateNestedOneWithoutSalaryScalesInput {
    @Field(() => JobStepCreateWithoutSalaryScalesInput, {nullable:true})
    create?: InstanceType<typeof JobStepCreateWithoutSalaryScalesInput>;
    @Field(() => JobStepCreateOrConnectWithoutSalaryScalesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof JobStepCreateOrConnectWithoutSalaryScalesInput>;
    @Field(() => JobStepWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof JobStepWhereUniqueInput>;
}

@InputType()
export class JobStepCreateOrConnectWithoutSalaryScalesInput {
    @Field(() => JobStepWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof JobStepWhereUniqueInput>;
    @Field(() => JobStepCreateWithoutSalaryScalesInput, {nullable:false})
    create!: InstanceType<typeof JobStepCreateWithoutSalaryScalesInput>;
}

@InputType()
export class JobStepCreateWithoutSalaryScalesInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class JobStepCreateInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => SalaryScaleCreateNestedManyWithoutJobStepInput, {nullable:true})
    salaryScales?: InstanceType<typeof SalaryScaleCreateNestedManyWithoutJobStepInput>;
}

@ArgsType()
export class JobStepGroupByArgs {
    @Field(() => JobStepWhereInput, {nullable:true})
    where?: InstanceType<typeof JobStepWhereInput>;
    @Field(() => [JobStepOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<JobStepOrderByWithAggregationInput>;
    @Field(() => [JobStepScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof JobStepScalarFieldEnum>;
    @Field(() => JobStepScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof JobStepScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => JobStepCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof JobStepCountAggregateInput>;
    @Field(() => JobStepAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof JobStepAvgAggregateInput>;
    @Field(() => JobStepSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof JobStepSumAggregateInput>;
    @Field(() => JobStepMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof JobStepMinAggregateInput>;
    @Field(() => JobStepMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof JobStepMaxAggregateInput>;
}

@ObjectType()
export class JobStepGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:false})
    deleted!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => JobStepCountAggregate, {nullable:true})
    _count?: InstanceType<typeof JobStepCountAggregate>;
    @Field(() => JobStepAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof JobStepAvgAggregate>;
    @Field(() => JobStepSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof JobStepSumAggregate>;
    @Field(() => JobStepMinAggregate, {nullable:true})
    _min?: InstanceType<typeof JobStepMinAggregate>;
    @Field(() => JobStepMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof JobStepMaxAggregate>;
}

@InputType()
export class JobStepMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class JobStepMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    code?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class JobStepMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class JobStepMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class JobStepMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    code?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class JobStepMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class JobStepOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => JobStepCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof JobStepCountOrderByAggregateInput>;
    @Field(() => JobStepAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof JobStepAvgOrderByAggregateInput>;
    @Field(() => JobStepMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof JobStepMaxOrderByAggregateInput>;
    @Field(() => JobStepMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof JobStepMinOrderByAggregateInput>;
    @Field(() => JobStepSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof JobStepSumOrderByAggregateInput>;
}

@InputType()
export class JobStepOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SalaryScaleOrderByRelationAggregateInput, {nullable:true})
    salaryScales?: InstanceType<typeof SalaryScaleOrderByRelationAggregateInput>;
}

@InputType()
export class JobStepRelationFilter {
    @Field(() => JobStepWhereInput, {nullable:true})
    is?: InstanceType<typeof JobStepWhereInput>;
    @Field(() => JobStepWhereInput, {nullable:true})
    isNot?: InstanceType<typeof JobStepWhereInput>;
}

@InputType()
export class JobStepScalarWhereWithAggregatesInput {
    @Field(() => [JobStepScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<JobStepScalarWhereWithAggregatesInput>;
    @Field(() => [JobStepScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<JobStepScalarWhereWithAggregatesInput>;
    @Field(() => [JobStepScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<JobStepScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    locales?: InstanceType<typeof JsonNullableWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    deleted?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class JobStepSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class JobStepSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class JobStepSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class JobStepUncheckedCreateWithoutSalaryScalesInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class JobStepUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => SalaryScaleUncheckedCreateNestedManyWithoutJobStepInput, {nullable:true})
    salaryScales?: InstanceType<typeof SalaryScaleUncheckedCreateNestedManyWithoutJobStepInput>;
}

@InputType()
export class JobStepUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class JobStepUncheckedUpdateWithoutSalaryScalesInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class JobStepUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => SalaryScaleUncheckedUpdateManyWithoutJobStepInput, {nullable:true})
    salaryScales?: InstanceType<typeof SalaryScaleUncheckedUpdateManyWithoutJobStepInput>;
}

@InputType()
export class JobStepUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class JobStepUpdateOneWithoutSalaryScalesInput {
    @Field(() => JobStepCreateWithoutSalaryScalesInput, {nullable:true})
    create?: InstanceType<typeof JobStepCreateWithoutSalaryScalesInput>;
    @Field(() => JobStepCreateOrConnectWithoutSalaryScalesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof JobStepCreateOrConnectWithoutSalaryScalesInput>;
    @Field(() => JobStepUpsertWithoutSalaryScalesInput, {nullable:true})
    upsert?: InstanceType<typeof JobStepUpsertWithoutSalaryScalesInput>;
    @Field(() => JobStepWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof JobStepWhereUniqueInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => JobStepUpdateWithoutSalaryScalesInput, {nullable:true})
    update?: InstanceType<typeof JobStepUpdateWithoutSalaryScalesInput>;
}

@InputType()
export class JobStepUpdateWithoutSalaryScalesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class JobStepUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => SalaryScaleUpdateManyWithoutJobStepInput, {nullable:true})
    salaryScales?: InstanceType<typeof SalaryScaleUpdateManyWithoutJobStepInput>;
}

@InputType()
export class JobStepUpsertWithoutSalaryScalesInput {
    @Field(() => JobStepUpdateWithoutSalaryScalesInput, {nullable:false})
    update!: InstanceType<typeof JobStepUpdateWithoutSalaryScalesInput>;
    @Field(() => JobStepCreateWithoutSalaryScalesInput, {nullable:false})
    create!: InstanceType<typeof JobStepCreateWithoutSalaryScalesInput>;
}

@InputType()
export class JobStepWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    code?: string;
}

@InputType()
export class JobStepWhereInput {
    @Field(() => [JobStepWhereInput], {nullable:true})
    AND?: Array<JobStepWhereInput>;
    @Field(() => [JobStepWhereInput], {nullable:true})
    OR?: Array<JobStepWhereInput>;
    @Field(() => [JobStepWhereInput], {nullable:true})
    NOT?: Array<JobStepWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    code?: InstanceType<typeof StringFilter>;
    @Field(() => JsonNullableFilter, {nullable:true})
    locales?: InstanceType<typeof JsonNullableFilter>;
    @Field(() => BoolFilter, {nullable:true})
    deleted?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => SalaryScaleListRelationFilter, {nullable:true})
    salaryScales?: InstanceType<typeof SalaryScaleListRelationFilter>;
}

@ObjectType()
export class JobStep {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales!: any | null;
    @Field(() => Boolean, {nullable:false,defaultValue:false})
    deleted!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [SalaryScale], {nullable:true})
    salaryScales?: Array<SalaryScale>;
    @Field(() => JobStepCount, {nullable:true})
    _count?: InstanceType<typeof JobStepCount> | null;
}

@ArgsType()
export class UpdateManyJobStepArgs {
    @Field(() => JobStepUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof JobStepUpdateManyMutationInput>;
    @Field(() => JobStepWhereInput, {nullable:true})
    where?: InstanceType<typeof JobStepWhereInput>;
}

@ArgsType()
export class UpdateOneJobStepArgs {
    @Field(() => JobStepUpdateInput, {nullable:false})
    data!: InstanceType<typeof JobStepUpdateInput>;
    @Field(() => JobStepWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof JobStepWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneJobStepArgs {
    @Field(() => JobStepWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof JobStepWhereUniqueInput>;
    @Field(() => JobStepCreateInput, {nullable:false})
    create!: InstanceType<typeof JobStepCreateInput>;
    @Field(() => JobStepUpdateInput, {nullable:false})
    update!: InstanceType<typeof JobStepUpdateInput>;
}

@ObjectType()
export class AggregateMaritalStatus {
    @Field(() => MaritalStatusCountAggregate, {nullable:true})
    _count?: InstanceType<typeof MaritalStatusCountAggregate>;
    @Field(() => MaritalStatusAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof MaritalStatusAvgAggregate>;
    @Field(() => MaritalStatusSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof MaritalStatusSumAggregate>;
    @Field(() => MaritalStatusMinAggregate, {nullable:true})
    _min?: InstanceType<typeof MaritalStatusMinAggregate>;
    @Field(() => MaritalStatusMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof MaritalStatusMaxAggregate>;
}

@ArgsType()
export class CreateManyMaritalStatusArgs {
    @Field(() => [MaritalStatusCreateManyInput], {nullable:false})
    data!: Array<MaritalStatusCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneMaritalStatusArgs {
    @Field(() => MaritalStatusCreateInput, {nullable:false})
    data!: InstanceType<typeof MaritalStatusCreateInput>;
}

@ArgsType()
export class DeleteManyMaritalStatusArgs {
    @Field(() => MaritalStatusWhereInput, {nullable:true})
    where?: InstanceType<typeof MaritalStatusWhereInput>;
}

@ArgsType()
export class DeleteOneMaritalStatusArgs {
    @Field(() => MaritalStatusWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof MaritalStatusWhereUniqueInput>;
}

@ArgsType()
export class FindFirstMaritalStatusArgs {
    @Field(() => MaritalStatusWhereInput, {nullable:true})
    where?: InstanceType<typeof MaritalStatusWhereInput>;
    @Field(() => [MaritalStatusOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MaritalStatusOrderByWithRelationInput>;
    @Field(() => MaritalStatusWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof MaritalStatusWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [MaritalStatusScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MaritalStatusScalarFieldEnum>;
}

@ArgsType()
export class FindManyMaritalStatusArgs {
    @Field(() => MaritalStatusWhereInput, {nullable:true})
    where?: InstanceType<typeof MaritalStatusWhereInput>;
    @Field(() => [MaritalStatusOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MaritalStatusOrderByWithRelationInput>;
    @Field(() => MaritalStatusWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof MaritalStatusWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [MaritalStatusScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MaritalStatusScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueMaritalStatusArgs {
    @Field(() => MaritalStatusWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof MaritalStatusWhereUniqueInput>;
}

@ArgsType()
export class MaritalStatusAggregateArgs {
    @Field(() => MaritalStatusWhereInput, {nullable:true})
    where?: InstanceType<typeof MaritalStatusWhereInput>;
    @Field(() => [MaritalStatusOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MaritalStatusOrderByWithRelationInput>;
    @Field(() => MaritalStatusWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof MaritalStatusWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => MaritalStatusCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof MaritalStatusCountAggregateInput>;
    @Field(() => MaritalStatusAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof MaritalStatusAvgAggregateInput>;
    @Field(() => MaritalStatusSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof MaritalStatusSumAggregateInput>;
    @Field(() => MaritalStatusMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof MaritalStatusMinAggregateInput>;
    @Field(() => MaritalStatusMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof MaritalStatusMaxAggregateInput>;
}

@InputType()
export class MaritalStatusAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class MaritalStatusAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class MaritalStatusAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class MaritalStatusCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    locales?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class MaritalStatusCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    code!: number;
    @Field(() => Int, {nullable:false})
    locales!: number;
    @Field(() => Int, {nullable:false})
    deleted!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class MaritalStatusCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class MaritalStatusCount {
    @Field(() => Int, {nullable:false})
    employees!: number;
}

@InputType()
export class MaritalStatusCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class MaritalStatusCreateNestedOneWithoutEmployeesInput {
    @Field(() => MaritalStatusCreateWithoutEmployeesInput, {nullable:true})
    create?: InstanceType<typeof MaritalStatusCreateWithoutEmployeesInput>;
    @Field(() => MaritalStatusCreateOrConnectWithoutEmployeesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof MaritalStatusCreateOrConnectWithoutEmployeesInput>;
    @Field(() => MaritalStatusWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof MaritalStatusWhereUniqueInput>;
}

@InputType()
export class MaritalStatusCreateOrConnectWithoutEmployeesInput {
    @Field(() => MaritalStatusWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof MaritalStatusWhereUniqueInput>;
    @Field(() => MaritalStatusCreateWithoutEmployeesInput, {nullable:false})
    create!: InstanceType<typeof MaritalStatusCreateWithoutEmployeesInput>;
}

@InputType()
export class MaritalStatusCreateWithoutEmployeesInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class MaritalStatusCreateInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => EmployeeCreateNestedManyWithoutMaritalStatusInput, {nullable:true})
    employees?: InstanceType<typeof EmployeeCreateNestedManyWithoutMaritalStatusInput>;
}

@ArgsType()
export class MaritalStatusGroupByArgs {
    @Field(() => MaritalStatusWhereInput, {nullable:true})
    where?: InstanceType<typeof MaritalStatusWhereInput>;
    @Field(() => [MaritalStatusOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MaritalStatusOrderByWithAggregationInput>;
    @Field(() => [MaritalStatusScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MaritalStatusScalarFieldEnum>;
    @Field(() => MaritalStatusScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof MaritalStatusScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => MaritalStatusCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof MaritalStatusCountAggregateInput>;
    @Field(() => MaritalStatusAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof MaritalStatusAvgAggregateInput>;
    @Field(() => MaritalStatusSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof MaritalStatusSumAggregateInput>;
    @Field(() => MaritalStatusMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof MaritalStatusMinAggregateInput>;
    @Field(() => MaritalStatusMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof MaritalStatusMaxAggregateInput>;
}

@ObjectType()
export class MaritalStatusGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:false})
    deleted!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => MaritalStatusCountAggregate, {nullable:true})
    _count?: InstanceType<typeof MaritalStatusCountAggregate>;
    @Field(() => MaritalStatusAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof MaritalStatusAvgAggregate>;
    @Field(() => MaritalStatusSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof MaritalStatusSumAggregate>;
    @Field(() => MaritalStatusMinAggregate, {nullable:true})
    _min?: InstanceType<typeof MaritalStatusMinAggregate>;
    @Field(() => MaritalStatusMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof MaritalStatusMaxAggregate>;
}

@InputType()
export class MaritalStatusMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class MaritalStatusMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    code?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class MaritalStatusMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class MaritalStatusMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class MaritalStatusMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    code?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class MaritalStatusMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class MaritalStatusOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => MaritalStatusCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof MaritalStatusCountOrderByAggregateInput>;
    @Field(() => MaritalStatusAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof MaritalStatusAvgOrderByAggregateInput>;
    @Field(() => MaritalStatusMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof MaritalStatusMaxOrderByAggregateInput>;
    @Field(() => MaritalStatusMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof MaritalStatusMinOrderByAggregateInput>;
    @Field(() => MaritalStatusSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof MaritalStatusSumOrderByAggregateInput>;
}

@InputType()
export class MaritalStatusOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => EmployeeOrderByRelationAggregateInput, {nullable:true})
    employees?: InstanceType<typeof EmployeeOrderByRelationAggregateInput>;
}

@InputType()
export class MaritalStatusRelationFilter {
    @Field(() => MaritalStatusWhereInput, {nullable:true})
    is?: InstanceType<typeof MaritalStatusWhereInput>;
    @Field(() => MaritalStatusWhereInput, {nullable:true})
    isNot?: InstanceType<typeof MaritalStatusWhereInput>;
}

@InputType()
export class MaritalStatusScalarWhereWithAggregatesInput {
    @Field(() => [MaritalStatusScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MaritalStatusScalarWhereWithAggregatesInput>;
    @Field(() => [MaritalStatusScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MaritalStatusScalarWhereWithAggregatesInput>;
    @Field(() => [MaritalStatusScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MaritalStatusScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    locales?: InstanceType<typeof JsonNullableWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    deleted?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class MaritalStatusSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class MaritalStatusSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class MaritalStatusSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class MaritalStatusUncheckedCreateWithoutEmployeesInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class MaritalStatusUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => EmployeeUncheckedCreateNestedManyWithoutMaritalStatusInput, {nullable:true})
    employees?: InstanceType<typeof EmployeeUncheckedCreateNestedManyWithoutMaritalStatusInput>;
}

@InputType()
export class MaritalStatusUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class MaritalStatusUncheckedUpdateWithoutEmployeesInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class MaritalStatusUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => EmployeeUncheckedUpdateManyWithoutMaritalStatusInput, {nullable:true})
    employees?: InstanceType<typeof EmployeeUncheckedUpdateManyWithoutMaritalStatusInput>;
}

@InputType()
export class MaritalStatusUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class MaritalStatusUpdateOneWithoutEmployeesInput {
    @Field(() => MaritalStatusCreateWithoutEmployeesInput, {nullable:true})
    create?: InstanceType<typeof MaritalStatusCreateWithoutEmployeesInput>;
    @Field(() => MaritalStatusCreateOrConnectWithoutEmployeesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof MaritalStatusCreateOrConnectWithoutEmployeesInput>;
    @Field(() => MaritalStatusUpsertWithoutEmployeesInput, {nullable:true})
    upsert?: InstanceType<typeof MaritalStatusUpsertWithoutEmployeesInput>;
    @Field(() => MaritalStatusWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof MaritalStatusWhereUniqueInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => MaritalStatusUpdateWithoutEmployeesInput, {nullable:true})
    update?: InstanceType<typeof MaritalStatusUpdateWithoutEmployeesInput>;
}

@InputType()
export class MaritalStatusUpdateWithoutEmployeesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class MaritalStatusUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => EmployeeUpdateManyWithoutMaritalStatusInput, {nullable:true})
    employees?: InstanceType<typeof EmployeeUpdateManyWithoutMaritalStatusInput>;
}

@InputType()
export class MaritalStatusUpsertWithoutEmployeesInput {
    @Field(() => MaritalStatusUpdateWithoutEmployeesInput, {nullable:false})
    update!: InstanceType<typeof MaritalStatusUpdateWithoutEmployeesInput>;
    @Field(() => MaritalStatusCreateWithoutEmployeesInput, {nullable:false})
    create!: InstanceType<typeof MaritalStatusCreateWithoutEmployeesInput>;
}

@InputType()
export class MaritalStatusWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    code?: string;
}

@InputType()
export class MaritalStatusWhereInput {
    @Field(() => [MaritalStatusWhereInput], {nullable:true})
    AND?: Array<MaritalStatusWhereInput>;
    @Field(() => [MaritalStatusWhereInput], {nullable:true})
    OR?: Array<MaritalStatusWhereInput>;
    @Field(() => [MaritalStatusWhereInput], {nullable:true})
    NOT?: Array<MaritalStatusWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    code?: InstanceType<typeof StringFilter>;
    @Field(() => JsonNullableFilter, {nullable:true})
    locales?: InstanceType<typeof JsonNullableFilter>;
    @Field(() => BoolFilter, {nullable:true})
    deleted?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => EmployeeListRelationFilter, {nullable:true})
    employees?: InstanceType<typeof EmployeeListRelationFilter>;
}

@ObjectType()
export class MaritalStatus {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales!: any | null;
    @Field(() => Boolean, {nullable:false,defaultValue:false})
    deleted!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [Employee], {nullable:true})
    employees?: Array<Employee>;
    @Field(() => MaritalStatusCount, {nullable:true})
    _count?: InstanceType<typeof MaritalStatusCount> | null;
}

@ArgsType()
export class UpdateManyMaritalStatusArgs {
    @Field(() => MaritalStatusUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof MaritalStatusUpdateManyMutationInput>;
    @Field(() => MaritalStatusWhereInput, {nullable:true})
    where?: InstanceType<typeof MaritalStatusWhereInput>;
}

@ArgsType()
export class UpdateOneMaritalStatusArgs {
    @Field(() => MaritalStatusUpdateInput, {nullable:false})
    data!: InstanceType<typeof MaritalStatusUpdateInput>;
    @Field(() => MaritalStatusWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof MaritalStatusWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneMaritalStatusArgs {
    @Field(() => MaritalStatusWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof MaritalStatusWhereUniqueInput>;
    @Field(() => MaritalStatusCreateInput, {nullable:false})
    create!: InstanceType<typeof MaritalStatusCreateInput>;
    @Field(() => MaritalStatusUpdateInput, {nullable:false})
    update!: InstanceType<typeof MaritalStatusUpdateInput>;
}

@ObjectType()
export class AggregateNationality {
    @Field(() => NationalityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof NationalityCountAggregate>;
    @Field(() => NationalityAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof NationalityAvgAggregate>;
    @Field(() => NationalitySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof NationalitySumAggregate>;
    @Field(() => NationalityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof NationalityMinAggregate>;
    @Field(() => NationalityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof NationalityMaxAggregate>;
}

@ArgsType()
export class CreateManyNationalityArgs {
    @Field(() => [NationalityCreateManyInput], {nullable:false})
    data!: Array<NationalityCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneNationalityArgs {
    @Field(() => NationalityCreateInput, {nullable:false})
    data!: InstanceType<typeof NationalityCreateInput>;
}

@ArgsType()
export class DeleteManyNationalityArgs {
    @Field(() => NationalityWhereInput, {nullable:true})
    where?: InstanceType<typeof NationalityWhereInput>;
}

@ArgsType()
export class DeleteOneNationalityArgs {
    @Field(() => NationalityWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof NationalityWhereUniqueInput>;
}

@ArgsType()
export class FindFirstNationalityArgs {
    @Field(() => NationalityWhereInput, {nullable:true})
    where?: InstanceType<typeof NationalityWhereInput>;
    @Field(() => [NationalityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NationalityOrderByWithRelationInput>;
    @Field(() => NationalityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof NationalityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [NationalityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof NationalityScalarFieldEnum>;
}

@ArgsType()
export class FindManyNationalityArgs {
    @Field(() => NationalityWhereInput, {nullable:true})
    where?: InstanceType<typeof NationalityWhereInput>;
    @Field(() => [NationalityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NationalityOrderByWithRelationInput>;
    @Field(() => NationalityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof NationalityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [NationalityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof NationalityScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueNationalityArgs {
    @Field(() => NationalityWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof NationalityWhereUniqueInput>;
}

@ArgsType()
export class NationalityAggregateArgs {
    @Field(() => NationalityWhereInput, {nullable:true})
    where?: InstanceType<typeof NationalityWhereInput>;
    @Field(() => [NationalityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NationalityOrderByWithRelationInput>;
    @Field(() => NationalityWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof NationalityWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => NationalityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof NationalityCountAggregateInput>;
    @Field(() => NationalityAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof NationalityAvgAggregateInput>;
    @Field(() => NationalitySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof NationalitySumAggregateInput>;
    @Field(() => NationalityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof NationalityMinAggregateInput>;
    @Field(() => NationalityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof NationalityMaxAggregateInput>;
}

@InputType()
export class NationalityAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class NationalityAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class NationalityAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class NationalityCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    locales?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class NationalityCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    code!: number;
    @Field(() => Int, {nullable:false})
    locales!: number;
    @Field(() => Int, {nullable:false})
    deleted!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class NationalityCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class NationalityCount {
    @Field(() => Int, {nullable:false})
    employees!: number;
}

@InputType()
export class NationalityCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class NationalityCreateNestedOneWithoutEmployeesInput {
    @Field(() => NationalityCreateWithoutEmployeesInput, {nullable:true})
    create?: InstanceType<typeof NationalityCreateWithoutEmployeesInput>;
    @Field(() => NationalityCreateOrConnectWithoutEmployeesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof NationalityCreateOrConnectWithoutEmployeesInput>;
    @Field(() => NationalityWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof NationalityWhereUniqueInput>;
}

@InputType()
export class NationalityCreateOrConnectWithoutEmployeesInput {
    @Field(() => NationalityWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof NationalityWhereUniqueInput>;
    @Field(() => NationalityCreateWithoutEmployeesInput, {nullable:false})
    create!: InstanceType<typeof NationalityCreateWithoutEmployeesInput>;
}

@InputType()
export class NationalityCreateWithoutEmployeesInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class NationalityCreateInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => EmployeeCreateNestedManyWithoutNationalityInput, {nullable:true})
    employees?: InstanceType<typeof EmployeeCreateNestedManyWithoutNationalityInput>;
}

@ArgsType()
export class NationalityGroupByArgs {
    @Field(() => NationalityWhereInput, {nullable:true})
    where?: InstanceType<typeof NationalityWhereInput>;
    @Field(() => [NationalityOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<NationalityOrderByWithAggregationInput>;
    @Field(() => [NationalityScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof NationalityScalarFieldEnum>;
    @Field(() => NationalityScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof NationalityScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => NationalityCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof NationalityCountAggregateInput>;
    @Field(() => NationalityAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof NationalityAvgAggregateInput>;
    @Field(() => NationalitySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof NationalitySumAggregateInput>;
    @Field(() => NationalityMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof NationalityMinAggregateInput>;
    @Field(() => NationalityMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof NationalityMaxAggregateInput>;
}

@ObjectType()
export class NationalityGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:false})
    deleted!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => NationalityCountAggregate, {nullable:true})
    _count?: InstanceType<typeof NationalityCountAggregate>;
    @Field(() => NationalityAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof NationalityAvgAggregate>;
    @Field(() => NationalitySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof NationalitySumAggregate>;
    @Field(() => NationalityMinAggregate, {nullable:true})
    _min?: InstanceType<typeof NationalityMinAggregate>;
    @Field(() => NationalityMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof NationalityMaxAggregate>;
}

@InputType()
export class NationalityMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class NationalityMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    code?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class NationalityMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class NationalityMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class NationalityMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    code?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class NationalityMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class NationalityOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => NationalityCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof NationalityCountOrderByAggregateInput>;
    @Field(() => NationalityAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof NationalityAvgOrderByAggregateInput>;
    @Field(() => NationalityMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof NationalityMaxOrderByAggregateInput>;
    @Field(() => NationalityMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof NationalityMinOrderByAggregateInput>;
    @Field(() => NationalitySumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof NationalitySumOrderByAggregateInput>;
}

@InputType()
export class NationalityOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => EmployeeOrderByRelationAggregateInput, {nullable:true})
    employees?: InstanceType<typeof EmployeeOrderByRelationAggregateInput>;
}

@InputType()
export class NationalityRelationFilter {
    @Field(() => NationalityWhereInput, {nullable:true})
    is?: InstanceType<typeof NationalityWhereInput>;
    @Field(() => NationalityWhereInput, {nullable:true})
    isNot?: InstanceType<typeof NationalityWhereInput>;
}

@InputType()
export class NationalityScalarWhereWithAggregatesInput {
    @Field(() => [NationalityScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<NationalityScalarWhereWithAggregatesInput>;
    @Field(() => [NationalityScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<NationalityScalarWhereWithAggregatesInput>;
    @Field(() => [NationalityScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<NationalityScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    locales?: InstanceType<typeof JsonNullableWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    deleted?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class NationalitySumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class NationalitySumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class NationalitySumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class NationalityUncheckedCreateWithoutEmployeesInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class NationalityUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => EmployeeUncheckedCreateNestedManyWithoutNationalityInput, {nullable:true})
    employees?: InstanceType<typeof EmployeeUncheckedCreateNestedManyWithoutNationalityInput>;
}

@InputType()
export class NationalityUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class NationalityUncheckedUpdateWithoutEmployeesInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class NationalityUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => EmployeeUncheckedUpdateManyWithoutNationalityInput, {nullable:true})
    employees?: InstanceType<typeof EmployeeUncheckedUpdateManyWithoutNationalityInput>;
}

@InputType()
export class NationalityUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class NationalityUpdateOneWithoutEmployeesInput {
    @Field(() => NationalityCreateWithoutEmployeesInput, {nullable:true})
    create?: InstanceType<typeof NationalityCreateWithoutEmployeesInput>;
    @Field(() => NationalityCreateOrConnectWithoutEmployeesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof NationalityCreateOrConnectWithoutEmployeesInput>;
    @Field(() => NationalityUpsertWithoutEmployeesInput, {nullable:true})
    upsert?: InstanceType<typeof NationalityUpsertWithoutEmployeesInput>;
    @Field(() => NationalityWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof NationalityWhereUniqueInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => NationalityUpdateWithoutEmployeesInput, {nullable:true})
    update?: InstanceType<typeof NationalityUpdateWithoutEmployeesInput>;
}

@InputType()
export class NationalityUpdateWithoutEmployeesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class NationalityUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => EmployeeUpdateManyWithoutNationalityInput, {nullable:true})
    employees?: InstanceType<typeof EmployeeUpdateManyWithoutNationalityInput>;
}

@InputType()
export class NationalityUpsertWithoutEmployeesInput {
    @Field(() => NationalityUpdateWithoutEmployeesInput, {nullable:false})
    update!: InstanceType<typeof NationalityUpdateWithoutEmployeesInput>;
    @Field(() => NationalityCreateWithoutEmployeesInput, {nullable:false})
    create!: InstanceType<typeof NationalityCreateWithoutEmployeesInput>;
}

@InputType()
export class NationalityWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    code?: string;
}

@InputType()
export class NationalityWhereInput {
    @Field(() => [NationalityWhereInput], {nullable:true})
    AND?: Array<NationalityWhereInput>;
    @Field(() => [NationalityWhereInput], {nullable:true})
    OR?: Array<NationalityWhereInput>;
    @Field(() => [NationalityWhereInput], {nullable:true})
    NOT?: Array<NationalityWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    code?: InstanceType<typeof StringFilter>;
    @Field(() => JsonNullableFilter, {nullable:true})
    locales?: InstanceType<typeof JsonNullableFilter>;
    @Field(() => BoolFilter, {nullable:true})
    deleted?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => EmployeeListRelationFilter, {nullable:true})
    employees?: InstanceType<typeof EmployeeListRelationFilter>;
}

@ObjectType()
export class Nationality {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales!: any | null;
    @Field(() => Boolean, {nullable:false,defaultValue:false})
    deleted!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [Employee], {nullable:true})
    employees?: Array<Employee>;
    @Field(() => NationalityCount, {nullable:true})
    _count?: InstanceType<typeof NationalityCount> | null;
}

@ArgsType()
export class UpdateManyNationalityArgs {
    @Field(() => NationalityUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof NationalityUpdateManyMutationInput>;
    @Field(() => NationalityWhereInput, {nullable:true})
    where?: InstanceType<typeof NationalityWhereInput>;
}

@ArgsType()
export class UpdateOneNationalityArgs {
    @Field(() => NationalityUpdateInput, {nullable:false})
    data!: InstanceType<typeof NationalityUpdateInput>;
    @Field(() => NationalityWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof NationalityWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneNationalityArgs {
    @Field(() => NationalityWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof NationalityWhereUniqueInput>;
    @Field(() => NationalityCreateInput, {nullable:false})
    create!: InstanceType<typeof NationalityCreateInput>;
    @Field(() => NationalityUpdateInput, {nullable:false})
    update!: InstanceType<typeof NationalityUpdateInput>;
}

@ObjectType()
export class AggregatePosition {
    @Field(() => PositionCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PositionCountAggregate>;
    @Field(() => PositionAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof PositionAvgAggregate>;
    @Field(() => PositionSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof PositionSumAggregate>;
    @Field(() => PositionMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PositionMinAggregate>;
    @Field(() => PositionMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PositionMaxAggregate>;
}

@ArgsType()
export class CreateManyPositionArgs {
    @Field(() => [PositionCreateManyInput], {nullable:false})
    data!: Array<PositionCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOnePositionArgs {
    @Field(() => PositionCreateInput, {nullable:false})
    data!: InstanceType<typeof PositionCreateInput>;
}

@ArgsType()
export class DeleteManyPositionArgs {
    @Field(() => PositionWhereInput, {nullable:true})
    where?: InstanceType<typeof PositionWhereInput>;
}

@ArgsType()
export class DeleteOnePositionArgs {
    @Field(() => PositionWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionWhereUniqueInput>;
}

@ArgsType()
export class FindFirstPositionArgs {
    @Field(() => PositionWhereInput, {nullable:true})
    where?: InstanceType<typeof PositionWhereInput>;
    @Field(() => [PositionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PositionOrderByWithRelationInput>;
    @Field(() => PositionWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PositionWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PositionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PositionScalarFieldEnum>;
}

@ArgsType()
export class FindManyPositionArgs {
    @Field(() => PositionWhereInput, {nullable:true})
    where?: InstanceType<typeof PositionWhereInput>;
    @Field(() => [PositionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PositionOrderByWithRelationInput>;
    @Field(() => PositionWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PositionWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PositionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PositionScalarFieldEnum>;
}

@ArgsType()
export class FindUniquePositionArgs {
    @Field(() => PositionWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionWhereUniqueInput>;
}

@ArgsType()
export class PositionAggregateArgs {
    @Field(() => PositionWhereInput, {nullable:true})
    where?: InstanceType<typeof PositionWhereInput>;
    @Field(() => [PositionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PositionOrderByWithRelationInput>;
    @Field(() => PositionWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PositionWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PositionCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PositionCountAggregateInput>;
    @Field(() => PositionAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PositionAvgAggregateInput>;
    @Field(() => PositionSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PositionSumAggregateInput>;
    @Field(() => PositionMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PositionMinAggregateInput>;
    @Field(() => PositionMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PositionMaxAggregateInput>;
}

@InputType()
export class PositionAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    positionClassId?: true;
    @Field(() => Boolean, {nullable:true})
    departmentId?: true;
}

@ObjectType()
export class PositionAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    positionClassId?: number;
    @Field(() => Float, {nullable:true})
    departmentId?: number;
}

@InputType()
export class PositionAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    positionClassId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    departmentId?: keyof typeof SortOrder;
}

@ObjectType()
export class PositionClassTypeCount {
    @Field(() => Int, {nullable:false})
    positionClasses!: number;
}

@InputType()
export class PositionCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    positionClassId?: true;
    @Field(() => Boolean, {nullable:true})
    departmentId?: true;
    @Field(() => Boolean, {nullable:true})
    vacant?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class PositionCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    code!: number;
    @Field(() => Int, {nullable:false})
    positionClassId!: number;
    @Field(() => Int, {nullable:false})
    departmentId!: number;
    @Field(() => Int, {nullable:false})
    vacant!: number;
    @Field(() => Int, {nullable:false})
    deleted!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class PositionCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    positionClassId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    departmentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    vacant?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PositionCreateManyDepartmentInputEnvelope {
    @Field(() => [PositionCreateManyDepartmentInput], {nullable:false})
    data!: Array<PositionCreateManyDepartmentInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class PositionCreateManyDepartmentInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => Int, {nullable:true})
    positionClassId?: number;
    @Field(() => Boolean, {nullable:true})
    vacant?: boolean;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PositionCreateManyPositionClassInputEnvelope {
    @Field(() => [PositionCreateManyPositionClassInput], {nullable:false})
    data!: Array<PositionCreateManyPositionClassInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class PositionCreateManyPositionClassInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => Int, {nullable:true})
    departmentId?: number;
    @Field(() => Boolean, {nullable:true})
    vacant?: boolean;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PositionCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => Int, {nullable:true})
    positionClassId?: number;
    @Field(() => Int, {nullable:true})
    departmentId?: number;
    @Field(() => Boolean, {nullable:true})
    vacant?: boolean;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PositionCreateNestedManyWithoutDepartmentInput {
    @Field(() => [PositionCreateWithoutDepartmentInput], {nullable:true})
    create?: Array<PositionCreateWithoutDepartmentInput>;
    @Field(() => [PositionCreateOrConnectWithoutDepartmentInput], {nullable:true})
    connectOrCreate?: Array<PositionCreateOrConnectWithoutDepartmentInput>;
    @Field(() => PositionCreateManyDepartmentInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PositionCreateManyDepartmentInputEnvelope>;
    @Field(() => [PositionWhereUniqueInput], {nullable:true})
    connect?: Array<PositionWhereUniqueInput>;
}

@InputType()
export class PositionCreateNestedManyWithoutPositionClassInput {
    @Field(() => [PositionCreateWithoutPositionClassInput], {nullable:true})
    create?: Array<PositionCreateWithoutPositionClassInput>;
    @Field(() => [PositionCreateOrConnectWithoutPositionClassInput], {nullable:true})
    connectOrCreate?: Array<PositionCreateOrConnectWithoutPositionClassInput>;
    @Field(() => PositionCreateManyPositionClassInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PositionCreateManyPositionClassInputEnvelope>;
    @Field(() => [PositionWhereUniqueInput], {nullable:true})
    connect?: Array<PositionWhereUniqueInput>;
}

@InputType()
export class PositionCreateOrConnectWithoutDepartmentInput {
    @Field(() => PositionWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionWhereUniqueInput>;
    @Field(() => PositionCreateWithoutDepartmentInput, {nullable:false})
    create!: InstanceType<typeof PositionCreateWithoutDepartmentInput>;
}

@InputType()
export class PositionCreateOrConnectWithoutPositionClassInput {
    @Field(() => PositionWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionWhereUniqueInput>;
    @Field(() => PositionCreateWithoutPositionClassInput, {nullable:false})
    create!: InstanceType<typeof PositionCreateWithoutPositionClassInput>;
}

@InputType()
export class PositionCreateWithoutDepartmentInput {
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => Boolean, {nullable:true})
    vacant?: boolean;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PositionClassCreateNestedOneWithoutPositionsInput, {nullable:true})
    positionClass?: InstanceType<typeof PositionClassCreateNestedOneWithoutPositionsInput>;
}

@InputType()
export class PositionCreateWithoutPositionClassInput {
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => Boolean, {nullable:true})
    vacant?: boolean;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => DepartmentCreateNestedOneWithoutPositionsInput, {nullable:true})
    department?: InstanceType<typeof DepartmentCreateNestedOneWithoutPositionsInput>;
}

@InputType()
export class PositionCreateInput {
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => Boolean, {nullable:true})
    vacant?: boolean;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PositionClassCreateNestedOneWithoutPositionsInput, {nullable:true})
    positionClass?: InstanceType<typeof PositionClassCreateNestedOneWithoutPositionsInput>;
    @Field(() => DepartmentCreateNestedOneWithoutPositionsInput, {nullable:true})
    department?: InstanceType<typeof DepartmentCreateNestedOneWithoutPositionsInput>;
}

@ArgsType()
export class PositionGroupByArgs {
    @Field(() => PositionWhereInput, {nullable:true})
    where?: InstanceType<typeof PositionWhereInput>;
    @Field(() => [PositionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PositionOrderByWithAggregationInput>;
    @Field(() => [PositionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PositionScalarFieldEnum>;
    @Field(() => PositionScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof PositionScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PositionCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PositionCountAggregateInput>;
    @Field(() => PositionAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PositionAvgAggregateInput>;
    @Field(() => PositionSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PositionSumAggregateInput>;
    @Field(() => PositionMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PositionMinAggregateInput>;
    @Field(() => PositionMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PositionMaxAggregateInput>;
}

@ObjectType()
export class PositionGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => Int, {nullable:true})
    positionClassId?: number;
    @Field(() => Int, {nullable:true})
    departmentId?: number;
    @Field(() => Boolean, {nullable:false})
    vacant!: boolean;
    @Field(() => Boolean, {nullable:false})
    deleted!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => PositionCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PositionCountAggregate>;
    @Field(() => PositionAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof PositionAvgAggregate>;
    @Field(() => PositionSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof PositionSumAggregate>;
    @Field(() => PositionMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PositionMinAggregate>;
    @Field(() => PositionMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PositionMaxAggregate>;
}

@InputType()
export class PositionListRelationFilter {
    @Field(() => PositionWhereInput, {nullable:true})
    every?: InstanceType<typeof PositionWhereInput>;
    @Field(() => PositionWhereInput, {nullable:true})
    some?: InstanceType<typeof PositionWhereInput>;
    @Field(() => PositionWhereInput, {nullable:true})
    none?: InstanceType<typeof PositionWhereInput>;
}

@InputType()
export class PositionMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    positionClassId?: true;
    @Field(() => Boolean, {nullable:true})
    departmentId?: true;
    @Field(() => Boolean, {nullable:true})
    vacant?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class PositionMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    code?: string;
    @Field(() => Int, {nullable:true})
    positionClassId?: number;
    @Field(() => Int, {nullable:true})
    departmentId?: number;
    @Field(() => Boolean, {nullable:true})
    vacant?: boolean;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PositionMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    positionClassId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    departmentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    vacant?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PositionMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    positionClassId?: true;
    @Field(() => Boolean, {nullable:true})
    departmentId?: true;
    @Field(() => Boolean, {nullable:true})
    vacant?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class PositionMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    code?: string;
    @Field(() => Int, {nullable:true})
    positionClassId?: number;
    @Field(() => Int, {nullable:true})
    departmentId?: number;
    @Field(() => Boolean, {nullable:true})
    vacant?: boolean;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PositionMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    positionClassId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    departmentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    vacant?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PositionOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class PositionOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    positionClassId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    departmentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    vacant?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => PositionCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PositionCountOrderByAggregateInput>;
    @Field(() => PositionAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PositionAvgOrderByAggregateInput>;
    @Field(() => PositionMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PositionMaxOrderByAggregateInput>;
    @Field(() => PositionMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PositionMinOrderByAggregateInput>;
    @Field(() => PositionSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PositionSumOrderByAggregateInput>;
}

@InputType()
export class PositionOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => PositionClassOrderByWithRelationInput, {nullable:true})
    positionClass?: InstanceType<typeof PositionClassOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    positionClassId?: keyof typeof SortOrder;
    @Field(() => DepartmentOrderByWithRelationInput, {nullable:true})
    department?: InstanceType<typeof DepartmentOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    departmentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    vacant?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PositionScalarWhereWithAggregatesInput {
    @Field(() => [PositionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PositionScalarWhereWithAggregatesInput>;
    @Field(() => [PositionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PositionScalarWhereWithAggregatesInput>;
    @Field(() => [PositionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PositionScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    positionClassId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    departmentId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    vacant?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    deleted?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class PositionScalarWhereInput {
    @Field(() => [PositionScalarWhereInput], {nullable:true})
    AND?: Array<PositionScalarWhereInput>;
    @Field(() => [PositionScalarWhereInput], {nullable:true})
    OR?: Array<PositionScalarWhereInput>;
    @Field(() => [PositionScalarWhereInput], {nullable:true})
    NOT?: Array<PositionScalarWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    code?: InstanceType<typeof StringFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    positionClassId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    departmentId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => BoolFilter, {nullable:true})
    vacant?: InstanceType<typeof BoolFilter>;
    @Field(() => BoolFilter, {nullable:true})
    deleted?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class PositionSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    positionClassId?: true;
    @Field(() => Boolean, {nullable:true})
    departmentId?: true;
}

@ObjectType()
export class PositionSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    positionClassId?: number;
    @Field(() => Int, {nullable:true})
    departmentId?: number;
}

@InputType()
export class PositionSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    positionClassId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    departmentId?: keyof typeof SortOrder;
}

@InputType()
export class PositionUncheckedCreateNestedManyWithoutDepartmentInput {
    @Field(() => [PositionCreateWithoutDepartmentInput], {nullable:true})
    create?: Array<PositionCreateWithoutDepartmentInput>;
    @Field(() => [PositionCreateOrConnectWithoutDepartmentInput], {nullable:true})
    connectOrCreate?: Array<PositionCreateOrConnectWithoutDepartmentInput>;
    @Field(() => PositionCreateManyDepartmentInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PositionCreateManyDepartmentInputEnvelope>;
    @Field(() => [PositionWhereUniqueInput], {nullable:true})
    connect?: Array<PositionWhereUniqueInput>;
}

@InputType()
export class PositionUncheckedCreateNestedManyWithoutPositionClassInput {
    @Field(() => [PositionCreateWithoutPositionClassInput], {nullable:true})
    create?: Array<PositionCreateWithoutPositionClassInput>;
    @Field(() => [PositionCreateOrConnectWithoutPositionClassInput], {nullable:true})
    connectOrCreate?: Array<PositionCreateOrConnectWithoutPositionClassInput>;
    @Field(() => PositionCreateManyPositionClassInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PositionCreateManyPositionClassInputEnvelope>;
    @Field(() => [PositionWhereUniqueInput], {nullable:true})
    connect?: Array<PositionWhereUniqueInput>;
}

@InputType()
export class PositionUncheckedCreateWithoutDepartmentInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => Int, {nullable:true})
    positionClassId?: number;
    @Field(() => Boolean, {nullable:true})
    vacant?: boolean;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PositionUncheckedCreateWithoutPositionClassInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => Int, {nullable:true})
    departmentId?: number;
    @Field(() => Boolean, {nullable:true})
    vacant?: boolean;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PositionUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => Int, {nullable:true})
    positionClassId?: number;
    @Field(() => Int, {nullable:true})
    departmentId?: number;
    @Field(() => Boolean, {nullable:true})
    vacant?: boolean;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PositionUncheckedUpdateManyWithoutDepartmentInput {
    @Field(() => [PositionCreateWithoutDepartmentInput], {nullable:true})
    create?: Array<PositionCreateWithoutDepartmentInput>;
    @Field(() => [PositionCreateOrConnectWithoutDepartmentInput], {nullable:true})
    connectOrCreate?: Array<PositionCreateOrConnectWithoutDepartmentInput>;
    @Field(() => [PositionUpsertWithWhereUniqueWithoutDepartmentInput], {nullable:true})
    upsert?: Array<PositionUpsertWithWhereUniqueWithoutDepartmentInput>;
    @Field(() => PositionCreateManyDepartmentInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PositionCreateManyDepartmentInputEnvelope>;
    @Field(() => [PositionWhereUniqueInput], {nullable:true})
    connect?: Array<PositionWhereUniqueInput>;
    @Field(() => [PositionWhereUniqueInput], {nullable:true})
    set?: Array<PositionWhereUniqueInput>;
    @Field(() => [PositionWhereUniqueInput], {nullable:true})
    disconnect?: Array<PositionWhereUniqueInput>;
    @Field(() => [PositionWhereUniqueInput], {nullable:true})
    delete?: Array<PositionWhereUniqueInput>;
    @Field(() => [PositionUpdateWithWhereUniqueWithoutDepartmentInput], {nullable:true})
    update?: Array<PositionUpdateWithWhereUniqueWithoutDepartmentInput>;
    @Field(() => [PositionUpdateManyWithWhereWithoutDepartmentInput], {nullable:true})
    updateMany?: Array<PositionUpdateManyWithWhereWithoutDepartmentInput>;
    @Field(() => [PositionScalarWhereInput], {nullable:true})
    deleteMany?: Array<PositionScalarWhereInput>;
}

@InputType()
export class PositionUncheckedUpdateManyWithoutPositionClassInput {
    @Field(() => [PositionCreateWithoutPositionClassInput], {nullable:true})
    create?: Array<PositionCreateWithoutPositionClassInput>;
    @Field(() => [PositionCreateOrConnectWithoutPositionClassInput], {nullable:true})
    connectOrCreate?: Array<PositionCreateOrConnectWithoutPositionClassInput>;
    @Field(() => [PositionUpsertWithWhereUniqueWithoutPositionClassInput], {nullable:true})
    upsert?: Array<PositionUpsertWithWhereUniqueWithoutPositionClassInput>;
    @Field(() => PositionCreateManyPositionClassInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PositionCreateManyPositionClassInputEnvelope>;
    @Field(() => [PositionWhereUniqueInput], {nullable:true})
    connect?: Array<PositionWhereUniqueInput>;
    @Field(() => [PositionWhereUniqueInput], {nullable:true})
    set?: Array<PositionWhereUniqueInput>;
    @Field(() => [PositionWhereUniqueInput], {nullable:true})
    disconnect?: Array<PositionWhereUniqueInput>;
    @Field(() => [PositionWhereUniqueInput], {nullable:true})
    delete?: Array<PositionWhereUniqueInput>;
    @Field(() => [PositionUpdateWithWhereUniqueWithoutPositionClassInput], {nullable:true})
    update?: Array<PositionUpdateWithWhereUniqueWithoutPositionClassInput>;
    @Field(() => [PositionUpdateManyWithWhereWithoutPositionClassInput], {nullable:true})
    updateMany?: Array<PositionUpdateManyWithWhereWithoutPositionClassInput>;
    @Field(() => [PositionScalarWhereInput], {nullable:true})
    deleteMany?: Array<PositionScalarWhereInput>;
}

@InputType()
export class PositionUncheckedUpdateManyWithoutPositionsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    positionClassId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    vacant?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PositionUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    positionClassId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    departmentId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    vacant?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PositionUncheckedUpdateWithoutDepartmentInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    positionClassId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    vacant?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PositionUncheckedUpdateWithoutPositionClassInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    departmentId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    vacant?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PositionUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    positionClassId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    departmentId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    vacant?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PositionUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    vacant?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PositionUpdateManyWithWhereWithoutDepartmentInput {
    @Field(() => PositionScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof PositionScalarWhereInput>;
    @Field(() => PositionUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof PositionUpdateManyMutationInput>;
}

@InputType()
export class PositionUpdateManyWithWhereWithoutPositionClassInput {
    @Field(() => PositionScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof PositionScalarWhereInput>;
    @Field(() => PositionUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof PositionUpdateManyMutationInput>;
}

@InputType()
export class PositionUpdateManyWithoutDepartmentInput {
    @Field(() => [PositionCreateWithoutDepartmentInput], {nullable:true})
    create?: Array<PositionCreateWithoutDepartmentInput>;
    @Field(() => [PositionCreateOrConnectWithoutDepartmentInput], {nullable:true})
    connectOrCreate?: Array<PositionCreateOrConnectWithoutDepartmentInput>;
    @Field(() => [PositionUpsertWithWhereUniqueWithoutDepartmentInput], {nullable:true})
    upsert?: Array<PositionUpsertWithWhereUniqueWithoutDepartmentInput>;
    @Field(() => PositionCreateManyDepartmentInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PositionCreateManyDepartmentInputEnvelope>;
    @Field(() => [PositionWhereUniqueInput], {nullable:true})
    connect?: Array<PositionWhereUniqueInput>;
    @Field(() => [PositionWhereUniqueInput], {nullable:true})
    set?: Array<PositionWhereUniqueInput>;
    @Field(() => [PositionWhereUniqueInput], {nullable:true})
    disconnect?: Array<PositionWhereUniqueInput>;
    @Field(() => [PositionWhereUniqueInput], {nullable:true})
    delete?: Array<PositionWhereUniqueInput>;
    @Field(() => [PositionUpdateWithWhereUniqueWithoutDepartmentInput], {nullable:true})
    update?: Array<PositionUpdateWithWhereUniqueWithoutDepartmentInput>;
    @Field(() => [PositionUpdateManyWithWhereWithoutDepartmentInput], {nullable:true})
    updateMany?: Array<PositionUpdateManyWithWhereWithoutDepartmentInput>;
    @Field(() => [PositionScalarWhereInput], {nullable:true})
    deleteMany?: Array<PositionScalarWhereInput>;
}

@InputType()
export class PositionUpdateManyWithoutPositionClassInput {
    @Field(() => [PositionCreateWithoutPositionClassInput], {nullable:true})
    create?: Array<PositionCreateWithoutPositionClassInput>;
    @Field(() => [PositionCreateOrConnectWithoutPositionClassInput], {nullable:true})
    connectOrCreate?: Array<PositionCreateOrConnectWithoutPositionClassInput>;
    @Field(() => [PositionUpsertWithWhereUniqueWithoutPositionClassInput], {nullable:true})
    upsert?: Array<PositionUpsertWithWhereUniqueWithoutPositionClassInput>;
    @Field(() => PositionCreateManyPositionClassInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PositionCreateManyPositionClassInputEnvelope>;
    @Field(() => [PositionWhereUniqueInput], {nullable:true})
    connect?: Array<PositionWhereUniqueInput>;
    @Field(() => [PositionWhereUniqueInput], {nullable:true})
    set?: Array<PositionWhereUniqueInput>;
    @Field(() => [PositionWhereUniqueInput], {nullable:true})
    disconnect?: Array<PositionWhereUniqueInput>;
    @Field(() => [PositionWhereUniqueInput], {nullable:true})
    delete?: Array<PositionWhereUniqueInput>;
    @Field(() => [PositionUpdateWithWhereUniqueWithoutPositionClassInput], {nullable:true})
    update?: Array<PositionUpdateWithWhereUniqueWithoutPositionClassInput>;
    @Field(() => [PositionUpdateManyWithWhereWithoutPositionClassInput], {nullable:true})
    updateMany?: Array<PositionUpdateManyWithWhereWithoutPositionClassInput>;
    @Field(() => [PositionScalarWhereInput], {nullable:true})
    deleteMany?: Array<PositionScalarWhereInput>;
}

@InputType()
export class PositionUpdateWithWhereUniqueWithoutDepartmentInput {
    @Field(() => PositionWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionWhereUniqueInput>;
    @Field(() => PositionUpdateWithoutDepartmentInput, {nullable:false})
    data!: InstanceType<typeof PositionUpdateWithoutDepartmentInput>;
}

@InputType()
export class PositionUpdateWithWhereUniqueWithoutPositionClassInput {
    @Field(() => PositionWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionWhereUniqueInput>;
    @Field(() => PositionUpdateWithoutPositionClassInput, {nullable:false})
    data!: InstanceType<typeof PositionUpdateWithoutPositionClassInput>;
}

@InputType()
export class PositionUpdateWithoutDepartmentInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    vacant?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PositionClassUpdateOneWithoutPositionsInput, {nullable:true})
    positionClass?: InstanceType<typeof PositionClassUpdateOneWithoutPositionsInput>;
}

@InputType()
export class PositionUpdateWithoutPositionClassInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    vacant?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DepartmentUpdateOneWithoutPositionsInput, {nullable:true})
    department?: InstanceType<typeof DepartmentUpdateOneWithoutPositionsInput>;
}

@InputType()
export class PositionUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    vacant?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PositionClassUpdateOneWithoutPositionsInput, {nullable:true})
    positionClass?: InstanceType<typeof PositionClassUpdateOneWithoutPositionsInput>;
    @Field(() => DepartmentUpdateOneWithoutPositionsInput, {nullable:true})
    department?: InstanceType<typeof DepartmentUpdateOneWithoutPositionsInput>;
}

@InputType()
export class PositionUpsertWithWhereUniqueWithoutDepartmentInput {
    @Field(() => PositionWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionWhereUniqueInput>;
    @Field(() => PositionUpdateWithoutDepartmentInput, {nullable:false})
    update!: InstanceType<typeof PositionUpdateWithoutDepartmentInput>;
    @Field(() => PositionCreateWithoutDepartmentInput, {nullable:false})
    create!: InstanceType<typeof PositionCreateWithoutDepartmentInput>;
}

@InputType()
export class PositionUpsertWithWhereUniqueWithoutPositionClassInput {
    @Field(() => PositionWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionWhereUniqueInput>;
    @Field(() => PositionUpdateWithoutPositionClassInput, {nullable:false})
    update!: InstanceType<typeof PositionUpdateWithoutPositionClassInput>;
    @Field(() => PositionCreateWithoutPositionClassInput, {nullable:false})
    create!: InstanceType<typeof PositionCreateWithoutPositionClassInput>;
}

@InputType()
export class PositionWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    code?: string;
}

@InputType()
export class PositionWhereInput {
    @Field(() => [PositionWhereInput], {nullable:true})
    AND?: Array<PositionWhereInput>;
    @Field(() => [PositionWhereInput], {nullable:true})
    OR?: Array<PositionWhereInput>;
    @Field(() => [PositionWhereInput], {nullable:true})
    NOT?: Array<PositionWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    code?: InstanceType<typeof StringFilter>;
    @Field(() => PositionClassRelationFilter, {nullable:true})
    positionClass?: InstanceType<typeof PositionClassRelationFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    positionClassId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => DepartmentRelationFilter, {nullable:true})
    department?: InstanceType<typeof DepartmentRelationFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    departmentId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => BoolFilter, {nullable:true})
    vacant?: InstanceType<typeof BoolFilter>;
    @Field(() => BoolFilter, {nullable:true})
    deleted?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class Position {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => PositionClass, {nullable:true})
    positionClass?: InstanceType<typeof PositionClass> | null;
    @Field(() => Int, {nullable:true})
    positionClassId!: number | null;
    @Field(() => Department, {nullable:true})
    department?: InstanceType<typeof Department> | null;
    @Field(() => Int, {nullable:true})
    departmentId!: number | null;
    @Field(() => Boolean, {nullable:false,defaultValue:false})
    vacant!: boolean;
    @Field(() => Boolean, {nullable:false,defaultValue:false})
    deleted!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}

@ArgsType()
export class UpdateManyPositionArgs {
    @Field(() => PositionUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof PositionUpdateManyMutationInput>;
    @Field(() => PositionWhereInput, {nullable:true})
    where?: InstanceType<typeof PositionWhereInput>;
}

@ArgsType()
export class UpdateOnePositionArgs {
    @Field(() => PositionUpdateInput, {nullable:false})
    data!: InstanceType<typeof PositionUpdateInput>;
    @Field(() => PositionWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionWhereUniqueInput>;
}

@ArgsType()
export class UpsertOnePositionArgs {
    @Field(() => PositionWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionWhereUniqueInput>;
    @Field(() => PositionCreateInput, {nullable:false})
    create!: InstanceType<typeof PositionCreateInput>;
    @Field(() => PositionUpdateInput, {nullable:false})
    update!: InstanceType<typeof PositionUpdateInput>;
}

@ObjectType()
export class AggregatePositionClass {
    @Field(() => PositionClassCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PositionClassCountAggregate>;
    @Field(() => PositionClassAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof PositionClassAvgAggregate>;
    @Field(() => PositionClassSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof PositionClassSumAggregate>;
    @Field(() => PositionClassMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PositionClassMinAggregate>;
    @Field(() => PositionClassMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PositionClassMaxAggregate>;
}

@ArgsType()
export class CreateManyPositionClassArgs {
    @Field(() => [PositionClassCreateManyInput], {nullable:false})
    data!: Array<PositionClassCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOnePositionClassArgs {
    @Field(() => PositionClassCreateInput, {nullable:false})
    data!: InstanceType<typeof PositionClassCreateInput>;
}

@ArgsType()
export class DeleteManyPositionClassArgs {
    @Field(() => PositionClassWhereInput, {nullable:true})
    where?: InstanceType<typeof PositionClassWhereInput>;
}

@ArgsType()
export class DeleteOnePositionClassArgs {
    @Field(() => PositionClassWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionClassWhereUniqueInput>;
}

@ArgsType()
export class FindFirstPositionClassArgs {
    @Field(() => PositionClassWhereInput, {nullable:true})
    where?: InstanceType<typeof PositionClassWhereInput>;
    @Field(() => [PositionClassOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PositionClassOrderByWithRelationInput>;
    @Field(() => PositionClassWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PositionClassWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PositionClassScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PositionClassScalarFieldEnum>;
}

@ArgsType()
export class FindManyPositionClassArgs {
    @Field(() => PositionClassWhereInput, {nullable:true})
    where?: InstanceType<typeof PositionClassWhereInput>;
    @Field(() => [PositionClassOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PositionClassOrderByWithRelationInput>;
    @Field(() => PositionClassWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PositionClassWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PositionClassScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PositionClassScalarFieldEnum>;
}

@ArgsType()
export class FindUniquePositionClassArgs {
    @Field(() => PositionClassWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionClassWhereUniqueInput>;
}

@ArgsType()
export class PositionClassAggregateArgs {
    @Field(() => PositionClassWhereInput, {nullable:true})
    where?: InstanceType<typeof PositionClassWhereInput>;
    @Field(() => [PositionClassOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PositionClassOrderByWithRelationInput>;
    @Field(() => PositionClassWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PositionClassWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PositionClassCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PositionClassCountAggregateInput>;
    @Field(() => PositionClassAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PositionClassAvgAggregateInput>;
    @Field(() => PositionClassSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PositionClassSumAggregateInput>;
    @Field(() => PositionClassMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PositionClassMinAggregateInput>;
    @Field(() => PositionClassMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PositionClassMaxAggregateInput>;
}

@InputType()
export class PositionClassAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    genderId?: true;
    @Field(() => Boolean, {nullable:true})
    positionClassTypeId?: true;
    @Field(() => Boolean, {nullable:true})
    positionClassCategoryId?: true;
    @Field(() => Boolean, {nullable:true})
    salaryScaleId?: true;
    @Field(() => Boolean, {nullable:true})
    minimumAge?: true;
    @Field(() => Boolean, {nullable:true})
    maximumAge?: true;
    @Field(() => Boolean, {nullable:true})
    monthlyWorkingHours?: true;
    @Field(() => Boolean, {nullable:true})
    salary?: true;
}

@ObjectType()
export class PositionClassAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    genderId?: number;
    @Field(() => Float, {nullable:true})
    positionClassTypeId?: number;
    @Field(() => Float, {nullable:true})
    positionClassCategoryId?: number;
    @Field(() => Float, {nullable:true})
    salaryScaleId?: number;
    @Field(() => Float, {nullable:true})
    minimumAge?: number;
    @Field(() => Float, {nullable:true})
    maximumAge?: number;
    @Field(() => GraphQLDecimal, {nullable:true})
    monthlyWorkingHours?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    salary?: any;
}

@InputType()
export class PositionClassAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    genderId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    positionClassTypeId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    positionClassCategoryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    salaryScaleId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    minimumAge?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    maximumAge?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    monthlyWorkingHours?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    salary?: keyof typeof SortOrder;
}

@ObjectType()
export class PositionClassCategoryCount {
    @Field(() => Int, {nullable:false})
    positionClasses!: number;
}

@InputType()
export class PositionClassCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    locales?: true;
    @Field(() => Boolean, {nullable:true})
    genderId?: true;
    @Field(() => Boolean, {nullable:true})
    positionClassTypeId?: true;
    @Field(() => Boolean, {nullable:true})
    positionClassCategoryId?: true;
    @Field(() => Boolean, {nullable:true})
    salaryScaleId?: true;
    @Field(() => Boolean, {nullable:true})
    minimumAge?: true;
    @Field(() => Boolean, {nullable:true})
    maximumAge?: true;
    @Field(() => Boolean, {nullable:true})
    monthlyWorkingHours?: true;
    @Field(() => Boolean, {nullable:true})
    salary?: true;
    @Field(() => Boolean, {nullable:true})
    specification?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class PositionClassCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    code!: number;
    @Field(() => Int, {nullable:false})
    locales!: number;
    @Field(() => Int, {nullable:false})
    genderId!: number;
    @Field(() => Int, {nullable:false})
    positionClassTypeId!: number;
    @Field(() => Int, {nullable:false})
    positionClassCategoryId!: number;
    @Field(() => Int, {nullable:false})
    salaryScaleId!: number;
    @Field(() => Int, {nullable:false})
    minimumAge!: number;
    @Field(() => Int, {nullable:false})
    maximumAge!: number;
    @Field(() => Int, {nullable:false})
    monthlyWorkingHours!: number;
    @Field(() => Int, {nullable:false})
    salary!: number;
    @Field(() => Int, {nullable:false})
    specification!: number;
    @Field(() => Int, {nullable:false})
    deleted!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class PositionClassCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    genderId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    positionClassTypeId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    positionClassCategoryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    salaryScaleId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    minimumAge?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    maximumAge?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    monthlyWorkingHours?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    salary?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    specification?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class PositionClassCount {
    @Field(() => Int, {nullable:false})
    positions!: number;
}

@InputType()
export class PositionClassCreateManyGenderInputEnvelope {
    @Field(() => [PositionClassCreateManyGenderInput], {nullable:false})
    data!: Array<PositionClassCreateManyGenderInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class PositionClassCreateManyGenderInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    positionClassTypeId?: number;
    @Field(() => Int, {nullable:true})
    positionClassCategoryId?: number;
    @Field(() => Int, {nullable:true})
    salaryScaleId?: number;
    @Field(() => Int, {nullable:true})
    minimumAge?: number;
    @Field(() => Int, {nullable:true})
    maximumAge?: number;
    @Field(() => GraphQLDecimal, {nullable:true})
    monthlyWorkingHours?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    salary?: any;
    @Field(() => String, {nullable:true})
    specification?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PositionClassCreateManyPositionClassCategoryInputEnvelope {
    @Field(() => [PositionClassCreateManyPositionClassCategoryInput], {nullable:false})
    data!: Array<PositionClassCreateManyPositionClassCategoryInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class PositionClassCreateManyPositionClassCategoryInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    genderId?: number;
    @Field(() => Int, {nullable:true})
    positionClassTypeId?: number;
    @Field(() => Int, {nullable:true})
    salaryScaleId?: number;
    @Field(() => Int, {nullable:true})
    minimumAge?: number;
    @Field(() => Int, {nullable:true})
    maximumAge?: number;
    @Field(() => GraphQLDecimal, {nullable:true})
    monthlyWorkingHours?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    salary?: any;
    @Field(() => String, {nullable:true})
    specification?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PositionClassCreateManyPositionClassTypeInputEnvelope {
    @Field(() => [PositionClassCreateManyPositionClassTypeInput], {nullable:false})
    data!: Array<PositionClassCreateManyPositionClassTypeInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class PositionClassCreateManyPositionClassTypeInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    genderId?: number;
    @Field(() => Int, {nullable:true})
    positionClassCategoryId?: number;
    @Field(() => Int, {nullable:true})
    salaryScaleId?: number;
    @Field(() => Int, {nullable:true})
    minimumAge?: number;
    @Field(() => Int, {nullable:true})
    maximumAge?: number;
    @Field(() => GraphQLDecimal, {nullable:true})
    monthlyWorkingHours?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    salary?: any;
    @Field(() => String, {nullable:true})
    specification?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PositionClassCreateManySalaryScaleInputEnvelope {
    @Field(() => [PositionClassCreateManySalaryScaleInput], {nullable:false})
    data!: Array<PositionClassCreateManySalaryScaleInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class PositionClassCreateManySalaryScaleInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    genderId?: number;
    @Field(() => Int, {nullable:true})
    positionClassTypeId?: number;
    @Field(() => Int, {nullable:true})
    positionClassCategoryId?: number;
    @Field(() => Int, {nullable:true})
    minimumAge?: number;
    @Field(() => Int, {nullable:true})
    maximumAge?: number;
    @Field(() => GraphQLDecimal, {nullable:true})
    monthlyWorkingHours?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    salary?: any;
    @Field(() => String, {nullable:true})
    specification?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PositionClassCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    genderId?: number;
    @Field(() => Int, {nullable:true})
    positionClassTypeId?: number;
    @Field(() => Int, {nullable:true})
    positionClassCategoryId?: number;
    @Field(() => Int, {nullable:true})
    salaryScaleId?: number;
    @Field(() => Int, {nullable:true})
    minimumAge?: number;
    @Field(() => Int, {nullable:true})
    maximumAge?: number;
    @Field(() => GraphQLDecimal, {nullable:true})
    monthlyWorkingHours?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    salary?: any;
    @Field(() => String, {nullable:true})
    specification?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PositionClassCreateNestedManyWithoutGenderInput {
    @Field(() => [PositionClassCreateWithoutGenderInput], {nullable:true})
    create?: Array<PositionClassCreateWithoutGenderInput>;
    @Field(() => [PositionClassCreateOrConnectWithoutGenderInput], {nullable:true})
    connectOrCreate?: Array<PositionClassCreateOrConnectWithoutGenderInput>;
    @Field(() => PositionClassCreateManyGenderInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PositionClassCreateManyGenderInputEnvelope>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    connect?: Array<PositionClassWhereUniqueInput>;
}

@InputType()
export class PositionClassCreateNestedManyWithoutPositionClassCategoryInput {
    @Field(() => [PositionClassCreateWithoutPositionClassCategoryInput], {nullable:true})
    create?: Array<PositionClassCreateWithoutPositionClassCategoryInput>;
    @Field(() => [PositionClassCreateOrConnectWithoutPositionClassCategoryInput], {nullable:true})
    connectOrCreate?: Array<PositionClassCreateOrConnectWithoutPositionClassCategoryInput>;
    @Field(() => PositionClassCreateManyPositionClassCategoryInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PositionClassCreateManyPositionClassCategoryInputEnvelope>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    connect?: Array<PositionClassWhereUniqueInput>;
}

@InputType()
export class PositionClassCreateNestedManyWithoutPositionClassTypeInput {
    @Field(() => [PositionClassCreateWithoutPositionClassTypeInput], {nullable:true})
    create?: Array<PositionClassCreateWithoutPositionClassTypeInput>;
    @Field(() => [PositionClassCreateOrConnectWithoutPositionClassTypeInput], {nullable:true})
    connectOrCreate?: Array<PositionClassCreateOrConnectWithoutPositionClassTypeInput>;
    @Field(() => PositionClassCreateManyPositionClassTypeInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PositionClassCreateManyPositionClassTypeInputEnvelope>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    connect?: Array<PositionClassWhereUniqueInput>;
}

@InputType()
export class PositionClassCreateNestedManyWithoutSalaryScaleInput {
    @Field(() => [PositionClassCreateWithoutSalaryScaleInput], {nullable:true})
    create?: Array<PositionClassCreateWithoutSalaryScaleInput>;
    @Field(() => [PositionClassCreateOrConnectWithoutSalaryScaleInput], {nullable:true})
    connectOrCreate?: Array<PositionClassCreateOrConnectWithoutSalaryScaleInput>;
    @Field(() => PositionClassCreateManySalaryScaleInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PositionClassCreateManySalaryScaleInputEnvelope>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    connect?: Array<PositionClassWhereUniqueInput>;
}

@InputType()
export class PositionClassCreateNestedOneWithoutPositionsInput {
    @Field(() => PositionClassCreateWithoutPositionsInput, {nullable:true})
    create?: InstanceType<typeof PositionClassCreateWithoutPositionsInput>;
    @Field(() => PositionClassCreateOrConnectWithoutPositionsInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof PositionClassCreateOrConnectWithoutPositionsInput>;
    @Field(() => PositionClassWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof PositionClassWhereUniqueInput>;
}

@InputType()
export class PositionClassCreateOrConnectWithoutGenderInput {
    @Field(() => PositionClassWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionClassWhereUniqueInput>;
    @Field(() => PositionClassCreateWithoutGenderInput, {nullable:false})
    create!: InstanceType<typeof PositionClassCreateWithoutGenderInput>;
}

@InputType()
export class PositionClassCreateOrConnectWithoutPositionClassCategoryInput {
    @Field(() => PositionClassWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionClassWhereUniqueInput>;
    @Field(() => PositionClassCreateWithoutPositionClassCategoryInput, {nullable:false})
    create!: InstanceType<typeof PositionClassCreateWithoutPositionClassCategoryInput>;
}

@InputType()
export class PositionClassCreateOrConnectWithoutPositionClassTypeInput {
    @Field(() => PositionClassWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionClassWhereUniqueInput>;
    @Field(() => PositionClassCreateWithoutPositionClassTypeInput, {nullable:false})
    create!: InstanceType<typeof PositionClassCreateWithoutPositionClassTypeInput>;
}

@InputType()
export class PositionClassCreateOrConnectWithoutPositionsInput {
    @Field(() => PositionClassWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionClassWhereUniqueInput>;
    @Field(() => PositionClassCreateWithoutPositionsInput, {nullable:false})
    create!: InstanceType<typeof PositionClassCreateWithoutPositionsInput>;
}

@InputType()
export class PositionClassCreateOrConnectWithoutSalaryScaleInput {
    @Field(() => PositionClassWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionClassWhereUniqueInput>;
    @Field(() => PositionClassCreateWithoutSalaryScaleInput, {nullable:false})
    create!: InstanceType<typeof PositionClassCreateWithoutSalaryScaleInput>;
}

@InputType()
export class PositionClassCreateWithoutGenderInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    minimumAge?: number;
    @Field(() => Int, {nullable:true})
    maximumAge?: number;
    @Field(() => GraphQLDecimal, {nullable:true})
    monthlyWorkingHours?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    salary?: any;
    @Field(() => String, {nullable:true})
    specification?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PositionClassTypeCreateNestedOneWithoutPositionClassesInput, {nullable:true})
    positionClassType?: InstanceType<typeof PositionClassTypeCreateNestedOneWithoutPositionClassesInput>;
    @Field(() => PositionClassCategoryCreateNestedOneWithoutPositionClassesInput, {nullable:true})
    positionClassCategory?: InstanceType<typeof PositionClassCategoryCreateNestedOneWithoutPositionClassesInput>;
    @Field(() => SalaryScaleCreateNestedOneWithoutPositionClassesInput, {nullable:true})
    salaryScale?: InstanceType<typeof SalaryScaleCreateNestedOneWithoutPositionClassesInput>;
    @Field(() => PositionCreateNestedManyWithoutPositionClassInput, {nullable:true})
    positions?: InstanceType<typeof PositionCreateNestedManyWithoutPositionClassInput>;
}

@InputType()
export class PositionClassCreateWithoutPositionClassCategoryInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    minimumAge?: number;
    @Field(() => Int, {nullable:true})
    maximumAge?: number;
    @Field(() => GraphQLDecimal, {nullable:true})
    monthlyWorkingHours?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    salary?: any;
    @Field(() => String, {nullable:true})
    specification?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => GenderCreateNestedOneWithoutPositionClassesInput, {nullable:true})
    gender?: InstanceType<typeof GenderCreateNestedOneWithoutPositionClassesInput>;
    @Field(() => PositionClassTypeCreateNestedOneWithoutPositionClassesInput, {nullable:true})
    positionClassType?: InstanceType<typeof PositionClassTypeCreateNestedOneWithoutPositionClassesInput>;
    @Field(() => SalaryScaleCreateNestedOneWithoutPositionClassesInput, {nullable:true})
    salaryScale?: InstanceType<typeof SalaryScaleCreateNestedOneWithoutPositionClassesInput>;
    @Field(() => PositionCreateNestedManyWithoutPositionClassInput, {nullable:true})
    positions?: InstanceType<typeof PositionCreateNestedManyWithoutPositionClassInput>;
}

@InputType()
export class PositionClassCreateWithoutPositionClassTypeInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    minimumAge?: number;
    @Field(() => Int, {nullable:true})
    maximumAge?: number;
    @Field(() => GraphQLDecimal, {nullable:true})
    monthlyWorkingHours?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    salary?: any;
    @Field(() => String, {nullable:true})
    specification?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => GenderCreateNestedOneWithoutPositionClassesInput, {nullable:true})
    gender?: InstanceType<typeof GenderCreateNestedOneWithoutPositionClassesInput>;
    @Field(() => PositionClassCategoryCreateNestedOneWithoutPositionClassesInput, {nullable:true})
    positionClassCategory?: InstanceType<typeof PositionClassCategoryCreateNestedOneWithoutPositionClassesInput>;
    @Field(() => SalaryScaleCreateNestedOneWithoutPositionClassesInput, {nullable:true})
    salaryScale?: InstanceType<typeof SalaryScaleCreateNestedOneWithoutPositionClassesInput>;
    @Field(() => PositionCreateNestedManyWithoutPositionClassInput, {nullable:true})
    positions?: InstanceType<typeof PositionCreateNestedManyWithoutPositionClassInput>;
}

@InputType()
export class PositionClassCreateWithoutPositionsInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    minimumAge?: number;
    @Field(() => Int, {nullable:true})
    maximumAge?: number;
    @Field(() => GraphQLDecimal, {nullable:true})
    monthlyWorkingHours?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    salary?: any;
    @Field(() => String, {nullable:true})
    specification?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => GenderCreateNestedOneWithoutPositionClassesInput, {nullable:true})
    gender?: InstanceType<typeof GenderCreateNestedOneWithoutPositionClassesInput>;
    @Field(() => PositionClassTypeCreateNestedOneWithoutPositionClassesInput, {nullable:true})
    positionClassType?: InstanceType<typeof PositionClassTypeCreateNestedOneWithoutPositionClassesInput>;
    @Field(() => PositionClassCategoryCreateNestedOneWithoutPositionClassesInput, {nullable:true})
    positionClassCategory?: InstanceType<typeof PositionClassCategoryCreateNestedOneWithoutPositionClassesInput>;
    @Field(() => SalaryScaleCreateNestedOneWithoutPositionClassesInput, {nullable:true})
    salaryScale?: InstanceType<typeof SalaryScaleCreateNestedOneWithoutPositionClassesInput>;
}

@InputType()
export class PositionClassCreateWithoutSalaryScaleInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    minimumAge?: number;
    @Field(() => Int, {nullable:true})
    maximumAge?: number;
    @Field(() => GraphQLDecimal, {nullable:true})
    monthlyWorkingHours?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    salary?: any;
    @Field(() => String, {nullable:true})
    specification?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => GenderCreateNestedOneWithoutPositionClassesInput, {nullable:true})
    gender?: InstanceType<typeof GenderCreateNestedOneWithoutPositionClassesInput>;
    @Field(() => PositionClassTypeCreateNestedOneWithoutPositionClassesInput, {nullable:true})
    positionClassType?: InstanceType<typeof PositionClassTypeCreateNestedOneWithoutPositionClassesInput>;
    @Field(() => PositionClassCategoryCreateNestedOneWithoutPositionClassesInput, {nullable:true})
    positionClassCategory?: InstanceType<typeof PositionClassCategoryCreateNestedOneWithoutPositionClassesInput>;
    @Field(() => PositionCreateNestedManyWithoutPositionClassInput, {nullable:true})
    positions?: InstanceType<typeof PositionCreateNestedManyWithoutPositionClassInput>;
}

@InputType()
export class PositionClassCreateInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    minimumAge?: number;
    @Field(() => Int, {nullable:true})
    maximumAge?: number;
    @Field(() => GraphQLDecimal, {nullable:true})
    monthlyWorkingHours?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    salary?: any;
    @Field(() => String, {nullable:true})
    specification?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => GenderCreateNestedOneWithoutPositionClassesInput, {nullable:true})
    gender?: InstanceType<typeof GenderCreateNestedOneWithoutPositionClassesInput>;
    @Field(() => PositionClassTypeCreateNestedOneWithoutPositionClassesInput, {nullable:true})
    positionClassType?: InstanceType<typeof PositionClassTypeCreateNestedOneWithoutPositionClassesInput>;
    @Field(() => PositionClassCategoryCreateNestedOneWithoutPositionClassesInput, {nullable:true})
    positionClassCategory?: InstanceType<typeof PositionClassCategoryCreateNestedOneWithoutPositionClassesInput>;
    @Field(() => SalaryScaleCreateNestedOneWithoutPositionClassesInput, {nullable:true})
    salaryScale?: InstanceType<typeof SalaryScaleCreateNestedOneWithoutPositionClassesInput>;
    @Field(() => PositionCreateNestedManyWithoutPositionClassInput, {nullable:true})
    positions?: InstanceType<typeof PositionCreateNestedManyWithoutPositionClassInput>;
}

@ArgsType()
export class PositionClassGroupByArgs {
    @Field(() => PositionClassWhereInput, {nullable:true})
    where?: InstanceType<typeof PositionClassWhereInput>;
    @Field(() => [PositionClassOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PositionClassOrderByWithAggregationInput>;
    @Field(() => [PositionClassScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PositionClassScalarFieldEnum>;
    @Field(() => PositionClassScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof PositionClassScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PositionClassCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PositionClassCountAggregateInput>;
    @Field(() => PositionClassAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PositionClassAvgAggregateInput>;
    @Field(() => PositionClassSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PositionClassSumAggregateInput>;
    @Field(() => PositionClassMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PositionClassMinAggregateInput>;
    @Field(() => PositionClassMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PositionClassMaxAggregateInput>;
}

@ObjectType()
export class PositionClassGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    genderId?: number;
    @Field(() => Int, {nullable:true})
    positionClassTypeId?: number;
    @Field(() => Int, {nullable:true})
    positionClassCategoryId?: number;
    @Field(() => Int, {nullable:true})
    salaryScaleId?: number;
    @Field(() => Int, {nullable:false})
    minimumAge!: number;
    @Field(() => Int, {nullable:false})
    maximumAge!: number;
    @Field(() => GraphQLDecimal, {nullable:false})
    monthlyWorkingHours!: any;
    @Field(() => GraphQLDecimal, {nullable:false})
    salary!: any;
    @Field(() => String, {nullable:true})
    specification?: string;
    @Field(() => Boolean, {nullable:false})
    deleted!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => PositionClassCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PositionClassCountAggregate>;
    @Field(() => PositionClassAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof PositionClassAvgAggregate>;
    @Field(() => PositionClassSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof PositionClassSumAggregate>;
    @Field(() => PositionClassMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PositionClassMinAggregate>;
    @Field(() => PositionClassMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PositionClassMaxAggregate>;
}

@InputType()
export class PositionClassListRelationFilter {
    @Field(() => PositionClassWhereInput, {nullable:true})
    every?: InstanceType<typeof PositionClassWhereInput>;
    @Field(() => PositionClassWhereInput, {nullable:true})
    some?: InstanceType<typeof PositionClassWhereInput>;
    @Field(() => PositionClassWhereInput, {nullable:true})
    none?: InstanceType<typeof PositionClassWhereInput>;
}

@InputType()
export class PositionClassMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    genderId?: true;
    @Field(() => Boolean, {nullable:true})
    positionClassTypeId?: true;
    @Field(() => Boolean, {nullable:true})
    positionClassCategoryId?: true;
    @Field(() => Boolean, {nullable:true})
    salaryScaleId?: true;
    @Field(() => Boolean, {nullable:true})
    minimumAge?: true;
    @Field(() => Boolean, {nullable:true})
    maximumAge?: true;
    @Field(() => Boolean, {nullable:true})
    monthlyWorkingHours?: true;
    @Field(() => Boolean, {nullable:true})
    salary?: true;
    @Field(() => Boolean, {nullable:true})
    specification?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class PositionClassMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    code?: string;
    @Field(() => Int, {nullable:true})
    genderId?: number;
    @Field(() => Int, {nullable:true})
    positionClassTypeId?: number;
    @Field(() => Int, {nullable:true})
    positionClassCategoryId?: number;
    @Field(() => Int, {nullable:true})
    salaryScaleId?: number;
    @Field(() => Int, {nullable:true})
    minimumAge?: number;
    @Field(() => Int, {nullable:true})
    maximumAge?: number;
    @Field(() => GraphQLDecimal, {nullable:true})
    monthlyWorkingHours?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    salary?: any;
    @Field(() => String, {nullable:true})
    specification?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PositionClassMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    genderId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    positionClassTypeId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    positionClassCategoryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    salaryScaleId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    minimumAge?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    maximumAge?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    monthlyWorkingHours?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    salary?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    specification?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PositionClassMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    genderId?: true;
    @Field(() => Boolean, {nullable:true})
    positionClassTypeId?: true;
    @Field(() => Boolean, {nullable:true})
    positionClassCategoryId?: true;
    @Field(() => Boolean, {nullable:true})
    salaryScaleId?: true;
    @Field(() => Boolean, {nullable:true})
    minimumAge?: true;
    @Field(() => Boolean, {nullable:true})
    maximumAge?: true;
    @Field(() => Boolean, {nullable:true})
    monthlyWorkingHours?: true;
    @Field(() => Boolean, {nullable:true})
    salary?: true;
    @Field(() => Boolean, {nullable:true})
    specification?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class PositionClassMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    code?: string;
    @Field(() => Int, {nullable:true})
    genderId?: number;
    @Field(() => Int, {nullable:true})
    positionClassTypeId?: number;
    @Field(() => Int, {nullable:true})
    positionClassCategoryId?: number;
    @Field(() => Int, {nullable:true})
    salaryScaleId?: number;
    @Field(() => Int, {nullable:true})
    minimumAge?: number;
    @Field(() => Int, {nullable:true})
    maximumAge?: number;
    @Field(() => GraphQLDecimal, {nullable:true})
    monthlyWorkingHours?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    salary?: any;
    @Field(() => String, {nullable:true})
    specification?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PositionClassMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    genderId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    positionClassTypeId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    positionClassCategoryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    salaryScaleId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    minimumAge?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    maximumAge?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    monthlyWorkingHours?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    salary?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    specification?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PositionClassOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class PositionClassOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    genderId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    positionClassTypeId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    positionClassCategoryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    salaryScaleId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    minimumAge?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    maximumAge?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    monthlyWorkingHours?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    salary?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    specification?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => PositionClassCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PositionClassCountOrderByAggregateInput>;
    @Field(() => PositionClassAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PositionClassAvgOrderByAggregateInput>;
    @Field(() => PositionClassMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PositionClassMaxOrderByAggregateInput>;
    @Field(() => PositionClassMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PositionClassMinOrderByAggregateInput>;
    @Field(() => PositionClassSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PositionClassSumOrderByAggregateInput>;
}

@InputType()
export class PositionClassOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => GenderOrderByWithRelationInput, {nullable:true})
    gender?: InstanceType<typeof GenderOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    genderId?: keyof typeof SortOrder;
    @Field(() => PositionClassTypeOrderByWithRelationInput, {nullable:true})
    positionClassType?: InstanceType<typeof PositionClassTypeOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    positionClassTypeId?: keyof typeof SortOrder;
    @Field(() => PositionClassCategoryOrderByWithRelationInput, {nullable:true})
    positionClassCategory?: InstanceType<typeof PositionClassCategoryOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    positionClassCategoryId?: keyof typeof SortOrder;
    @Field(() => SalaryScaleOrderByWithRelationInput, {nullable:true})
    salaryScale?: InstanceType<typeof SalaryScaleOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    salaryScaleId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    minimumAge?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    maximumAge?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    monthlyWorkingHours?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    salary?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    specification?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => PositionOrderByRelationAggregateInput, {nullable:true})
    positions?: InstanceType<typeof PositionOrderByRelationAggregateInput>;
}

@InputType()
export class PositionClassRelationFilter {
    @Field(() => PositionClassWhereInput, {nullable:true})
    is?: InstanceType<typeof PositionClassWhereInput>;
    @Field(() => PositionClassWhereInput, {nullable:true})
    isNot?: InstanceType<typeof PositionClassWhereInput>;
}

@InputType()
export class PositionClassScalarWhereWithAggregatesInput {
    @Field(() => [PositionClassScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PositionClassScalarWhereWithAggregatesInput>;
    @Field(() => [PositionClassScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PositionClassScalarWhereWithAggregatesInput>;
    @Field(() => [PositionClassScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PositionClassScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    locales?: InstanceType<typeof JsonNullableWithAggregatesFilter>;
    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    genderId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    positionClassTypeId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    positionClassCategoryId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    salaryScaleId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    minimumAge?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    maximumAge?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    monthlyWorkingHours?: InstanceType<typeof DecimalWithAggregatesFilter>;
    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    salary?: InstanceType<typeof DecimalWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    specification?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    deleted?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class PositionClassScalarWhereInput {
    @Field(() => [PositionClassScalarWhereInput], {nullable:true})
    AND?: Array<PositionClassScalarWhereInput>;
    @Field(() => [PositionClassScalarWhereInput], {nullable:true})
    OR?: Array<PositionClassScalarWhereInput>;
    @Field(() => [PositionClassScalarWhereInput], {nullable:true})
    NOT?: Array<PositionClassScalarWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    code?: InstanceType<typeof StringFilter>;
    @Field(() => JsonNullableFilter, {nullable:true})
    locales?: InstanceType<typeof JsonNullableFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    genderId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    positionClassTypeId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    positionClassCategoryId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    salaryScaleId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => IntFilter, {nullable:true})
    minimumAge?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    maximumAge?: InstanceType<typeof IntFilter>;
    @Field(() => DecimalFilter, {nullable:true})
    monthlyWorkingHours?: InstanceType<typeof DecimalFilter>;
    @Field(() => DecimalFilter, {nullable:true})
    salary?: InstanceType<typeof DecimalFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    specification?: InstanceType<typeof StringNullableFilter>;
    @Field(() => BoolFilter, {nullable:true})
    deleted?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class PositionClassSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    genderId?: true;
    @Field(() => Boolean, {nullable:true})
    positionClassTypeId?: true;
    @Field(() => Boolean, {nullable:true})
    positionClassCategoryId?: true;
    @Field(() => Boolean, {nullable:true})
    salaryScaleId?: true;
    @Field(() => Boolean, {nullable:true})
    minimumAge?: true;
    @Field(() => Boolean, {nullable:true})
    maximumAge?: true;
    @Field(() => Boolean, {nullable:true})
    monthlyWorkingHours?: true;
    @Field(() => Boolean, {nullable:true})
    salary?: true;
}

@ObjectType()
export class PositionClassSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    genderId?: number;
    @Field(() => Int, {nullable:true})
    positionClassTypeId?: number;
    @Field(() => Int, {nullable:true})
    positionClassCategoryId?: number;
    @Field(() => Int, {nullable:true})
    salaryScaleId?: number;
    @Field(() => Int, {nullable:true})
    minimumAge?: number;
    @Field(() => Int, {nullable:true})
    maximumAge?: number;
    @Field(() => GraphQLDecimal, {nullable:true})
    monthlyWorkingHours?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    salary?: any;
}

@InputType()
export class PositionClassSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    genderId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    positionClassTypeId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    positionClassCategoryId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    salaryScaleId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    minimumAge?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    maximumAge?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    monthlyWorkingHours?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    salary?: keyof typeof SortOrder;
}

@InputType()
export class PositionClassUncheckedCreateNestedManyWithoutGenderInput {
    @Field(() => [PositionClassCreateWithoutGenderInput], {nullable:true})
    create?: Array<PositionClassCreateWithoutGenderInput>;
    @Field(() => [PositionClassCreateOrConnectWithoutGenderInput], {nullable:true})
    connectOrCreate?: Array<PositionClassCreateOrConnectWithoutGenderInput>;
    @Field(() => PositionClassCreateManyGenderInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PositionClassCreateManyGenderInputEnvelope>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    connect?: Array<PositionClassWhereUniqueInput>;
}

@InputType()
export class PositionClassUncheckedCreateNestedManyWithoutPositionClassCategoryInput {
    @Field(() => [PositionClassCreateWithoutPositionClassCategoryInput], {nullable:true})
    create?: Array<PositionClassCreateWithoutPositionClassCategoryInput>;
    @Field(() => [PositionClassCreateOrConnectWithoutPositionClassCategoryInput], {nullable:true})
    connectOrCreate?: Array<PositionClassCreateOrConnectWithoutPositionClassCategoryInput>;
    @Field(() => PositionClassCreateManyPositionClassCategoryInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PositionClassCreateManyPositionClassCategoryInputEnvelope>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    connect?: Array<PositionClassWhereUniqueInput>;
}

@InputType()
export class PositionClassUncheckedCreateNestedManyWithoutPositionClassTypeInput {
    @Field(() => [PositionClassCreateWithoutPositionClassTypeInput], {nullable:true})
    create?: Array<PositionClassCreateWithoutPositionClassTypeInput>;
    @Field(() => [PositionClassCreateOrConnectWithoutPositionClassTypeInput], {nullable:true})
    connectOrCreate?: Array<PositionClassCreateOrConnectWithoutPositionClassTypeInput>;
    @Field(() => PositionClassCreateManyPositionClassTypeInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PositionClassCreateManyPositionClassTypeInputEnvelope>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    connect?: Array<PositionClassWhereUniqueInput>;
}

@InputType()
export class PositionClassUncheckedCreateNestedManyWithoutSalaryScaleInput {
    @Field(() => [PositionClassCreateWithoutSalaryScaleInput], {nullable:true})
    create?: Array<PositionClassCreateWithoutSalaryScaleInput>;
    @Field(() => [PositionClassCreateOrConnectWithoutSalaryScaleInput], {nullable:true})
    connectOrCreate?: Array<PositionClassCreateOrConnectWithoutSalaryScaleInput>;
    @Field(() => PositionClassCreateManySalaryScaleInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PositionClassCreateManySalaryScaleInputEnvelope>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    connect?: Array<PositionClassWhereUniqueInput>;
}

@InputType()
export class PositionClassUncheckedCreateWithoutGenderInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    positionClassTypeId?: number;
    @Field(() => Int, {nullable:true})
    positionClassCategoryId?: number;
    @Field(() => Int, {nullable:true})
    salaryScaleId?: number;
    @Field(() => Int, {nullable:true})
    minimumAge?: number;
    @Field(() => Int, {nullable:true})
    maximumAge?: number;
    @Field(() => GraphQLDecimal, {nullable:true})
    monthlyWorkingHours?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    salary?: any;
    @Field(() => String, {nullable:true})
    specification?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PositionUncheckedCreateNestedManyWithoutPositionClassInput, {nullable:true})
    positions?: InstanceType<typeof PositionUncheckedCreateNestedManyWithoutPositionClassInput>;
}

@InputType()
export class PositionClassUncheckedCreateWithoutPositionClassCategoryInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    genderId?: number;
    @Field(() => Int, {nullable:true})
    positionClassTypeId?: number;
    @Field(() => Int, {nullable:true})
    salaryScaleId?: number;
    @Field(() => Int, {nullable:true})
    minimumAge?: number;
    @Field(() => Int, {nullable:true})
    maximumAge?: number;
    @Field(() => GraphQLDecimal, {nullable:true})
    monthlyWorkingHours?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    salary?: any;
    @Field(() => String, {nullable:true})
    specification?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PositionUncheckedCreateNestedManyWithoutPositionClassInput, {nullable:true})
    positions?: InstanceType<typeof PositionUncheckedCreateNestedManyWithoutPositionClassInput>;
}

@InputType()
export class PositionClassUncheckedCreateWithoutPositionClassTypeInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    genderId?: number;
    @Field(() => Int, {nullable:true})
    positionClassCategoryId?: number;
    @Field(() => Int, {nullable:true})
    salaryScaleId?: number;
    @Field(() => Int, {nullable:true})
    minimumAge?: number;
    @Field(() => Int, {nullable:true})
    maximumAge?: number;
    @Field(() => GraphQLDecimal, {nullable:true})
    monthlyWorkingHours?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    salary?: any;
    @Field(() => String, {nullable:true})
    specification?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PositionUncheckedCreateNestedManyWithoutPositionClassInput, {nullable:true})
    positions?: InstanceType<typeof PositionUncheckedCreateNestedManyWithoutPositionClassInput>;
}

@InputType()
export class PositionClassUncheckedCreateWithoutPositionsInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    genderId?: number;
    @Field(() => Int, {nullable:true})
    positionClassTypeId?: number;
    @Field(() => Int, {nullable:true})
    positionClassCategoryId?: number;
    @Field(() => Int, {nullable:true})
    salaryScaleId?: number;
    @Field(() => Int, {nullable:true})
    minimumAge?: number;
    @Field(() => Int, {nullable:true})
    maximumAge?: number;
    @Field(() => GraphQLDecimal, {nullable:true})
    monthlyWorkingHours?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    salary?: any;
    @Field(() => String, {nullable:true})
    specification?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PositionClassUncheckedCreateWithoutSalaryScaleInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    genderId?: number;
    @Field(() => Int, {nullable:true})
    positionClassTypeId?: number;
    @Field(() => Int, {nullable:true})
    positionClassCategoryId?: number;
    @Field(() => Int, {nullable:true})
    minimumAge?: number;
    @Field(() => Int, {nullable:true})
    maximumAge?: number;
    @Field(() => GraphQLDecimal, {nullable:true})
    monthlyWorkingHours?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    salary?: any;
    @Field(() => String, {nullable:true})
    specification?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PositionUncheckedCreateNestedManyWithoutPositionClassInput, {nullable:true})
    positions?: InstanceType<typeof PositionUncheckedCreateNestedManyWithoutPositionClassInput>;
}

@InputType()
export class PositionClassUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Int, {nullable:true})
    genderId?: number;
    @Field(() => Int, {nullable:true})
    positionClassTypeId?: number;
    @Field(() => Int, {nullable:true})
    positionClassCategoryId?: number;
    @Field(() => Int, {nullable:true})
    salaryScaleId?: number;
    @Field(() => Int, {nullable:true})
    minimumAge?: number;
    @Field(() => Int, {nullable:true})
    maximumAge?: number;
    @Field(() => GraphQLDecimal, {nullable:true})
    monthlyWorkingHours?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    salary?: any;
    @Field(() => String, {nullable:true})
    specification?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PositionUncheckedCreateNestedManyWithoutPositionClassInput, {nullable:true})
    positions?: InstanceType<typeof PositionUncheckedCreateNestedManyWithoutPositionClassInput>;
}

@InputType()
export class PositionClassUncheckedUpdateManyWithoutGenderInput {
    @Field(() => [PositionClassCreateWithoutGenderInput], {nullable:true})
    create?: Array<PositionClassCreateWithoutGenderInput>;
    @Field(() => [PositionClassCreateOrConnectWithoutGenderInput], {nullable:true})
    connectOrCreate?: Array<PositionClassCreateOrConnectWithoutGenderInput>;
    @Field(() => [PositionClassUpsertWithWhereUniqueWithoutGenderInput], {nullable:true})
    upsert?: Array<PositionClassUpsertWithWhereUniqueWithoutGenderInput>;
    @Field(() => PositionClassCreateManyGenderInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PositionClassCreateManyGenderInputEnvelope>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    connect?: Array<PositionClassWhereUniqueInput>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    set?: Array<PositionClassWhereUniqueInput>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    disconnect?: Array<PositionClassWhereUniqueInput>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    delete?: Array<PositionClassWhereUniqueInput>;
    @Field(() => [PositionClassUpdateWithWhereUniqueWithoutGenderInput], {nullable:true})
    update?: Array<PositionClassUpdateWithWhereUniqueWithoutGenderInput>;
    @Field(() => [PositionClassUpdateManyWithWhereWithoutGenderInput], {nullable:true})
    updateMany?: Array<PositionClassUpdateManyWithWhereWithoutGenderInput>;
    @Field(() => [PositionClassScalarWhereInput], {nullable:true})
    deleteMany?: Array<PositionClassScalarWhereInput>;
}

@InputType()
export class PositionClassUncheckedUpdateManyWithoutPositionClassCategoryInput {
    @Field(() => [PositionClassCreateWithoutPositionClassCategoryInput], {nullable:true})
    create?: Array<PositionClassCreateWithoutPositionClassCategoryInput>;
    @Field(() => [PositionClassCreateOrConnectWithoutPositionClassCategoryInput], {nullable:true})
    connectOrCreate?: Array<PositionClassCreateOrConnectWithoutPositionClassCategoryInput>;
    @Field(() => [PositionClassUpsertWithWhereUniqueWithoutPositionClassCategoryInput], {nullable:true})
    upsert?: Array<PositionClassUpsertWithWhereUniqueWithoutPositionClassCategoryInput>;
    @Field(() => PositionClassCreateManyPositionClassCategoryInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PositionClassCreateManyPositionClassCategoryInputEnvelope>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    connect?: Array<PositionClassWhereUniqueInput>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    set?: Array<PositionClassWhereUniqueInput>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    disconnect?: Array<PositionClassWhereUniqueInput>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    delete?: Array<PositionClassWhereUniqueInput>;
    @Field(() => [PositionClassUpdateWithWhereUniqueWithoutPositionClassCategoryInput], {nullable:true})
    update?: Array<PositionClassUpdateWithWhereUniqueWithoutPositionClassCategoryInput>;
    @Field(() => [PositionClassUpdateManyWithWhereWithoutPositionClassCategoryInput], {nullable:true})
    updateMany?: Array<PositionClassUpdateManyWithWhereWithoutPositionClassCategoryInput>;
    @Field(() => [PositionClassScalarWhereInput], {nullable:true})
    deleteMany?: Array<PositionClassScalarWhereInput>;
}

@InputType()
export class PositionClassUncheckedUpdateManyWithoutPositionClassTypeInput {
    @Field(() => [PositionClassCreateWithoutPositionClassTypeInput], {nullable:true})
    create?: Array<PositionClassCreateWithoutPositionClassTypeInput>;
    @Field(() => [PositionClassCreateOrConnectWithoutPositionClassTypeInput], {nullable:true})
    connectOrCreate?: Array<PositionClassCreateOrConnectWithoutPositionClassTypeInput>;
    @Field(() => [PositionClassUpsertWithWhereUniqueWithoutPositionClassTypeInput], {nullable:true})
    upsert?: Array<PositionClassUpsertWithWhereUniqueWithoutPositionClassTypeInput>;
    @Field(() => PositionClassCreateManyPositionClassTypeInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PositionClassCreateManyPositionClassTypeInputEnvelope>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    connect?: Array<PositionClassWhereUniqueInput>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    set?: Array<PositionClassWhereUniqueInput>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    disconnect?: Array<PositionClassWhereUniqueInput>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    delete?: Array<PositionClassWhereUniqueInput>;
    @Field(() => [PositionClassUpdateWithWhereUniqueWithoutPositionClassTypeInput], {nullable:true})
    update?: Array<PositionClassUpdateWithWhereUniqueWithoutPositionClassTypeInput>;
    @Field(() => [PositionClassUpdateManyWithWhereWithoutPositionClassTypeInput], {nullable:true})
    updateMany?: Array<PositionClassUpdateManyWithWhereWithoutPositionClassTypeInput>;
    @Field(() => [PositionClassScalarWhereInput], {nullable:true})
    deleteMany?: Array<PositionClassScalarWhereInput>;
}

@InputType()
export class PositionClassUncheckedUpdateManyWithoutPositionClassesInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    positionClassTypeId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    positionClassCategoryId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    salaryScaleId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    minimumAge?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    maximumAge?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    monthlyWorkingHours?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    salary?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    specification?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PositionClassUncheckedUpdateManyWithoutSalaryScaleInput {
    @Field(() => [PositionClassCreateWithoutSalaryScaleInput], {nullable:true})
    create?: Array<PositionClassCreateWithoutSalaryScaleInput>;
    @Field(() => [PositionClassCreateOrConnectWithoutSalaryScaleInput], {nullable:true})
    connectOrCreate?: Array<PositionClassCreateOrConnectWithoutSalaryScaleInput>;
    @Field(() => [PositionClassUpsertWithWhereUniqueWithoutSalaryScaleInput], {nullable:true})
    upsert?: Array<PositionClassUpsertWithWhereUniqueWithoutSalaryScaleInput>;
    @Field(() => PositionClassCreateManySalaryScaleInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PositionClassCreateManySalaryScaleInputEnvelope>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    connect?: Array<PositionClassWhereUniqueInput>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    set?: Array<PositionClassWhereUniqueInput>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    disconnect?: Array<PositionClassWhereUniqueInput>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    delete?: Array<PositionClassWhereUniqueInput>;
    @Field(() => [PositionClassUpdateWithWhereUniqueWithoutSalaryScaleInput], {nullable:true})
    update?: Array<PositionClassUpdateWithWhereUniqueWithoutSalaryScaleInput>;
    @Field(() => [PositionClassUpdateManyWithWhereWithoutSalaryScaleInput], {nullable:true})
    updateMany?: Array<PositionClassUpdateManyWithWhereWithoutSalaryScaleInput>;
    @Field(() => [PositionClassScalarWhereInput], {nullable:true})
    deleteMany?: Array<PositionClassScalarWhereInput>;
}

@InputType()
export class PositionClassUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    genderId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    positionClassTypeId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    positionClassCategoryId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    salaryScaleId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    minimumAge?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    maximumAge?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    monthlyWorkingHours?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    salary?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    specification?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PositionClassUncheckedUpdateWithoutGenderInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    positionClassTypeId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    positionClassCategoryId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    salaryScaleId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    minimumAge?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    maximumAge?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    monthlyWorkingHours?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    salary?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    specification?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PositionUncheckedUpdateManyWithoutPositionClassInput, {nullable:true})
    positions?: InstanceType<typeof PositionUncheckedUpdateManyWithoutPositionClassInput>;
}

@InputType()
export class PositionClassUncheckedUpdateWithoutPositionClassCategoryInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    genderId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    positionClassTypeId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    salaryScaleId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    minimumAge?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    maximumAge?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    monthlyWorkingHours?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    salary?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    specification?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PositionUncheckedUpdateManyWithoutPositionClassInput, {nullable:true})
    positions?: InstanceType<typeof PositionUncheckedUpdateManyWithoutPositionClassInput>;
}

@InputType()
export class PositionClassUncheckedUpdateWithoutPositionClassTypeInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    genderId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    positionClassCategoryId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    salaryScaleId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    minimumAge?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    maximumAge?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    monthlyWorkingHours?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    salary?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    specification?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PositionUncheckedUpdateManyWithoutPositionClassInput, {nullable:true})
    positions?: InstanceType<typeof PositionUncheckedUpdateManyWithoutPositionClassInput>;
}

@InputType()
export class PositionClassUncheckedUpdateWithoutPositionsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    genderId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    positionClassTypeId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    positionClassCategoryId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    salaryScaleId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    minimumAge?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    maximumAge?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    monthlyWorkingHours?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    salary?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    specification?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PositionClassUncheckedUpdateWithoutSalaryScaleInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    genderId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    positionClassTypeId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    positionClassCategoryId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    minimumAge?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    maximumAge?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    monthlyWorkingHours?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    salary?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    specification?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PositionUncheckedUpdateManyWithoutPositionClassInput, {nullable:true})
    positions?: InstanceType<typeof PositionUncheckedUpdateManyWithoutPositionClassInput>;
}

@InputType()
export class PositionClassUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    genderId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    positionClassTypeId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    positionClassCategoryId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    salaryScaleId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    minimumAge?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    maximumAge?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    monthlyWorkingHours?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    salary?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    specification?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PositionUncheckedUpdateManyWithoutPositionClassInput, {nullable:true})
    positions?: InstanceType<typeof PositionUncheckedUpdateManyWithoutPositionClassInput>;
}

@InputType()
export class PositionClassUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    minimumAge?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    maximumAge?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    monthlyWorkingHours?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    salary?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    specification?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PositionClassUpdateManyWithWhereWithoutGenderInput {
    @Field(() => PositionClassScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof PositionClassScalarWhereInput>;
    @Field(() => PositionClassUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof PositionClassUpdateManyMutationInput>;
}

@InputType()
export class PositionClassUpdateManyWithWhereWithoutPositionClassCategoryInput {
    @Field(() => PositionClassScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof PositionClassScalarWhereInput>;
    @Field(() => PositionClassUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof PositionClassUpdateManyMutationInput>;
}

@InputType()
export class PositionClassUpdateManyWithWhereWithoutPositionClassTypeInput {
    @Field(() => PositionClassScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof PositionClassScalarWhereInput>;
    @Field(() => PositionClassUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof PositionClassUpdateManyMutationInput>;
}

@InputType()
export class PositionClassUpdateManyWithWhereWithoutSalaryScaleInput {
    @Field(() => PositionClassScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof PositionClassScalarWhereInput>;
    @Field(() => PositionClassUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof PositionClassUpdateManyMutationInput>;
}

@InputType()
export class PositionClassUpdateManyWithoutGenderInput {
    @Field(() => [PositionClassCreateWithoutGenderInput], {nullable:true})
    create?: Array<PositionClassCreateWithoutGenderInput>;
    @Field(() => [PositionClassCreateOrConnectWithoutGenderInput], {nullable:true})
    connectOrCreate?: Array<PositionClassCreateOrConnectWithoutGenderInput>;
    @Field(() => [PositionClassUpsertWithWhereUniqueWithoutGenderInput], {nullable:true})
    upsert?: Array<PositionClassUpsertWithWhereUniqueWithoutGenderInput>;
    @Field(() => PositionClassCreateManyGenderInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PositionClassCreateManyGenderInputEnvelope>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    connect?: Array<PositionClassWhereUniqueInput>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    set?: Array<PositionClassWhereUniqueInput>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    disconnect?: Array<PositionClassWhereUniqueInput>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    delete?: Array<PositionClassWhereUniqueInput>;
    @Field(() => [PositionClassUpdateWithWhereUniqueWithoutGenderInput], {nullable:true})
    update?: Array<PositionClassUpdateWithWhereUniqueWithoutGenderInput>;
    @Field(() => [PositionClassUpdateManyWithWhereWithoutGenderInput], {nullable:true})
    updateMany?: Array<PositionClassUpdateManyWithWhereWithoutGenderInput>;
    @Field(() => [PositionClassScalarWhereInput], {nullable:true})
    deleteMany?: Array<PositionClassScalarWhereInput>;
}

@InputType()
export class PositionClassUpdateManyWithoutPositionClassCategoryInput {
    @Field(() => [PositionClassCreateWithoutPositionClassCategoryInput], {nullable:true})
    create?: Array<PositionClassCreateWithoutPositionClassCategoryInput>;
    @Field(() => [PositionClassCreateOrConnectWithoutPositionClassCategoryInput], {nullable:true})
    connectOrCreate?: Array<PositionClassCreateOrConnectWithoutPositionClassCategoryInput>;
    @Field(() => [PositionClassUpsertWithWhereUniqueWithoutPositionClassCategoryInput], {nullable:true})
    upsert?: Array<PositionClassUpsertWithWhereUniqueWithoutPositionClassCategoryInput>;
    @Field(() => PositionClassCreateManyPositionClassCategoryInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PositionClassCreateManyPositionClassCategoryInputEnvelope>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    connect?: Array<PositionClassWhereUniqueInput>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    set?: Array<PositionClassWhereUniqueInput>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    disconnect?: Array<PositionClassWhereUniqueInput>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    delete?: Array<PositionClassWhereUniqueInput>;
    @Field(() => [PositionClassUpdateWithWhereUniqueWithoutPositionClassCategoryInput], {nullable:true})
    update?: Array<PositionClassUpdateWithWhereUniqueWithoutPositionClassCategoryInput>;
    @Field(() => [PositionClassUpdateManyWithWhereWithoutPositionClassCategoryInput], {nullable:true})
    updateMany?: Array<PositionClassUpdateManyWithWhereWithoutPositionClassCategoryInput>;
    @Field(() => [PositionClassScalarWhereInput], {nullable:true})
    deleteMany?: Array<PositionClassScalarWhereInput>;
}

@InputType()
export class PositionClassUpdateManyWithoutPositionClassTypeInput {
    @Field(() => [PositionClassCreateWithoutPositionClassTypeInput], {nullable:true})
    create?: Array<PositionClassCreateWithoutPositionClassTypeInput>;
    @Field(() => [PositionClassCreateOrConnectWithoutPositionClassTypeInput], {nullable:true})
    connectOrCreate?: Array<PositionClassCreateOrConnectWithoutPositionClassTypeInput>;
    @Field(() => [PositionClassUpsertWithWhereUniqueWithoutPositionClassTypeInput], {nullable:true})
    upsert?: Array<PositionClassUpsertWithWhereUniqueWithoutPositionClassTypeInput>;
    @Field(() => PositionClassCreateManyPositionClassTypeInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PositionClassCreateManyPositionClassTypeInputEnvelope>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    connect?: Array<PositionClassWhereUniqueInput>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    set?: Array<PositionClassWhereUniqueInput>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    disconnect?: Array<PositionClassWhereUniqueInput>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    delete?: Array<PositionClassWhereUniqueInput>;
    @Field(() => [PositionClassUpdateWithWhereUniqueWithoutPositionClassTypeInput], {nullable:true})
    update?: Array<PositionClassUpdateWithWhereUniqueWithoutPositionClassTypeInput>;
    @Field(() => [PositionClassUpdateManyWithWhereWithoutPositionClassTypeInput], {nullable:true})
    updateMany?: Array<PositionClassUpdateManyWithWhereWithoutPositionClassTypeInput>;
    @Field(() => [PositionClassScalarWhereInput], {nullable:true})
    deleteMany?: Array<PositionClassScalarWhereInput>;
}

@InputType()
export class PositionClassUpdateManyWithoutSalaryScaleInput {
    @Field(() => [PositionClassCreateWithoutSalaryScaleInput], {nullable:true})
    create?: Array<PositionClassCreateWithoutSalaryScaleInput>;
    @Field(() => [PositionClassCreateOrConnectWithoutSalaryScaleInput], {nullable:true})
    connectOrCreate?: Array<PositionClassCreateOrConnectWithoutSalaryScaleInput>;
    @Field(() => [PositionClassUpsertWithWhereUniqueWithoutSalaryScaleInput], {nullable:true})
    upsert?: Array<PositionClassUpsertWithWhereUniqueWithoutSalaryScaleInput>;
    @Field(() => PositionClassCreateManySalaryScaleInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PositionClassCreateManySalaryScaleInputEnvelope>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    connect?: Array<PositionClassWhereUniqueInput>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    set?: Array<PositionClassWhereUniqueInput>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    disconnect?: Array<PositionClassWhereUniqueInput>;
    @Field(() => [PositionClassWhereUniqueInput], {nullable:true})
    delete?: Array<PositionClassWhereUniqueInput>;
    @Field(() => [PositionClassUpdateWithWhereUniqueWithoutSalaryScaleInput], {nullable:true})
    update?: Array<PositionClassUpdateWithWhereUniqueWithoutSalaryScaleInput>;
    @Field(() => [PositionClassUpdateManyWithWhereWithoutSalaryScaleInput], {nullable:true})
    updateMany?: Array<PositionClassUpdateManyWithWhereWithoutSalaryScaleInput>;
    @Field(() => [PositionClassScalarWhereInput], {nullable:true})
    deleteMany?: Array<PositionClassScalarWhereInput>;
}

@InputType()
export class PositionClassUpdateOneWithoutPositionsInput {
    @Field(() => PositionClassCreateWithoutPositionsInput, {nullable:true})
    create?: InstanceType<typeof PositionClassCreateWithoutPositionsInput>;
    @Field(() => PositionClassCreateOrConnectWithoutPositionsInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof PositionClassCreateOrConnectWithoutPositionsInput>;
    @Field(() => PositionClassUpsertWithoutPositionsInput, {nullable:true})
    upsert?: InstanceType<typeof PositionClassUpsertWithoutPositionsInput>;
    @Field(() => PositionClassWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof PositionClassWhereUniqueInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => PositionClassUpdateWithoutPositionsInput, {nullable:true})
    update?: InstanceType<typeof PositionClassUpdateWithoutPositionsInput>;
}

@InputType()
export class PositionClassUpdateWithWhereUniqueWithoutGenderInput {
    @Field(() => PositionClassWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionClassWhereUniqueInput>;
    @Field(() => PositionClassUpdateWithoutGenderInput, {nullable:false})
    data!: InstanceType<typeof PositionClassUpdateWithoutGenderInput>;
}

@InputType()
export class PositionClassUpdateWithWhereUniqueWithoutPositionClassCategoryInput {
    @Field(() => PositionClassWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionClassWhereUniqueInput>;
    @Field(() => PositionClassUpdateWithoutPositionClassCategoryInput, {nullable:false})
    data!: InstanceType<typeof PositionClassUpdateWithoutPositionClassCategoryInput>;
}

@InputType()
export class PositionClassUpdateWithWhereUniqueWithoutPositionClassTypeInput {
    @Field(() => PositionClassWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionClassWhereUniqueInput>;
    @Field(() => PositionClassUpdateWithoutPositionClassTypeInput, {nullable:false})
    data!: InstanceType<typeof PositionClassUpdateWithoutPositionClassTypeInput>;
}

@InputType()
export class PositionClassUpdateWithWhereUniqueWithoutSalaryScaleInput {
    @Field(() => PositionClassWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionClassWhereUniqueInput>;
    @Field(() => PositionClassUpdateWithoutSalaryScaleInput, {nullable:false})
    data!: InstanceType<typeof PositionClassUpdateWithoutSalaryScaleInput>;
}

@InputType()
export class PositionClassUpdateWithoutGenderInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    minimumAge?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    maximumAge?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    monthlyWorkingHours?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    salary?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    specification?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PositionClassTypeUpdateOneWithoutPositionClassesInput, {nullable:true})
    positionClassType?: InstanceType<typeof PositionClassTypeUpdateOneWithoutPositionClassesInput>;
    @Field(() => PositionClassCategoryUpdateOneWithoutPositionClassesInput, {nullable:true})
    positionClassCategory?: InstanceType<typeof PositionClassCategoryUpdateOneWithoutPositionClassesInput>;
    @Field(() => SalaryScaleUpdateOneWithoutPositionClassesInput, {nullable:true})
    salaryScale?: InstanceType<typeof SalaryScaleUpdateOneWithoutPositionClassesInput>;
    @Field(() => PositionUpdateManyWithoutPositionClassInput, {nullable:true})
    positions?: InstanceType<typeof PositionUpdateManyWithoutPositionClassInput>;
}

@InputType()
export class PositionClassUpdateWithoutPositionClassCategoryInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    minimumAge?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    maximumAge?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    monthlyWorkingHours?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    salary?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    specification?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => GenderUpdateOneWithoutPositionClassesInput, {nullable:true})
    gender?: InstanceType<typeof GenderUpdateOneWithoutPositionClassesInput>;
    @Field(() => PositionClassTypeUpdateOneWithoutPositionClassesInput, {nullable:true})
    positionClassType?: InstanceType<typeof PositionClassTypeUpdateOneWithoutPositionClassesInput>;
    @Field(() => SalaryScaleUpdateOneWithoutPositionClassesInput, {nullable:true})
    salaryScale?: InstanceType<typeof SalaryScaleUpdateOneWithoutPositionClassesInput>;
    @Field(() => PositionUpdateManyWithoutPositionClassInput, {nullable:true})
    positions?: InstanceType<typeof PositionUpdateManyWithoutPositionClassInput>;
}

@InputType()
export class PositionClassUpdateWithoutPositionClassTypeInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    minimumAge?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    maximumAge?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    monthlyWorkingHours?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    salary?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    specification?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => GenderUpdateOneWithoutPositionClassesInput, {nullable:true})
    gender?: InstanceType<typeof GenderUpdateOneWithoutPositionClassesInput>;
    @Field(() => PositionClassCategoryUpdateOneWithoutPositionClassesInput, {nullable:true})
    positionClassCategory?: InstanceType<typeof PositionClassCategoryUpdateOneWithoutPositionClassesInput>;
    @Field(() => SalaryScaleUpdateOneWithoutPositionClassesInput, {nullable:true})
    salaryScale?: InstanceType<typeof SalaryScaleUpdateOneWithoutPositionClassesInput>;
    @Field(() => PositionUpdateManyWithoutPositionClassInput, {nullable:true})
    positions?: InstanceType<typeof PositionUpdateManyWithoutPositionClassInput>;
}

@InputType()
export class PositionClassUpdateWithoutPositionsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    minimumAge?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    maximumAge?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    monthlyWorkingHours?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    salary?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    specification?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => GenderUpdateOneWithoutPositionClassesInput, {nullable:true})
    gender?: InstanceType<typeof GenderUpdateOneWithoutPositionClassesInput>;
    @Field(() => PositionClassTypeUpdateOneWithoutPositionClassesInput, {nullable:true})
    positionClassType?: InstanceType<typeof PositionClassTypeUpdateOneWithoutPositionClassesInput>;
    @Field(() => PositionClassCategoryUpdateOneWithoutPositionClassesInput, {nullable:true})
    positionClassCategory?: InstanceType<typeof PositionClassCategoryUpdateOneWithoutPositionClassesInput>;
    @Field(() => SalaryScaleUpdateOneWithoutPositionClassesInput, {nullable:true})
    salaryScale?: InstanceType<typeof SalaryScaleUpdateOneWithoutPositionClassesInput>;
}

@InputType()
export class PositionClassUpdateWithoutSalaryScaleInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    minimumAge?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    maximumAge?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    monthlyWorkingHours?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    salary?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    specification?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => GenderUpdateOneWithoutPositionClassesInput, {nullable:true})
    gender?: InstanceType<typeof GenderUpdateOneWithoutPositionClassesInput>;
    @Field(() => PositionClassTypeUpdateOneWithoutPositionClassesInput, {nullable:true})
    positionClassType?: InstanceType<typeof PositionClassTypeUpdateOneWithoutPositionClassesInput>;
    @Field(() => PositionClassCategoryUpdateOneWithoutPositionClassesInput, {nullable:true})
    positionClassCategory?: InstanceType<typeof PositionClassCategoryUpdateOneWithoutPositionClassesInput>;
    @Field(() => PositionUpdateManyWithoutPositionClassInput, {nullable:true})
    positions?: InstanceType<typeof PositionUpdateManyWithoutPositionClassInput>;
}

@InputType()
export class PositionClassUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    minimumAge?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    maximumAge?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    monthlyWorkingHours?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    salary?: InstanceType<typeof DecimalFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    specification?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => GenderUpdateOneWithoutPositionClassesInput, {nullable:true})
    gender?: InstanceType<typeof GenderUpdateOneWithoutPositionClassesInput>;
    @Field(() => PositionClassTypeUpdateOneWithoutPositionClassesInput, {nullable:true})
    positionClassType?: InstanceType<typeof PositionClassTypeUpdateOneWithoutPositionClassesInput>;
    @Field(() => PositionClassCategoryUpdateOneWithoutPositionClassesInput, {nullable:true})
    positionClassCategory?: InstanceType<typeof PositionClassCategoryUpdateOneWithoutPositionClassesInput>;
    @Field(() => SalaryScaleUpdateOneWithoutPositionClassesInput, {nullable:true})
    salaryScale?: InstanceType<typeof SalaryScaleUpdateOneWithoutPositionClassesInput>;
    @Field(() => PositionUpdateManyWithoutPositionClassInput, {nullable:true})
    positions?: InstanceType<typeof PositionUpdateManyWithoutPositionClassInput>;
}

@InputType()
export class PositionClassUpsertWithWhereUniqueWithoutGenderInput {
    @Field(() => PositionClassWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionClassWhereUniqueInput>;
    @Field(() => PositionClassUpdateWithoutGenderInput, {nullable:false})
    update!: InstanceType<typeof PositionClassUpdateWithoutGenderInput>;
    @Field(() => PositionClassCreateWithoutGenderInput, {nullable:false})
    create!: InstanceType<typeof PositionClassCreateWithoutGenderInput>;
}

@InputType()
export class PositionClassUpsertWithWhereUniqueWithoutPositionClassCategoryInput {
    @Field(() => PositionClassWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionClassWhereUniqueInput>;
    @Field(() => PositionClassUpdateWithoutPositionClassCategoryInput, {nullable:false})
    update!: InstanceType<typeof PositionClassUpdateWithoutPositionClassCategoryInput>;
    @Field(() => PositionClassCreateWithoutPositionClassCategoryInput, {nullable:false})
    create!: InstanceType<typeof PositionClassCreateWithoutPositionClassCategoryInput>;
}

@InputType()
export class PositionClassUpsertWithWhereUniqueWithoutPositionClassTypeInput {
    @Field(() => PositionClassWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionClassWhereUniqueInput>;
    @Field(() => PositionClassUpdateWithoutPositionClassTypeInput, {nullable:false})
    update!: InstanceType<typeof PositionClassUpdateWithoutPositionClassTypeInput>;
    @Field(() => PositionClassCreateWithoutPositionClassTypeInput, {nullable:false})
    create!: InstanceType<typeof PositionClassCreateWithoutPositionClassTypeInput>;
}

@InputType()
export class PositionClassUpsertWithWhereUniqueWithoutSalaryScaleInput {
    @Field(() => PositionClassWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionClassWhereUniqueInput>;
    @Field(() => PositionClassUpdateWithoutSalaryScaleInput, {nullable:false})
    update!: InstanceType<typeof PositionClassUpdateWithoutSalaryScaleInput>;
    @Field(() => PositionClassCreateWithoutSalaryScaleInput, {nullable:false})
    create!: InstanceType<typeof PositionClassCreateWithoutSalaryScaleInput>;
}

@InputType()
export class PositionClassUpsertWithoutPositionsInput {
    @Field(() => PositionClassUpdateWithoutPositionsInput, {nullable:false})
    update!: InstanceType<typeof PositionClassUpdateWithoutPositionsInput>;
    @Field(() => PositionClassCreateWithoutPositionsInput, {nullable:false})
    create!: InstanceType<typeof PositionClassCreateWithoutPositionsInput>;
}

@InputType()
export class PositionClassWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    code?: string;
}

@InputType()
export class PositionClassWhereInput {
    @Field(() => [PositionClassWhereInput], {nullable:true})
    AND?: Array<PositionClassWhereInput>;
    @Field(() => [PositionClassWhereInput], {nullable:true})
    OR?: Array<PositionClassWhereInput>;
    @Field(() => [PositionClassWhereInput], {nullable:true})
    NOT?: Array<PositionClassWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    code?: InstanceType<typeof StringFilter>;
    @Field(() => JsonNullableFilter, {nullable:true})
    locales?: InstanceType<typeof JsonNullableFilter>;
    @Field(() => GenderRelationFilter, {nullable:true})
    gender?: InstanceType<typeof GenderRelationFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    genderId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => PositionClassTypeRelationFilter, {nullable:true})
    positionClassType?: InstanceType<typeof PositionClassTypeRelationFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    positionClassTypeId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => PositionClassCategoryRelationFilter, {nullable:true})
    positionClassCategory?: InstanceType<typeof PositionClassCategoryRelationFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    positionClassCategoryId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => SalaryScaleRelationFilter, {nullable:true})
    salaryScale?: InstanceType<typeof SalaryScaleRelationFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    salaryScaleId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => IntFilter, {nullable:true})
    minimumAge?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    maximumAge?: InstanceType<typeof IntFilter>;
    @Field(() => DecimalFilter, {nullable:true})
    monthlyWorkingHours?: InstanceType<typeof DecimalFilter>;
    @Field(() => DecimalFilter, {nullable:true})
    salary?: InstanceType<typeof DecimalFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    specification?: InstanceType<typeof StringNullableFilter>;
    @Field(() => BoolFilter, {nullable:true})
    deleted?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => PositionListRelationFilter, {nullable:true})
    positions?: InstanceType<typeof PositionListRelationFilter>;
}

@ObjectType()
export class PositionClass {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales!: any | null;
    @Field(() => Gender, {nullable:true})
    gender?: InstanceType<typeof Gender> | null;
    @Field(() => Int, {nullable:true})
    genderId!: number | null;
    @Field(() => PositionClassType, {nullable:true})
    positionClassType?: InstanceType<typeof PositionClassType> | null;
    @Field(() => Int, {nullable:true})
    positionClassTypeId!: number | null;
    @Field(() => PositionClassCategory, {nullable:true})
    positionClassCategory?: InstanceType<typeof PositionClassCategory> | null;
    @Field(() => Int, {nullable:true})
    positionClassCategoryId!: number | null;
    @Field(() => SalaryScale, {nullable:true})
    salaryScale?: InstanceType<typeof SalaryScale> | null;
    @Field(() => Int, {nullable:true})
    salaryScaleId!: number | null;
    @Field(() => Int, {nullable:false,defaultValue:0})
    minimumAge!: number;
    @Field(() => Int, {nullable:false,defaultValue:0})
    maximumAge!: number;
    @Field(() => GraphQLDecimal, {nullable:false,defaultValue:0})
    monthlyWorkingHours!: any;
    @Field(() => GraphQLDecimal, {nullable:false,defaultValue:0})
    salary!: any;
    @Field(() => String, {nullable:true})
    specification!: string | null;
    @Field(() => Boolean, {nullable:false,defaultValue:false})
    deleted!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [Position], {nullable:true})
    positions?: Array<Position>;
    @Field(() => PositionClassCount, {nullable:true})
    _count?: InstanceType<typeof PositionClassCount> | null;
}

@ArgsType()
export class UpdateManyPositionClassArgs {
    @Field(() => PositionClassUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof PositionClassUpdateManyMutationInput>;
    @Field(() => PositionClassWhereInput, {nullable:true})
    where?: InstanceType<typeof PositionClassWhereInput>;
}

@ArgsType()
export class UpdateOnePositionClassArgs {
    @Field(() => PositionClassUpdateInput, {nullable:false})
    data!: InstanceType<typeof PositionClassUpdateInput>;
    @Field(() => PositionClassWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionClassWhereUniqueInput>;
}

@ArgsType()
export class UpsertOnePositionClassArgs {
    @Field(() => PositionClassWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionClassWhereUniqueInput>;
    @Field(() => PositionClassCreateInput, {nullable:false})
    create!: InstanceType<typeof PositionClassCreateInput>;
    @Field(() => PositionClassUpdateInput, {nullable:false})
    update!: InstanceType<typeof PositionClassUpdateInput>;
}

@ObjectType()
export class AggregatePositionClassCategory {
    @Field(() => PositionClassCategoryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PositionClassCategoryCountAggregate>;
    @Field(() => PositionClassCategoryAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof PositionClassCategoryAvgAggregate>;
    @Field(() => PositionClassCategorySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof PositionClassCategorySumAggregate>;
    @Field(() => PositionClassCategoryMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PositionClassCategoryMinAggregate>;
    @Field(() => PositionClassCategoryMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PositionClassCategoryMaxAggregate>;
}

@ArgsType()
export class CreateManyPositionClassCategoryArgs {
    @Field(() => [PositionClassCategoryCreateManyInput], {nullable:false})
    data!: Array<PositionClassCategoryCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOnePositionClassCategoryArgs {
    @Field(() => PositionClassCategoryCreateInput, {nullable:false})
    data!: InstanceType<typeof PositionClassCategoryCreateInput>;
}

@ArgsType()
export class DeleteManyPositionClassCategoryArgs {
    @Field(() => PositionClassCategoryWhereInput, {nullable:true})
    where?: InstanceType<typeof PositionClassCategoryWhereInput>;
}

@ArgsType()
export class DeleteOnePositionClassCategoryArgs {
    @Field(() => PositionClassCategoryWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionClassCategoryWhereUniqueInput>;
}

@ArgsType()
export class FindFirstPositionClassCategoryArgs {
    @Field(() => PositionClassCategoryWhereInput, {nullable:true})
    where?: InstanceType<typeof PositionClassCategoryWhereInput>;
    @Field(() => [PositionClassCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PositionClassCategoryOrderByWithRelationInput>;
    @Field(() => PositionClassCategoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PositionClassCategoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PositionClassCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PositionClassCategoryScalarFieldEnum>;
}

@ArgsType()
export class FindManyPositionClassCategoryArgs {
    @Field(() => PositionClassCategoryWhereInput, {nullable:true})
    where?: InstanceType<typeof PositionClassCategoryWhereInput>;
    @Field(() => [PositionClassCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PositionClassCategoryOrderByWithRelationInput>;
    @Field(() => PositionClassCategoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PositionClassCategoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PositionClassCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PositionClassCategoryScalarFieldEnum>;
}

@ArgsType()
export class FindUniquePositionClassCategoryArgs {
    @Field(() => PositionClassCategoryWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionClassCategoryWhereUniqueInput>;
}

@ArgsType()
export class PositionClassCategoryAggregateArgs {
    @Field(() => PositionClassCategoryWhereInput, {nullable:true})
    where?: InstanceType<typeof PositionClassCategoryWhereInput>;
    @Field(() => [PositionClassCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PositionClassCategoryOrderByWithRelationInput>;
    @Field(() => PositionClassCategoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PositionClassCategoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PositionClassCategoryCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PositionClassCategoryCountAggregateInput>;
    @Field(() => PositionClassCategoryAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PositionClassCategoryAvgAggregateInput>;
    @Field(() => PositionClassCategorySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PositionClassCategorySumAggregateInput>;
    @Field(() => PositionClassCategoryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PositionClassCategoryMinAggregateInput>;
    @Field(() => PositionClassCategoryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PositionClassCategoryMaxAggregateInput>;
}

@InputType()
export class PositionClassCategoryAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class PositionClassCategoryAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class PositionClassCategoryAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class PositionClassCategoryCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    locales?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class PositionClassCategoryCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    code!: number;
    @Field(() => Int, {nullable:false})
    locales!: number;
    @Field(() => Int, {nullable:false})
    deleted!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class PositionClassCategoryCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PositionClassCategoryCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PositionClassCategoryCreateNestedOneWithoutPositionClassesInput {
    @Field(() => PositionClassCategoryCreateWithoutPositionClassesInput, {nullable:true})
    create?: InstanceType<typeof PositionClassCategoryCreateWithoutPositionClassesInput>;
    @Field(() => PositionClassCategoryCreateOrConnectWithoutPositionClassesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof PositionClassCategoryCreateOrConnectWithoutPositionClassesInput>;
    @Field(() => PositionClassCategoryWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof PositionClassCategoryWhereUniqueInput>;
}

@InputType()
export class PositionClassCategoryCreateOrConnectWithoutPositionClassesInput {
    @Field(() => PositionClassCategoryWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionClassCategoryWhereUniqueInput>;
    @Field(() => PositionClassCategoryCreateWithoutPositionClassesInput, {nullable:false})
    create!: InstanceType<typeof PositionClassCategoryCreateWithoutPositionClassesInput>;
}

@InputType()
export class PositionClassCategoryCreateWithoutPositionClassesInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PositionClassCategoryCreateInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PositionClassCreateNestedManyWithoutPositionClassCategoryInput, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassCreateNestedManyWithoutPositionClassCategoryInput>;
}

@ArgsType()
export class PositionClassCategoryGroupByArgs {
    @Field(() => PositionClassCategoryWhereInput, {nullable:true})
    where?: InstanceType<typeof PositionClassCategoryWhereInput>;
    @Field(() => [PositionClassCategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PositionClassCategoryOrderByWithAggregationInput>;
    @Field(() => [PositionClassCategoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PositionClassCategoryScalarFieldEnum>;
    @Field(() => PositionClassCategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof PositionClassCategoryScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PositionClassCategoryCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PositionClassCategoryCountAggregateInput>;
    @Field(() => PositionClassCategoryAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PositionClassCategoryAvgAggregateInput>;
    @Field(() => PositionClassCategorySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PositionClassCategorySumAggregateInput>;
    @Field(() => PositionClassCategoryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PositionClassCategoryMinAggregateInput>;
    @Field(() => PositionClassCategoryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PositionClassCategoryMaxAggregateInput>;
}

@ObjectType()
export class PositionClassCategoryGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:false})
    deleted!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => PositionClassCategoryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PositionClassCategoryCountAggregate>;
    @Field(() => PositionClassCategoryAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof PositionClassCategoryAvgAggregate>;
    @Field(() => PositionClassCategorySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof PositionClassCategorySumAggregate>;
    @Field(() => PositionClassCategoryMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PositionClassCategoryMinAggregate>;
    @Field(() => PositionClassCategoryMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PositionClassCategoryMaxAggregate>;
}

@InputType()
export class PositionClassCategoryMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class PositionClassCategoryMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    code?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PositionClassCategoryMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PositionClassCategoryMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class PositionClassCategoryMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    code?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PositionClassCategoryMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PositionClassCategoryOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => PositionClassCategoryCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PositionClassCategoryCountOrderByAggregateInput>;
    @Field(() => PositionClassCategoryAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PositionClassCategoryAvgOrderByAggregateInput>;
    @Field(() => PositionClassCategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PositionClassCategoryMaxOrderByAggregateInput>;
    @Field(() => PositionClassCategoryMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PositionClassCategoryMinOrderByAggregateInput>;
    @Field(() => PositionClassCategorySumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PositionClassCategorySumOrderByAggregateInput>;
}

@InputType()
export class PositionClassCategoryOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => PositionClassOrderByRelationAggregateInput, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassOrderByRelationAggregateInput>;
}

@InputType()
export class PositionClassCategoryRelationFilter {
    @Field(() => PositionClassCategoryWhereInput, {nullable:true})
    is?: InstanceType<typeof PositionClassCategoryWhereInput>;
    @Field(() => PositionClassCategoryWhereInput, {nullable:true})
    isNot?: InstanceType<typeof PositionClassCategoryWhereInput>;
}

@InputType()
export class PositionClassCategoryScalarWhereWithAggregatesInput {
    @Field(() => [PositionClassCategoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PositionClassCategoryScalarWhereWithAggregatesInput>;
    @Field(() => [PositionClassCategoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PositionClassCategoryScalarWhereWithAggregatesInput>;
    @Field(() => [PositionClassCategoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PositionClassCategoryScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    locales?: InstanceType<typeof JsonNullableWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    deleted?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class PositionClassCategorySumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class PositionClassCategorySumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class PositionClassCategorySumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class PositionClassCategoryUncheckedCreateWithoutPositionClassesInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PositionClassCategoryUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PositionClassUncheckedCreateNestedManyWithoutPositionClassCategoryInput, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassUncheckedCreateNestedManyWithoutPositionClassCategoryInput>;
}

@InputType()
export class PositionClassCategoryUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PositionClassCategoryUncheckedUpdateWithoutPositionClassesInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PositionClassCategoryUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PositionClassUncheckedUpdateManyWithoutPositionClassCategoryInput, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassUncheckedUpdateManyWithoutPositionClassCategoryInput>;
}

@InputType()
export class PositionClassCategoryUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PositionClassCategoryUpdateOneWithoutPositionClassesInput {
    @Field(() => PositionClassCategoryCreateWithoutPositionClassesInput, {nullable:true})
    create?: InstanceType<typeof PositionClassCategoryCreateWithoutPositionClassesInput>;
    @Field(() => PositionClassCategoryCreateOrConnectWithoutPositionClassesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof PositionClassCategoryCreateOrConnectWithoutPositionClassesInput>;
    @Field(() => PositionClassCategoryUpsertWithoutPositionClassesInput, {nullable:true})
    upsert?: InstanceType<typeof PositionClassCategoryUpsertWithoutPositionClassesInput>;
    @Field(() => PositionClassCategoryWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof PositionClassCategoryWhereUniqueInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => PositionClassCategoryUpdateWithoutPositionClassesInput, {nullable:true})
    update?: InstanceType<typeof PositionClassCategoryUpdateWithoutPositionClassesInput>;
}

@InputType()
export class PositionClassCategoryUpdateWithoutPositionClassesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PositionClassCategoryUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PositionClassUpdateManyWithoutPositionClassCategoryInput, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassUpdateManyWithoutPositionClassCategoryInput>;
}

@InputType()
export class PositionClassCategoryUpsertWithoutPositionClassesInput {
    @Field(() => PositionClassCategoryUpdateWithoutPositionClassesInput, {nullable:false})
    update!: InstanceType<typeof PositionClassCategoryUpdateWithoutPositionClassesInput>;
    @Field(() => PositionClassCategoryCreateWithoutPositionClassesInput, {nullable:false})
    create!: InstanceType<typeof PositionClassCategoryCreateWithoutPositionClassesInput>;
}

@InputType()
export class PositionClassCategoryWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    code?: string;
}

@InputType()
export class PositionClassCategoryWhereInput {
    @Field(() => [PositionClassCategoryWhereInput], {nullable:true})
    AND?: Array<PositionClassCategoryWhereInput>;
    @Field(() => [PositionClassCategoryWhereInput], {nullable:true})
    OR?: Array<PositionClassCategoryWhereInput>;
    @Field(() => [PositionClassCategoryWhereInput], {nullable:true})
    NOT?: Array<PositionClassCategoryWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    code?: InstanceType<typeof StringFilter>;
    @Field(() => JsonNullableFilter, {nullable:true})
    locales?: InstanceType<typeof JsonNullableFilter>;
    @Field(() => BoolFilter, {nullable:true})
    deleted?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => PositionClassListRelationFilter, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassListRelationFilter>;
}

@ObjectType()
export class PositionClassCategory {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales!: any | null;
    @Field(() => Boolean, {nullable:false,defaultValue:false})
    deleted!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [PositionClass], {nullable:true})
    positionClasses?: Array<PositionClass>;
    @Field(() => PositionClassCategoryCount, {nullable:true})
    _count?: InstanceType<typeof PositionClassCategoryCount> | null;
}

@ArgsType()
export class UpdateManyPositionClassCategoryArgs {
    @Field(() => PositionClassCategoryUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof PositionClassCategoryUpdateManyMutationInput>;
    @Field(() => PositionClassCategoryWhereInput, {nullable:true})
    where?: InstanceType<typeof PositionClassCategoryWhereInput>;
}

@ArgsType()
export class UpdateOnePositionClassCategoryArgs {
    @Field(() => PositionClassCategoryUpdateInput, {nullable:false})
    data!: InstanceType<typeof PositionClassCategoryUpdateInput>;
    @Field(() => PositionClassCategoryWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionClassCategoryWhereUniqueInput>;
}

@ArgsType()
export class UpsertOnePositionClassCategoryArgs {
    @Field(() => PositionClassCategoryWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionClassCategoryWhereUniqueInput>;
    @Field(() => PositionClassCategoryCreateInput, {nullable:false})
    create!: InstanceType<typeof PositionClassCategoryCreateInput>;
    @Field(() => PositionClassCategoryUpdateInput, {nullable:false})
    update!: InstanceType<typeof PositionClassCategoryUpdateInput>;
}

@ObjectType()
export class AggregatePositionClassType {
    @Field(() => PositionClassTypeCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PositionClassTypeCountAggregate>;
    @Field(() => PositionClassTypeAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof PositionClassTypeAvgAggregate>;
    @Field(() => PositionClassTypeSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof PositionClassTypeSumAggregate>;
    @Field(() => PositionClassTypeMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PositionClassTypeMinAggregate>;
    @Field(() => PositionClassTypeMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PositionClassTypeMaxAggregate>;
}

@ArgsType()
export class CreateManyPositionClassTypeArgs {
    @Field(() => [PositionClassTypeCreateManyInput], {nullable:false})
    data!: Array<PositionClassTypeCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOnePositionClassTypeArgs {
    @Field(() => PositionClassTypeCreateInput, {nullable:false})
    data!: InstanceType<typeof PositionClassTypeCreateInput>;
}

@ArgsType()
export class DeleteManyPositionClassTypeArgs {
    @Field(() => PositionClassTypeWhereInput, {nullable:true})
    where?: InstanceType<typeof PositionClassTypeWhereInput>;
}

@ArgsType()
export class DeleteOnePositionClassTypeArgs {
    @Field(() => PositionClassTypeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionClassTypeWhereUniqueInput>;
}

@ArgsType()
export class FindFirstPositionClassTypeArgs {
    @Field(() => PositionClassTypeWhereInput, {nullable:true})
    where?: InstanceType<typeof PositionClassTypeWhereInput>;
    @Field(() => [PositionClassTypeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PositionClassTypeOrderByWithRelationInput>;
    @Field(() => PositionClassTypeWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PositionClassTypeWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PositionClassTypeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PositionClassTypeScalarFieldEnum>;
}

@ArgsType()
export class FindManyPositionClassTypeArgs {
    @Field(() => PositionClassTypeWhereInput, {nullable:true})
    where?: InstanceType<typeof PositionClassTypeWhereInput>;
    @Field(() => [PositionClassTypeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PositionClassTypeOrderByWithRelationInput>;
    @Field(() => PositionClassTypeWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PositionClassTypeWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PositionClassTypeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PositionClassTypeScalarFieldEnum>;
}

@ArgsType()
export class FindUniquePositionClassTypeArgs {
    @Field(() => PositionClassTypeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionClassTypeWhereUniqueInput>;
}

@ArgsType()
export class PositionClassTypeAggregateArgs {
    @Field(() => PositionClassTypeWhereInput, {nullable:true})
    where?: InstanceType<typeof PositionClassTypeWhereInput>;
    @Field(() => [PositionClassTypeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PositionClassTypeOrderByWithRelationInput>;
    @Field(() => PositionClassTypeWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PositionClassTypeWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PositionClassTypeCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PositionClassTypeCountAggregateInput>;
    @Field(() => PositionClassTypeAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PositionClassTypeAvgAggregateInput>;
    @Field(() => PositionClassTypeSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PositionClassTypeSumAggregateInput>;
    @Field(() => PositionClassTypeMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PositionClassTypeMinAggregateInput>;
    @Field(() => PositionClassTypeMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PositionClassTypeMaxAggregateInput>;
}

@InputType()
export class PositionClassTypeAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class PositionClassTypeAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class PositionClassTypeAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class PositionClassTypeCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    locales?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class PositionClassTypeCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    code!: number;
    @Field(() => Int, {nullable:false})
    locales!: number;
    @Field(() => Int, {nullable:false})
    deleted!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class PositionClassTypeCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PositionClassTypeCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PositionClassTypeCreateNestedOneWithoutPositionClassesInput {
    @Field(() => PositionClassTypeCreateWithoutPositionClassesInput, {nullable:true})
    create?: InstanceType<typeof PositionClassTypeCreateWithoutPositionClassesInput>;
    @Field(() => PositionClassTypeCreateOrConnectWithoutPositionClassesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof PositionClassTypeCreateOrConnectWithoutPositionClassesInput>;
    @Field(() => PositionClassTypeWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof PositionClassTypeWhereUniqueInput>;
}

@InputType()
export class PositionClassTypeCreateOrConnectWithoutPositionClassesInput {
    @Field(() => PositionClassTypeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionClassTypeWhereUniqueInput>;
    @Field(() => PositionClassTypeCreateWithoutPositionClassesInput, {nullable:false})
    create!: InstanceType<typeof PositionClassTypeCreateWithoutPositionClassesInput>;
}

@InputType()
export class PositionClassTypeCreateWithoutPositionClassesInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PositionClassTypeCreateInput {
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PositionClassCreateNestedManyWithoutPositionClassTypeInput, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassCreateNestedManyWithoutPositionClassTypeInput>;
}

@ArgsType()
export class PositionClassTypeGroupByArgs {
    @Field(() => PositionClassTypeWhereInput, {nullable:true})
    where?: InstanceType<typeof PositionClassTypeWhereInput>;
    @Field(() => [PositionClassTypeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PositionClassTypeOrderByWithAggregationInput>;
    @Field(() => [PositionClassTypeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PositionClassTypeScalarFieldEnum>;
    @Field(() => PositionClassTypeScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof PositionClassTypeScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PositionClassTypeCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PositionClassTypeCountAggregateInput>;
    @Field(() => PositionClassTypeAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PositionClassTypeAvgAggregateInput>;
    @Field(() => PositionClassTypeSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PositionClassTypeSumAggregateInput>;
    @Field(() => PositionClassTypeMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PositionClassTypeMinAggregateInput>;
    @Field(() => PositionClassTypeMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PositionClassTypeMaxAggregateInput>;
}

@ObjectType()
export class PositionClassTypeGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:false})
    deleted!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => PositionClassTypeCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PositionClassTypeCountAggregate>;
    @Field(() => PositionClassTypeAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof PositionClassTypeAvgAggregate>;
    @Field(() => PositionClassTypeSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof PositionClassTypeSumAggregate>;
    @Field(() => PositionClassTypeMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PositionClassTypeMinAggregate>;
    @Field(() => PositionClassTypeMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PositionClassTypeMaxAggregate>;
}

@InputType()
export class PositionClassTypeMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class PositionClassTypeMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    code?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PositionClassTypeMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PositionClassTypeMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    code?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class PositionClassTypeMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    code?: string;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PositionClassTypeMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PositionClassTypeOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => PositionClassTypeCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PositionClassTypeCountOrderByAggregateInput>;
    @Field(() => PositionClassTypeAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PositionClassTypeAvgOrderByAggregateInput>;
    @Field(() => PositionClassTypeMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PositionClassTypeMaxOrderByAggregateInput>;
    @Field(() => PositionClassTypeMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PositionClassTypeMinOrderByAggregateInput>;
    @Field(() => PositionClassTypeSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PositionClassTypeSumOrderByAggregateInput>;
}

@InputType()
export class PositionClassTypeOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    locales?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => PositionClassOrderByRelationAggregateInput, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassOrderByRelationAggregateInput>;
}

@InputType()
export class PositionClassTypeRelationFilter {
    @Field(() => PositionClassTypeWhereInput, {nullable:true})
    is?: InstanceType<typeof PositionClassTypeWhereInput>;
    @Field(() => PositionClassTypeWhereInput, {nullable:true})
    isNot?: InstanceType<typeof PositionClassTypeWhereInput>;
}

@InputType()
export class PositionClassTypeScalarWhereWithAggregatesInput {
    @Field(() => [PositionClassTypeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PositionClassTypeScalarWhereWithAggregatesInput>;
    @Field(() => [PositionClassTypeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PositionClassTypeScalarWhereWithAggregatesInput>;
    @Field(() => [PositionClassTypeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PositionClassTypeScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    locales?: InstanceType<typeof JsonNullableWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    deleted?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class PositionClassTypeSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class PositionClassTypeSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class PositionClassTypeSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class PositionClassTypeUncheckedCreateWithoutPositionClassesInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PositionClassTypeUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PositionClassUncheckedCreateNestedManyWithoutPositionClassTypeInput, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassUncheckedCreateNestedManyWithoutPositionClassTypeInput>;
}

@InputType()
export class PositionClassTypeUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PositionClassTypeUncheckedUpdateWithoutPositionClassesInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PositionClassTypeUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PositionClassUncheckedUpdateManyWithoutPositionClassTypeInput, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassUncheckedUpdateManyWithoutPositionClassTypeInput>;
}

@InputType()
export class PositionClassTypeUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PositionClassTypeUpdateOneWithoutPositionClassesInput {
    @Field(() => PositionClassTypeCreateWithoutPositionClassesInput, {nullable:true})
    create?: InstanceType<typeof PositionClassTypeCreateWithoutPositionClassesInput>;
    @Field(() => PositionClassTypeCreateOrConnectWithoutPositionClassesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof PositionClassTypeCreateOrConnectWithoutPositionClassesInput>;
    @Field(() => PositionClassTypeUpsertWithoutPositionClassesInput, {nullable:true})
    upsert?: InstanceType<typeof PositionClassTypeUpsertWithoutPositionClassesInput>;
    @Field(() => PositionClassTypeWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof PositionClassTypeWhereUniqueInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => PositionClassTypeUpdateWithoutPositionClassesInput, {nullable:true})
    update?: InstanceType<typeof PositionClassTypeUpdateWithoutPositionClassesInput>;
}

@InputType()
export class PositionClassTypeUpdateWithoutPositionClassesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PositionClassTypeUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => GraphQLJSON, {nullable:true})
    locales?: any;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PositionClassUpdateManyWithoutPositionClassTypeInput, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassUpdateManyWithoutPositionClassTypeInput>;
}

@InputType()
export class PositionClassTypeUpsertWithoutPositionClassesInput {
    @Field(() => PositionClassTypeUpdateWithoutPositionClassesInput, {nullable:false})
    update!: InstanceType<typeof PositionClassTypeUpdateWithoutPositionClassesInput>;
    @Field(() => PositionClassTypeCreateWithoutPositionClassesInput, {nullable:false})
    create!: InstanceType<typeof PositionClassTypeCreateWithoutPositionClassesInput>;
}

@InputType()
export class PositionClassTypeWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    code?: string;
}

@InputType()
export class PositionClassTypeWhereInput {
    @Field(() => [PositionClassTypeWhereInput], {nullable:true})
    AND?: Array<PositionClassTypeWhereInput>;
    @Field(() => [PositionClassTypeWhereInput], {nullable:true})
    OR?: Array<PositionClassTypeWhereInput>;
    @Field(() => [PositionClassTypeWhereInput], {nullable:true})
    NOT?: Array<PositionClassTypeWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    code?: InstanceType<typeof StringFilter>;
    @Field(() => JsonNullableFilter, {nullable:true})
    locales?: InstanceType<typeof JsonNullableFilter>;
    @Field(() => BoolFilter, {nullable:true})
    deleted?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => PositionClassListRelationFilter, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassListRelationFilter>;
}

@ObjectType()
export class PositionClassType {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    code!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    locales!: any | null;
    @Field(() => Boolean, {nullable:false,defaultValue:false})
    deleted!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [PositionClass], {nullable:true})
    positionClasses?: Array<PositionClass>;
    @Field(() => PositionClassTypeCount, {nullable:true})
    _count?: InstanceType<typeof PositionClassTypeCount> | null;
}

@ArgsType()
export class UpdateManyPositionClassTypeArgs {
    @Field(() => PositionClassTypeUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof PositionClassTypeUpdateManyMutationInput>;
    @Field(() => PositionClassTypeWhereInput, {nullable:true})
    where?: InstanceType<typeof PositionClassTypeWhereInput>;
}

@ArgsType()
export class UpdateOnePositionClassTypeArgs {
    @Field(() => PositionClassTypeUpdateInput, {nullable:false})
    data!: InstanceType<typeof PositionClassTypeUpdateInput>;
    @Field(() => PositionClassTypeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionClassTypeWhereUniqueInput>;
}

@ArgsType()
export class UpsertOnePositionClassTypeArgs {
    @Field(() => PositionClassTypeWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PositionClassTypeWhereUniqueInput>;
    @Field(() => PositionClassTypeCreateInput, {nullable:false})
    create!: InstanceType<typeof PositionClassTypeCreateInput>;
    @Field(() => PositionClassTypeUpdateInput, {nullable:false})
    update!: InstanceType<typeof PositionClassTypeUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class BoolFieldUpdateOperationsInput {
    @Field(() => Boolean, {nullable:true})
    set?: boolean;
}

@InputType()
export class BoolFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class BoolWithAggregatesFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _min?: InstanceType<typeof NestedBoolFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _max?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class DateTimeFieldUpdateOperationsInput {
    @Field(() => Date, {nullable:true})
    set?: Date | string;
}

@InputType()
export class DateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class DecimalFieldUpdateOperationsInput {
    @Field(() => GraphQLDecimal, {nullable:true})
    set?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    increment?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    decrement?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    multiply?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    divide?: any;
}

@InputType()
export class DecimalFilter {
    @Field(() => GraphQLDecimal, {nullable:true})
    equals?: any;
    @Field(() => [GraphQLDecimal], {nullable:true})
    in?: Array<any>;
    @Field(() => [GraphQLDecimal], {nullable:true})
    notIn?: Array<any>;
    @Field(() => GraphQLDecimal, {nullable:true})
    lt?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    lte?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    gt?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    gte?: any;
    @Field(() => NestedDecimalFilter, {nullable:true})
    not?: InstanceType<typeof NestedDecimalFilter>;
}

@InputType()
export class DecimalWithAggregatesFilter {
    @Field(() => GraphQLDecimal, {nullable:true})
    equals?: any;
    @Field(() => [GraphQLDecimal], {nullable:true})
    in?: Array<any>;
    @Field(() => [GraphQLDecimal], {nullable:true})
    notIn?: Array<any>;
    @Field(() => GraphQLDecimal, {nullable:true})
    lt?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    lte?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    gt?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    gte?: any;
    @Field(() => NestedDecimalWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDecimalWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDecimalFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedDecimalFilter>;
    @Field(() => NestedDecimalFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedDecimalFilter>;
    @Field(() => NestedDecimalFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDecimalFilter>;
    @Field(() => NestedDecimalFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDecimalFilter>;
}

@InputType()
export class FloatFieldUpdateOperationsInput {
    @Field(() => Float, {nullable:true})
    set?: number;
    @Field(() => Float, {nullable:true})
    increment?: number;
    @Field(() => Float, {nullable:true})
    decrement?: number;
    @Field(() => Float, {nullable:true})
    multiply?: number;
    @Field(() => Float, {nullable:true})
    divide?: number;
}

@InputType()
export class FloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class FloatWithAggregatesFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _min?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _max?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class IntFieldUpdateOperationsInput {
    @Field(() => Int, {nullable:true})
    set?: number;
    @Field(() => Int, {nullable:true})
    increment?: number;
    @Field(() => Int, {nullable:true})
    decrement?: number;
    @Field(() => Int, {nullable:true})
    multiply?: number;
    @Field(() => Int, {nullable:true})
    divide?: number;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class IntNullableFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class IntNullableWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedFloatNullableFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class JsonFilter {
    @Field(() => GraphQLJSON, {nullable:true})
    equals?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    not?: any;
}

@InputType()
export class JsonNullableFilter {
    @Field(() => GraphQLJSON, {nullable:true})
    equals?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    not?: any;
}

@InputType()
export class JsonNullableWithAggregatesFilter {
    @Field(() => GraphQLJSON, {nullable:true})
    equals?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    not?: any;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedJsonNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedJsonNullableFilter>;
    @Field(() => NestedJsonNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedJsonNullableFilter>;
}

@InputType()
export class JsonWithAggregatesFilter {
    @Field(() => GraphQLJSON, {nullable:true})
    equals?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    not?: any;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedJsonFilter, {nullable:true})
    _min?: InstanceType<typeof NestedJsonFilter>;
    @Field(() => NestedJsonFilter, {nullable:true})
    _max?: InstanceType<typeof NestedJsonFilter>;
}

@InputType()
export class NestedBoolFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class NestedBoolWithAggregatesFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _min?: InstanceType<typeof NestedBoolFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _max?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class NestedDateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedDateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedDecimalFilter {
    @Field(() => GraphQLDecimal, {nullable:true})
    equals?: any;
    @Field(() => [GraphQLDecimal], {nullable:true})
    in?: Array<any>;
    @Field(() => [GraphQLDecimal], {nullable:true})
    notIn?: Array<any>;
    @Field(() => GraphQLDecimal, {nullable:true})
    lt?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    lte?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    gt?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    gte?: any;
    @Field(() => NestedDecimalFilter, {nullable:true})
    not?: InstanceType<typeof NestedDecimalFilter>;
}

@InputType()
export class NestedDecimalWithAggregatesFilter {
    @Field(() => GraphQLDecimal, {nullable:true})
    equals?: any;
    @Field(() => [GraphQLDecimal], {nullable:true})
    in?: Array<any>;
    @Field(() => [GraphQLDecimal], {nullable:true})
    notIn?: Array<any>;
    @Field(() => GraphQLDecimal, {nullable:true})
    lt?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    lte?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    gt?: any;
    @Field(() => GraphQLDecimal, {nullable:true})
    gte?: any;
    @Field(() => NestedDecimalWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDecimalWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDecimalFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedDecimalFilter>;
    @Field(() => NestedDecimalFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedDecimalFilter>;
    @Field(() => NestedDecimalFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDecimalFilter>;
    @Field(() => NestedDecimalFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDecimalFilter>;
}

@InputType()
export class NestedFloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class NestedFloatNullableFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatNullableFilter>;
}

@InputType()
export class NestedFloatWithAggregatesFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _min?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _max?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class NestedIntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedIntNullableFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedIntNullableWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedFloatNullableFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedIntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedJsonFilter {
    @Field(() => GraphQLJSON, {nullable:true})
    equals?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    not?: any;
}

@InputType()
export class NestedJsonNullableFilter {
    @Field(() => GraphQLJSON, {nullable:true})
    equals?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    not?: any;
}

@InputType()
export class NestedStringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NestedStringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NullableIntFieldUpdateOperationsInput {
    @Field(() => Int, {nullable:true})
    set?: number;
    @Field(() => Int, {nullable:true})
    increment?: number;
    @Field(() => Int, {nullable:true})
    decrement?: number;
    @Field(() => Int, {nullable:true})
    multiply?: number;
    @Field(() => Int, {nullable:true})
    divide?: number;
}

@InputType()
export class NullableStringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class StringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@ObjectType()
export class AggregateSalaryScale {
    @Field(() => SalaryScaleCountAggregate, {nullable:true})
    _count?: InstanceType<typeof SalaryScaleCountAggregate>;
    @Field(() => SalaryScaleAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof SalaryScaleAvgAggregate>;
    @Field(() => SalaryScaleSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof SalaryScaleSumAggregate>;
    @Field(() => SalaryScaleMinAggregate, {nullable:true})
    _min?: InstanceType<typeof SalaryScaleMinAggregate>;
    @Field(() => SalaryScaleMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof SalaryScaleMaxAggregate>;
}

@ArgsType()
export class CreateManySalaryScaleArgs {
    @Field(() => [SalaryScaleCreateManyInput], {nullable:false})
    data!: Array<SalaryScaleCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneSalaryScaleArgs {
    @Field(() => SalaryScaleCreateInput, {nullable:false})
    data!: InstanceType<typeof SalaryScaleCreateInput>;
}

@ArgsType()
export class DeleteManySalaryScaleArgs {
    @Field(() => SalaryScaleWhereInput, {nullable:true})
    where?: InstanceType<typeof SalaryScaleWhereInput>;
}

@ArgsType()
export class DeleteOneSalaryScaleArgs {
    @Field(() => SalaryScaleWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof SalaryScaleWhereUniqueInput>;
}

@ArgsType()
export class FindFirstSalaryScaleArgs {
    @Field(() => SalaryScaleWhereInput, {nullable:true})
    where?: InstanceType<typeof SalaryScaleWhereInput>;
    @Field(() => [SalaryScaleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SalaryScaleOrderByWithRelationInput>;
    @Field(() => SalaryScaleWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof SalaryScaleWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SalaryScaleScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SalaryScaleScalarFieldEnum>;
}

@ArgsType()
export class FindManySalaryScaleArgs {
    @Field(() => SalaryScaleWhereInput, {nullable:true})
    where?: InstanceType<typeof SalaryScaleWhereInput>;
    @Field(() => [SalaryScaleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SalaryScaleOrderByWithRelationInput>;
    @Field(() => SalaryScaleWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof SalaryScaleWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SalaryScaleScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SalaryScaleScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueSalaryScaleArgs {
    @Field(() => SalaryScaleWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof SalaryScaleWhereUniqueInput>;
}

@ArgsType()
export class SalaryScaleAggregateArgs {
    @Field(() => SalaryScaleWhereInput, {nullable:true})
    where?: InstanceType<typeof SalaryScaleWhereInput>;
    @Field(() => [SalaryScaleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SalaryScaleOrderByWithRelationInput>;
    @Field(() => SalaryScaleWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof SalaryScaleWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => SalaryScaleCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SalaryScaleCountAggregateInput>;
    @Field(() => SalaryScaleAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof SalaryScaleAvgAggregateInput>;
    @Field(() => SalaryScaleSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof SalaryScaleSumAggregateInput>;
    @Field(() => SalaryScaleMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SalaryScaleMinAggregateInput>;
    @Field(() => SalaryScaleMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SalaryScaleMaxAggregateInput>;
}

@InputType()
export class SalaryScaleAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    jobGradeId?: true;
    @Field(() => Boolean, {nullable:true})
    jobStepId?: true;
    @Field(() => Boolean, {nullable:true})
    salary?: true;
}

@ObjectType()
export class SalaryScaleAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    jobGradeId?: number;
    @Field(() => Float, {nullable:true})
    jobStepId?: number;
    @Field(() => Float, {nullable:true})
    salary?: number;
}

@InputType()
export class SalaryScaleAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    jobGradeId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    jobStepId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    salary?: keyof typeof SortOrder;
}

@InputType()
export class SalaryScaleCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    jobGradeId?: true;
    @Field(() => Boolean, {nullable:true})
    jobStepId?: true;
    @Field(() => Boolean, {nullable:true})
    salary?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class SalaryScaleCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    jobGradeId!: number;
    @Field(() => Int, {nullable:false})
    jobStepId!: number;
    @Field(() => Int, {nullable:false})
    salary!: number;
    @Field(() => Int, {nullable:false})
    deleted!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class SalaryScaleCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    jobGradeId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    jobStepId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    salary?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class SalaryScaleCount {
    @Field(() => Int, {nullable:false})
    positionClasses!: number;
}

@InputType()
export class SalaryScaleCreateManyJobGradeInputEnvelope {
    @Field(() => [SalaryScaleCreateManyJobGradeInput], {nullable:false})
    data!: Array<SalaryScaleCreateManyJobGradeInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class SalaryScaleCreateManyJobGradeInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    jobStepId?: number;
    @Field(() => Float, {nullable:true})
    salary?: number;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class SalaryScaleCreateManyJobStepInputEnvelope {
    @Field(() => [SalaryScaleCreateManyJobStepInput], {nullable:false})
    data!: Array<SalaryScaleCreateManyJobStepInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class SalaryScaleCreateManyJobStepInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    jobGradeId?: number;
    @Field(() => Float, {nullable:true})
    salary?: number;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class SalaryScaleCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    jobGradeId?: number;
    @Field(() => Int, {nullable:true})
    jobStepId?: number;
    @Field(() => Float, {nullable:true})
    salary?: number;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class SalaryScaleCreateNestedManyWithoutJobGradeInput {
    @Field(() => [SalaryScaleCreateWithoutJobGradeInput], {nullable:true})
    create?: Array<SalaryScaleCreateWithoutJobGradeInput>;
    @Field(() => [SalaryScaleCreateOrConnectWithoutJobGradeInput], {nullable:true})
    connectOrCreate?: Array<SalaryScaleCreateOrConnectWithoutJobGradeInput>;
    @Field(() => SalaryScaleCreateManyJobGradeInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof SalaryScaleCreateManyJobGradeInputEnvelope>;
    @Field(() => [SalaryScaleWhereUniqueInput], {nullable:true})
    connect?: Array<SalaryScaleWhereUniqueInput>;
}

@InputType()
export class SalaryScaleCreateNestedManyWithoutJobStepInput {
    @Field(() => [SalaryScaleCreateWithoutJobStepInput], {nullable:true})
    create?: Array<SalaryScaleCreateWithoutJobStepInput>;
    @Field(() => [SalaryScaleCreateOrConnectWithoutJobStepInput], {nullable:true})
    connectOrCreate?: Array<SalaryScaleCreateOrConnectWithoutJobStepInput>;
    @Field(() => SalaryScaleCreateManyJobStepInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof SalaryScaleCreateManyJobStepInputEnvelope>;
    @Field(() => [SalaryScaleWhereUniqueInput], {nullable:true})
    connect?: Array<SalaryScaleWhereUniqueInput>;
}

@InputType()
export class SalaryScaleCreateNestedOneWithoutPositionClassesInput {
    @Field(() => SalaryScaleCreateWithoutPositionClassesInput, {nullable:true})
    create?: InstanceType<typeof SalaryScaleCreateWithoutPositionClassesInput>;
    @Field(() => SalaryScaleCreateOrConnectWithoutPositionClassesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof SalaryScaleCreateOrConnectWithoutPositionClassesInput>;
    @Field(() => SalaryScaleWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof SalaryScaleWhereUniqueInput>;
}

@InputType()
export class SalaryScaleCreateOrConnectWithoutJobGradeInput {
    @Field(() => SalaryScaleWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof SalaryScaleWhereUniqueInput>;
    @Field(() => SalaryScaleCreateWithoutJobGradeInput, {nullable:false})
    create!: InstanceType<typeof SalaryScaleCreateWithoutJobGradeInput>;
}

@InputType()
export class SalaryScaleCreateOrConnectWithoutJobStepInput {
    @Field(() => SalaryScaleWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof SalaryScaleWhereUniqueInput>;
    @Field(() => SalaryScaleCreateWithoutJobStepInput, {nullable:false})
    create!: InstanceType<typeof SalaryScaleCreateWithoutJobStepInput>;
}

@InputType()
export class SalaryScaleCreateOrConnectWithoutPositionClassesInput {
    @Field(() => SalaryScaleWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof SalaryScaleWhereUniqueInput>;
    @Field(() => SalaryScaleCreateWithoutPositionClassesInput, {nullable:false})
    create!: InstanceType<typeof SalaryScaleCreateWithoutPositionClassesInput>;
}

@InputType()
export class SalaryScaleCreateWithoutJobGradeInput {
    @Field(() => Float, {nullable:true})
    salary?: number;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => JobStepCreateNestedOneWithoutSalaryScalesInput, {nullable:true})
    jobStep?: InstanceType<typeof JobStepCreateNestedOneWithoutSalaryScalesInput>;
    @Field(() => PositionClassCreateNestedManyWithoutSalaryScaleInput, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassCreateNestedManyWithoutSalaryScaleInput>;
}

@InputType()
export class SalaryScaleCreateWithoutJobStepInput {
    @Field(() => Float, {nullable:true})
    salary?: number;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => JobGradeCreateNestedOneWithoutSalaryScalesInput, {nullable:true})
    jobGrade?: InstanceType<typeof JobGradeCreateNestedOneWithoutSalaryScalesInput>;
    @Field(() => PositionClassCreateNestedManyWithoutSalaryScaleInput, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassCreateNestedManyWithoutSalaryScaleInput>;
}

@InputType()
export class SalaryScaleCreateWithoutPositionClassesInput {
    @Field(() => Float, {nullable:true})
    salary?: number;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => JobGradeCreateNestedOneWithoutSalaryScalesInput, {nullable:true})
    jobGrade?: InstanceType<typeof JobGradeCreateNestedOneWithoutSalaryScalesInput>;
    @Field(() => JobStepCreateNestedOneWithoutSalaryScalesInput, {nullable:true})
    jobStep?: InstanceType<typeof JobStepCreateNestedOneWithoutSalaryScalesInput>;
}

@InputType()
export class SalaryScaleCreateInput {
    @Field(() => Float, {nullable:true})
    salary?: number;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => JobGradeCreateNestedOneWithoutSalaryScalesInput, {nullable:true})
    jobGrade?: InstanceType<typeof JobGradeCreateNestedOneWithoutSalaryScalesInput>;
    @Field(() => JobStepCreateNestedOneWithoutSalaryScalesInput, {nullable:true})
    jobStep?: InstanceType<typeof JobStepCreateNestedOneWithoutSalaryScalesInput>;
    @Field(() => PositionClassCreateNestedManyWithoutSalaryScaleInput, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassCreateNestedManyWithoutSalaryScaleInput>;
}

@ArgsType()
export class SalaryScaleGroupByArgs {
    @Field(() => SalaryScaleWhereInput, {nullable:true})
    where?: InstanceType<typeof SalaryScaleWhereInput>;
    @Field(() => [SalaryScaleOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SalaryScaleOrderByWithAggregationInput>;
    @Field(() => [SalaryScaleScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SalaryScaleScalarFieldEnum>;
    @Field(() => SalaryScaleScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof SalaryScaleScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => SalaryScaleCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SalaryScaleCountAggregateInput>;
    @Field(() => SalaryScaleAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof SalaryScaleAvgAggregateInput>;
    @Field(() => SalaryScaleSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof SalaryScaleSumAggregateInput>;
    @Field(() => SalaryScaleMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SalaryScaleMinAggregateInput>;
    @Field(() => SalaryScaleMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SalaryScaleMaxAggregateInput>;
}

@ObjectType()
export class SalaryScaleGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:true})
    jobGradeId?: number;
    @Field(() => Int, {nullable:true})
    jobStepId?: number;
    @Field(() => Float, {nullable:false})
    salary!: number;
    @Field(() => Boolean, {nullable:false})
    deleted!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => SalaryScaleCountAggregate, {nullable:true})
    _count?: InstanceType<typeof SalaryScaleCountAggregate>;
    @Field(() => SalaryScaleAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof SalaryScaleAvgAggregate>;
    @Field(() => SalaryScaleSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof SalaryScaleSumAggregate>;
    @Field(() => SalaryScaleMinAggregate, {nullable:true})
    _min?: InstanceType<typeof SalaryScaleMinAggregate>;
    @Field(() => SalaryScaleMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof SalaryScaleMaxAggregate>;
}

@InputType()
export class SalaryScaleListRelationFilter {
    @Field(() => SalaryScaleWhereInput, {nullable:true})
    every?: InstanceType<typeof SalaryScaleWhereInput>;
    @Field(() => SalaryScaleWhereInput, {nullable:true})
    some?: InstanceType<typeof SalaryScaleWhereInput>;
    @Field(() => SalaryScaleWhereInput, {nullable:true})
    none?: InstanceType<typeof SalaryScaleWhereInput>;
}

@InputType()
export class SalaryScaleMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    jobGradeId?: true;
    @Field(() => Boolean, {nullable:true})
    jobStepId?: true;
    @Field(() => Boolean, {nullable:true})
    salary?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class SalaryScaleMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    jobGradeId?: number;
    @Field(() => Int, {nullable:true})
    jobStepId?: number;
    @Field(() => Float, {nullable:true})
    salary?: number;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class SalaryScaleMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    jobGradeId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    jobStepId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    salary?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class SalaryScaleMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    jobGradeId?: true;
    @Field(() => Boolean, {nullable:true})
    jobStepId?: true;
    @Field(() => Boolean, {nullable:true})
    salary?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class SalaryScaleMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    jobGradeId?: number;
    @Field(() => Int, {nullable:true})
    jobStepId?: number;
    @Field(() => Float, {nullable:true})
    salary?: number;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class SalaryScaleMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    jobGradeId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    jobStepId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    salary?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class SalaryScaleOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class SalaryScaleOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    jobGradeId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    jobStepId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    salary?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SalaryScaleCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SalaryScaleCountOrderByAggregateInput>;
    @Field(() => SalaryScaleAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof SalaryScaleAvgOrderByAggregateInput>;
    @Field(() => SalaryScaleMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SalaryScaleMaxOrderByAggregateInput>;
    @Field(() => SalaryScaleMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SalaryScaleMinOrderByAggregateInput>;
    @Field(() => SalaryScaleSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof SalaryScaleSumOrderByAggregateInput>;
}

@InputType()
export class SalaryScaleOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => JobGradeOrderByWithRelationInput, {nullable:true})
    jobGrade?: InstanceType<typeof JobGradeOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    jobGradeId?: keyof typeof SortOrder;
    @Field(() => JobStepOrderByWithRelationInput, {nullable:true})
    jobStep?: InstanceType<typeof JobStepOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    jobStepId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    salary?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => PositionClassOrderByRelationAggregateInput, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassOrderByRelationAggregateInput>;
}

@InputType()
export class SalaryScaleRelationFilter {
    @Field(() => SalaryScaleWhereInput, {nullable:true})
    is?: InstanceType<typeof SalaryScaleWhereInput>;
    @Field(() => SalaryScaleWhereInput, {nullable:true})
    isNot?: InstanceType<typeof SalaryScaleWhereInput>;
}

@InputType()
export class SalaryScaleScalarWhereWithAggregatesInput {
    @Field(() => [SalaryScaleScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SalaryScaleScalarWhereWithAggregatesInput>;
    @Field(() => [SalaryScaleScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SalaryScaleScalarWhereWithAggregatesInput>;
    @Field(() => [SalaryScaleScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SalaryScaleScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    jobGradeId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    jobStepId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    salary?: InstanceType<typeof FloatWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    deleted?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class SalaryScaleScalarWhereInput {
    @Field(() => [SalaryScaleScalarWhereInput], {nullable:true})
    AND?: Array<SalaryScaleScalarWhereInput>;
    @Field(() => [SalaryScaleScalarWhereInput], {nullable:true})
    OR?: Array<SalaryScaleScalarWhereInput>;
    @Field(() => [SalaryScaleScalarWhereInput], {nullable:true})
    NOT?: Array<SalaryScaleScalarWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    jobGradeId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    jobStepId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => FloatFilter, {nullable:true})
    salary?: InstanceType<typeof FloatFilter>;
    @Field(() => BoolFilter, {nullable:true})
    deleted?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class SalaryScaleSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    jobGradeId?: true;
    @Field(() => Boolean, {nullable:true})
    jobStepId?: true;
    @Field(() => Boolean, {nullable:true})
    salary?: true;
}

@ObjectType()
export class SalaryScaleSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    jobGradeId?: number;
    @Field(() => Int, {nullable:true})
    jobStepId?: number;
    @Field(() => Float, {nullable:true})
    salary?: number;
}

@InputType()
export class SalaryScaleSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    jobGradeId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    jobStepId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    salary?: keyof typeof SortOrder;
}

@InputType()
export class SalaryScaleUncheckedCreateNestedManyWithoutJobGradeInput {
    @Field(() => [SalaryScaleCreateWithoutJobGradeInput], {nullable:true})
    create?: Array<SalaryScaleCreateWithoutJobGradeInput>;
    @Field(() => [SalaryScaleCreateOrConnectWithoutJobGradeInput], {nullable:true})
    connectOrCreate?: Array<SalaryScaleCreateOrConnectWithoutJobGradeInput>;
    @Field(() => SalaryScaleCreateManyJobGradeInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof SalaryScaleCreateManyJobGradeInputEnvelope>;
    @Field(() => [SalaryScaleWhereUniqueInput], {nullable:true})
    connect?: Array<SalaryScaleWhereUniqueInput>;
}

@InputType()
export class SalaryScaleUncheckedCreateNestedManyWithoutJobStepInput {
    @Field(() => [SalaryScaleCreateWithoutJobStepInput], {nullable:true})
    create?: Array<SalaryScaleCreateWithoutJobStepInput>;
    @Field(() => [SalaryScaleCreateOrConnectWithoutJobStepInput], {nullable:true})
    connectOrCreate?: Array<SalaryScaleCreateOrConnectWithoutJobStepInput>;
    @Field(() => SalaryScaleCreateManyJobStepInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof SalaryScaleCreateManyJobStepInputEnvelope>;
    @Field(() => [SalaryScaleWhereUniqueInput], {nullable:true})
    connect?: Array<SalaryScaleWhereUniqueInput>;
}

@InputType()
export class SalaryScaleUncheckedCreateWithoutJobGradeInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    jobStepId?: number;
    @Field(() => Float, {nullable:true})
    salary?: number;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PositionClassUncheckedCreateNestedManyWithoutSalaryScaleInput, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassUncheckedCreateNestedManyWithoutSalaryScaleInput>;
}

@InputType()
export class SalaryScaleUncheckedCreateWithoutJobStepInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    jobGradeId?: number;
    @Field(() => Float, {nullable:true})
    salary?: number;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PositionClassUncheckedCreateNestedManyWithoutSalaryScaleInput, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassUncheckedCreateNestedManyWithoutSalaryScaleInput>;
}

@InputType()
export class SalaryScaleUncheckedCreateWithoutPositionClassesInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    jobGradeId?: number;
    @Field(() => Int, {nullable:true})
    jobStepId?: number;
    @Field(() => Float, {nullable:true})
    salary?: number;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class SalaryScaleUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    jobGradeId?: number;
    @Field(() => Int, {nullable:true})
    jobStepId?: number;
    @Field(() => Float, {nullable:true})
    salary?: number;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PositionClassUncheckedCreateNestedManyWithoutSalaryScaleInput, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassUncheckedCreateNestedManyWithoutSalaryScaleInput>;
}

@InputType()
export class SalaryScaleUncheckedUpdateManyWithoutJobGradeInput {
    @Field(() => [SalaryScaleCreateWithoutJobGradeInput], {nullable:true})
    create?: Array<SalaryScaleCreateWithoutJobGradeInput>;
    @Field(() => [SalaryScaleCreateOrConnectWithoutJobGradeInput], {nullable:true})
    connectOrCreate?: Array<SalaryScaleCreateOrConnectWithoutJobGradeInput>;
    @Field(() => [SalaryScaleUpsertWithWhereUniqueWithoutJobGradeInput], {nullable:true})
    upsert?: Array<SalaryScaleUpsertWithWhereUniqueWithoutJobGradeInput>;
    @Field(() => SalaryScaleCreateManyJobGradeInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof SalaryScaleCreateManyJobGradeInputEnvelope>;
    @Field(() => [SalaryScaleWhereUniqueInput], {nullable:true})
    connect?: Array<SalaryScaleWhereUniqueInput>;
    @Field(() => [SalaryScaleWhereUniqueInput], {nullable:true})
    set?: Array<SalaryScaleWhereUniqueInput>;
    @Field(() => [SalaryScaleWhereUniqueInput], {nullable:true})
    disconnect?: Array<SalaryScaleWhereUniqueInput>;
    @Field(() => [SalaryScaleWhereUniqueInput], {nullable:true})
    delete?: Array<SalaryScaleWhereUniqueInput>;
    @Field(() => [SalaryScaleUpdateWithWhereUniqueWithoutJobGradeInput], {nullable:true})
    update?: Array<SalaryScaleUpdateWithWhereUniqueWithoutJobGradeInput>;
    @Field(() => [SalaryScaleUpdateManyWithWhereWithoutJobGradeInput], {nullable:true})
    updateMany?: Array<SalaryScaleUpdateManyWithWhereWithoutJobGradeInput>;
    @Field(() => [SalaryScaleScalarWhereInput], {nullable:true})
    deleteMany?: Array<SalaryScaleScalarWhereInput>;
}

@InputType()
export class SalaryScaleUncheckedUpdateManyWithoutJobStepInput {
    @Field(() => [SalaryScaleCreateWithoutJobStepInput], {nullable:true})
    create?: Array<SalaryScaleCreateWithoutJobStepInput>;
    @Field(() => [SalaryScaleCreateOrConnectWithoutJobStepInput], {nullable:true})
    connectOrCreate?: Array<SalaryScaleCreateOrConnectWithoutJobStepInput>;
    @Field(() => [SalaryScaleUpsertWithWhereUniqueWithoutJobStepInput], {nullable:true})
    upsert?: Array<SalaryScaleUpsertWithWhereUniqueWithoutJobStepInput>;
    @Field(() => SalaryScaleCreateManyJobStepInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof SalaryScaleCreateManyJobStepInputEnvelope>;
    @Field(() => [SalaryScaleWhereUniqueInput], {nullable:true})
    connect?: Array<SalaryScaleWhereUniqueInput>;
    @Field(() => [SalaryScaleWhereUniqueInput], {nullable:true})
    set?: Array<SalaryScaleWhereUniqueInput>;
    @Field(() => [SalaryScaleWhereUniqueInput], {nullable:true})
    disconnect?: Array<SalaryScaleWhereUniqueInput>;
    @Field(() => [SalaryScaleWhereUniqueInput], {nullable:true})
    delete?: Array<SalaryScaleWhereUniqueInput>;
    @Field(() => [SalaryScaleUpdateWithWhereUniqueWithoutJobStepInput], {nullable:true})
    update?: Array<SalaryScaleUpdateWithWhereUniqueWithoutJobStepInput>;
    @Field(() => [SalaryScaleUpdateManyWithWhereWithoutJobStepInput], {nullable:true})
    updateMany?: Array<SalaryScaleUpdateManyWithWhereWithoutJobStepInput>;
    @Field(() => [SalaryScaleScalarWhereInput], {nullable:true})
    deleteMany?: Array<SalaryScaleScalarWhereInput>;
}

@InputType()
export class SalaryScaleUncheckedUpdateManyWithoutSalaryScalesInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    jobStepId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    salary?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SalaryScaleUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    jobGradeId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    jobStepId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    salary?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SalaryScaleUncheckedUpdateWithoutJobGradeInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    jobStepId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    salary?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PositionClassUncheckedUpdateManyWithoutSalaryScaleInput, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassUncheckedUpdateManyWithoutSalaryScaleInput>;
}

@InputType()
export class SalaryScaleUncheckedUpdateWithoutJobStepInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    jobGradeId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    salary?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PositionClassUncheckedUpdateManyWithoutSalaryScaleInput, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassUncheckedUpdateManyWithoutSalaryScaleInput>;
}

@InputType()
export class SalaryScaleUncheckedUpdateWithoutPositionClassesInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    jobGradeId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    jobStepId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    salary?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SalaryScaleUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    jobGradeId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    jobStepId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    salary?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PositionClassUncheckedUpdateManyWithoutSalaryScaleInput, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassUncheckedUpdateManyWithoutSalaryScaleInput>;
}

@InputType()
export class SalaryScaleUpdateManyMutationInput {
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    salary?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SalaryScaleUpdateManyWithWhereWithoutJobGradeInput {
    @Field(() => SalaryScaleScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof SalaryScaleScalarWhereInput>;
    @Field(() => SalaryScaleUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof SalaryScaleUpdateManyMutationInput>;
}

@InputType()
export class SalaryScaleUpdateManyWithWhereWithoutJobStepInput {
    @Field(() => SalaryScaleScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof SalaryScaleScalarWhereInput>;
    @Field(() => SalaryScaleUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof SalaryScaleUpdateManyMutationInput>;
}

@InputType()
export class SalaryScaleUpdateManyWithoutJobGradeInput {
    @Field(() => [SalaryScaleCreateWithoutJobGradeInput], {nullable:true})
    create?: Array<SalaryScaleCreateWithoutJobGradeInput>;
    @Field(() => [SalaryScaleCreateOrConnectWithoutJobGradeInput], {nullable:true})
    connectOrCreate?: Array<SalaryScaleCreateOrConnectWithoutJobGradeInput>;
    @Field(() => [SalaryScaleUpsertWithWhereUniqueWithoutJobGradeInput], {nullable:true})
    upsert?: Array<SalaryScaleUpsertWithWhereUniqueWithoutJobGradeInput>;
    @Field(() => SalaryScaleCreateManyJobGradeInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof SalaryScaleCreateManyJobGradeInputEnvelope>;
    @Field(() => [SalaryScaleWhereUniqueInput], {nullable:true})
    connect?: Array<SalaryScaleWhereUniqueInput>;
    @Field(() => [SalaryScaleWhereUniqueInput], {nullable:true})
    set?: Array<SalaryScaleWhereUniqueInput>;
    @Field(() => [SalaryScaleWhereUniqueInput], {nullable:true})
    disconnect?: Array<SalaryScaleWhereUniqueInput>;
    @Field(() => [SalaryScaleWhereUniqueInput], {nullable:true})
    delete?: Array<SalaryScaleWhereUniqueInput>;
    @Field(() => [SalaryScaleUpdateWithWhereUniqueWithoutJobGradeInput], {nullable:true})
    update?: Array<SalaryScaleUpdateWithWhereUniqueWithoutJobGradeInput>;
    @Field(() => [SalaryScaleUpdateManyWithWhereWithoutJobGradeInput], {nullable:true})
    updateMany?: Array<SalaryScaleUpdateManyWithWhereWithoutJobGradeInput>;
    @Field(() => [SalaryScaleScalarWhereInput], {nullable:true})
    deleteMany?: Array<SalaryScaleScalarWhereInput>;
}

@InputType()
export class SalaryScaleUpdateManyWithoutJobStepInput {
    @Field(() => [SalaryScaleCreateWithoutJobStepInput], {nullable:true})
    create?: Array<SalaryScaleCreateWithoutJobStepInput>;
    @Field(() => [SalaryScaleCreateOrConnectWithoutJobStepInput], {nullable:true})
    connectOrCreate?: Array<SalaryScaleCreateOrConnectWithoutJobStepInput>;
    @Field(() => [SalaryScaleUpsertWithWhereUniqueWithoutJobStepInput], {nullable:true})
    upsert?: Array<SalaryScaleUpsertWithWhereUniqueWithoutJobStepInput>;
    @Field(() => SalaryScaleCreateManyJobStepInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof SalaryScaleCreateManyJobStepInputEnvelope>;
    @Field(() => [SalaryScaleWhereUniqueInput], {nullable:true})
    connect?: Array<SalaryScaleWhereUniqueInput>;
    @Field(() => [SalaryScaleWhereUniqueInput], {nullable:true})
    set?: Array<SalaryScaleWhereUniqueInput>;
    @Field(() => [SalaryScaleWhereUniqueInput], {nullable:true})
    disconnect?: Array<SalaryScaleWhereUniqueInput>;
    @Field(() => [SalaryScaleWhereUniqueInput], {nullable:true})
    delete?: Array<SalaryScaleWhereUniqueInput>;
    @Field(() => [SalaryScaleUpdateWithWhereUniqueWithoutJobStepInput], {nullable:true})
    update?: Array<SalaryScaleUpdateWithWhereUniqueWithoutJobStepInput>;
    @Field(() => [SalaryScaleUpdateManyWithWhereWithoutJobStepInput], {nullable:true})
    updateMany?: Array<SalaryScaleUpdateManyWithWhereWithoutJobStepInput>;
    @Field(() => [SalaryScaleScalarWhereInput], {nullable:true})
    deleteMany?: Array<SalaryScaleScalarWhereInput>;
}

@InputType()
export class SalaryScaleUpdateOneWithoutPositionClassesInput {
    @Field(() => SalaryScaleCreateWithoutPositionClassesInput, {nullable:true})
    create?: InstanceType<typeof SalaryScaleCreateWithoutPositionClassesInput>;
    @Field(() => SalaryScaleCreateOrConnectWithoutPositionClassesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof SalaryScaleCreateOrConnectWithoutPositionClassesInput>;
    @Field(() => SalaryScaleUpsertWithoutPositionClassesInput, {nullable:true})
    upsert?: InstanceType<typeof SalaryScaleUpsertWithoutPositionClassesInput>;
    @Field(() => SalaryScaleWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof SalaryScaleWhereUniqueInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => SalaryScaleUpdateWithoutPositionClassesInput, {nullable:true})
    update?: InstanceType<typeof SalaryScaleUpdateWithoutPositionClassesInput>;
}

@InputType()
export class SalaryScaleUpdateWithWhereUniqueWithoutJobGradeInput {
    @Field(() => SalaryScaleWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof SalaryScaleWhereUniqueInput>;
    @Field(() => SalaryScaleUpdateWithoutJobGradeInput, {nullable:false})
    data!: InstanceType<typeof SalaryScaleUpdateWithoutJobGradeInput>;
}

@InputType()
export class SalaryScaleUpdateWithWhereUniqueWithoutJobStepInput {
    @Field(() => SalaryScaleWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof SalaryScaleWhereUniqueInput>;
    @Field(() => SalaryScaleUpdateWithoutJobStepInput, {nullable:false})
    data!: InstanceType<typeof SalaryScaleUpdateWithoutJobStepInput>;
}

@InputType()
export class SalaryScaleUpdateWithoutJobGradeInput {
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    salary?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => JobStepUpdateOneWithoutSalaryScalesInput, {nullable:true})
    jobStep?: InstanceType<typeof JobStepUpdateOneWithoutSalaryScalesInput>;
    @Field(() => PositionClassUpdateManyWithoutSalaryScaleInput, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassUpdateManyWithoutSalaryScaleInput>;
}

@InputType()
export class SalaryScaleUpdateWithoutJobStepInput {
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    salary?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => JobGradeUpdateOneWithoutSalaryScalesInput, {nullable:true})
    jobGrade?: InstanceType<typeof JobGradeUpdateOneWithoutSalaryScalesInput>;
    @Field(() => PositionClassUpdateManyWithoutSalaryScaleInput, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassUpdateManyWithoutSalaryScaleInput>;
}

@InputType()
export class SalaryScaleUpdateWithoutPositionClassesInput {
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    salary?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => JobGradeUpdateOneWithoutSalaryScalesInput, {nullable:true})
    jobGrade?: InstanceType<typeof JobGradeUpdateOneWithoutSalaryScalesInput>;
    @Field(() => JobStepUpdateOneWithoutSalaryScalesInput, {nullable:true})
    jobStep?: InstanceType<typeof JobStepUpdateOneWithoutSalaryScalesInput>;
}

@InputType()
export class SalaryScaleUpdateInput {
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    salary?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => JobGradeUpdateOneWithoutSalaryScalesInput, {nullable:true})
    jobGrade?: InstanceType<typeof JobGradeUpdateOneWithoutSalaryScalesInput>;
    @Field(() => JobStepUpdateOneWithoutSalaryScalesInput, {nullable:true})
    jobStep?: InstanceType<typeof JobStepUpdateOneWithoutSalaryScalesInput>;
    @Field(() => PositionClassUpdateManyWithoutSalaryScaleInput, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassUpdateManyWithoutSalaryScaleInput>;
}

@InputType()
export class SalaryScaleUpsertWithWhereUniqueWithoutJobGradeInput {
    @Field(() => SalaryScaleWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof SalaryScaleWhereUniqueInput>;
    @Field(() => SalaryScaleUpdateWithoutJobGradeInput, {nullable:false})
    update!: InstanceType<typeof SalaryScaleUpdateWithoutJobGradeInput>;
    @Field(() => SalaryScaleCreateWithoutJobGradeInput, {nullable:false})
    create!: InstanceType<typeof SalaryScaleCreateWithoutJobGradeInput>;
}

@InputType()
export class SalaryScaleUpsertWithWhereUniqueWithoutJobStepInput {
    @Field(() => SalaryScaleWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof SalaryScaleWhereUniqueInput>;
    @Field(() => SalaryScaleUpdateWithoutJobStepInput, {nullable:false})
    update!: InstanceType<typeof SalaryScaleUpdateWithoutJobStepInput>;
    @Field(() => SalaryScaleCreateWithoutJobStepInput, {nullable:false})
    create!: InstanceType<typeof SalaryScaleCreateWithoutJobStepInput>;
}

@InputType()
export class SalaryScaleUpsertWithoutPositionClassesInput {
    @Field(() => SalaryScaleUpdateWithoutPositionClassesInput, {nullable:false})
    update!: InstanceType<typeof SalaryScaleUpdateWithoutPositionClassesInput>;
    @Field(() => SalaryScaleCreateWithoutPositionClassesInput, {nullable:false})
    create!: InstanceType<typeof SalaryScaleCreateWithoutPositionClassesInput>;
}

@InputType()
export class SalaryScaleWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class SalaryScaleWhereInput {
    @Field(() => [SalaryScaleWhereInput], {nullable:true})
    AND?: Array<SalaryScaleWhereInput>;
    @Field(() => [SalaryScaleWhereInput], {nullable:true})
    OR?: Array<SalaryScaleWhereInput>;
    @Field(() => [SalaryScaleWhereInput], {nullable:true})
    NOT?: Array<SalaryScaleWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => JobGradeRelationFilter, {nullable:true})
    jobGrade?: InstanceType<typeof JobGradeRelationFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    jobGradeId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => JobStepRelationFilter, {nullable:true})
    jobStep?: InstanceType<typeof JobStepRelationFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    jobStepId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => FloatFilter, {nullable:true})
    salary?: InstanceType<typeof FloatFilter>;
    @Field(() => BoolFilter, {nullable:true})
    deleted?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => PositionClassListRelationFilter, {nullable:true})
    positionClasses?: InstanceType<typeof PositionClassListRelationFilter>;
}

@ObjectType()
export class SalaryScale {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => JobGrade, {nullable:true})
    jobGrade?: InstanceType<typeof JobGrade> | null;
    @Field(() => Int, {nullable:true})
    jobGradeId!: number | null;
    @Field(() => JobStep, {nullable:true})
    jobStep?: InstanceType<typeof JobStep> | null;
    @Field(() => Int, {nullable:true})
    jobStepId!: number | null;
    @Field(() => Float, {nullable:false,defaultValue:0})
    salary!: number;
    @Field(() => Boolean, {nullable:false,defaultValue:false})
    deleted!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [PositionClass], {nullable:true})
    positionClasses?: Array<PositionClass>;
    @Field(() => SalaryScaleCount, {nullable:true})
    _count?: InstanceType<typeof SalaryScaleCount> | null;
}

@ArgsType()
export class UpdateManySalaryScaleArgs {
    @Field(() => SalaryScaleUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof SalaryScaleUpdateManyMutationInput>;
    @Field(() => SalaryScaleWhereInput, {nullable:true})
    where?: InstanceType<typeof SalaryScaleWhereInput>;
}

@ArgsType()
export class UpdateOneSalaryScaleArgs {
    @Field(() => SalaryScaleUpdateInput, {nullable:false})
    data!: InstanceType<typeof SalaryScaleUpdateInput>;
    @Field(() => SalaryScaleWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof SalaryScaleWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneSalaryScaleArgs {
    @Field(() => SalaryScaleWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof SalaryScaleWhereUniqueInput>;
    @Field(() => SalaryScaleCreateInput, {nullable:false})
    create!: InstanceType<typeof SalaryScaleCreateInput>;
    @Field(() => SalaryScaleUpdateInput, {nullable:false})
    update!: InstanceType<typeof SalaryScaleUpdateInput>;
}

@ObjectType()
export class AggregateUser {
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregate>;
    @Field(() => UserSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserArgs {
    @Field(() => [UserCreateManyInput], {nullable:false})
    data!: Array<UserCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserArgs {
    @Field(() => UserCreateInput, {nullable:false})
    data!: InstanceType<typeof UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class DeleteOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class FindFirstUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyUserArgs {
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class UpdateOneUserArgs {
    @Field(() => UserUpdateInput, {nullable:false})
    data!: InstanceType<typeof UserUpdateInput>;
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateInput, {nullable:false})
    create!: InstanceType<typeof UserCreateInput>;
    @Field(() => UserUpdateInput, {nullable:false})
    update!: InstanceType<typeof UserUpdateInput>;
}

@ArgsType()
export class UserAggregateArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregateInput>;
    @Field(() => UserSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@InputType()
export class UserAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class UserAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class UserAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class UserCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    username?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    verified?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    username!: number;
    @Field(() => Int, {nullable:false})
    email!: number;
    @Field(() => Int, {nullable:false})
    password!: number;
    @Field(() => Int, {nullable:false})
    verified!: number;
    @Field(() => Int, {nullable:false})
    deleted!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    verified?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UserCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:true})
    verified?: boolean;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserCreateInput {
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:true})
    verified?: boolean;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@ArgsType()
export class UserGroupByArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithAggregationInput>;
    @Field(() => [UserScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserScalarFieldEnum>;
    @Field(() => UserScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregateInput>;
    @Field(() => UserSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ObjectType()
export class UserGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:false})
    verified!: boolean;
    @Field(() => Boolean, {nullable:false})
    deleted!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregate>;
    @Field(() => UserSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@InputType()
export class UserMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    username?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    verified?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class UserMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    password?: string;
    @Field(() => Boolean, {nullable:true})
    verified?: boolean;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    verified?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UserMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    username?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    verified?: true;
    @Field(() => Boolean, {nullable:true})
    deleted?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class UserMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    password?: string;
    @Field(() => Boolean, {nullable:true})
    verified?: boolean;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    verified?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UserOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    verified?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => UserCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    @Field(() => UserAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserAvgOrderByAggregateInput>;
    @Field(() => UserMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    @Field(() => UserMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
    @Field(() => UserSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserSumOrderByAggregateInput>;
}

@InputType()
export class UserOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    verified?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    username?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    password?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    verified?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    deleted?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class UserSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class UserSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class UserSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class UserUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:true})
    verified?: boolean;
    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    verified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    verified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    verified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    verified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    username?: string;
    @Field(() => String, {nullable:true})
    email?: string;
}

@InputType()
export class UserWhereInput {
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    username?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    verified?: InstanceType<typeof BoolFilter>;
    @Field(() => BoolFilter, {nullable:true})
    deleted?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class User {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    username!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Boolean, {nullable:false,defaultValue:false})
    verified!: boolean;
    @Field(() => Boolean, {nullable:false,defaultValue:false})
    deleted!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}

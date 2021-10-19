import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { Position } from '../position/position.model';
import { DepartmentCount } from './department-count.output';

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
    parent?: Department | null;

    @Field(() => [Department], {nullable:true})
    children?: Array<Department>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Position], {nullable:true})
    positions?: Array<Position>;

    @Field(() => DepartmentCount, {nullable:true})
    _count?: DepartmentCount | null;
}

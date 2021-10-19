import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Employee } from '../employee/employee.model';
import { EmploymentNatureCount } from './employment-nature-count.output';

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
    _count?: EmploymentNatureCount | null;
}

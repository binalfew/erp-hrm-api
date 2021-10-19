import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PositionClass } from '../position-class/position-class.model';
import { Int } from '@nestjs/graphql';
import { Department } from '../department/department.model';

@ObjectType()
export class Position {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => PositionClass, {nullable:true})
    positionClass?: PositionClass | null;

    @Field(() => Int, {nullable:true})
    positionClassId!: number | null;

    @Field(() => Department, {nullable:true})
    department?: Department | null;

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

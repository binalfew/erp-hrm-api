import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class JobGradeCount {

    @Field(() => Int, {nullable:false})
    salaryScales!: number;
}

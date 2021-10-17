import { Type } from '@nestjs/common';
import { ObjectType, Field } from '@nestjs/graphql';
import { FieldError } from './error';

export interface IResponse<T> {
  errors?: FieldError[] | undefined;
  response?: T | undefined;
}

export function Response<T>(classRef: Type<T>): Type<IResponse<T>> {
  @ObjectType({ isAbstract: true })
  abstract class FieldError {
    @Field()
    field: string;

    @Field()
    message: string;
  }

  @ObjectType({ isAbstract: true })
  abstract class Response<T> implements IResponse<T> {
    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[];

    @Field(() => classRef, { nullable: true })
    response?: T;
  }

  return Response as Type<IResponse<T>>;
}

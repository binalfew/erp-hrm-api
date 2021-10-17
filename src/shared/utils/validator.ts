import * as joi from 'joi';
import { FieldError } from '../models/error';

export const validate = (
  schema: joi.ObjectSchema<any> | joi.Schema<any>,
  input: any,
): FieldError[] | null => {
  const { error } = schema.validate(input, { abortEarly: false });

  if (error) {
    let errors = [];
    error.details.forEach((e) =>
      errors.push({
        field: e.context.key,
        message: e.message.replace(/['"]+/g, ''),
      }),
    );
    return errors;
  }

  return null;
};

export const validateCreateInput = (input: any): FieldError[] | null => {
  const rules = Object.keys(input).reduce((acc, key) => {
    if (Array.isArray(input[key])) {
      return {
        ...acc,
        [key]: joi.array(),
      };
    }

    return {
      ...acc,
      [key]: joi
        .string()
        .label(key.charAt(0).toUpperCase() + key.slice(1))
        .required(),
    };
  }, {});

  return validate(joi.object(rules), input);
};

export const validateUpdateInput = (input: any): FieldError[] | null => {
  const values = Object.keys(input).reduce((acc, key) => {
    return { ...acc, [key]: input[key].set };
  }, {});

  const rules = Object.keys(values).reduce((acc, key) => {
    if (Array.isArray(values[key])) {
      return {
        ...acc,
        [key]: joi.array(),
      };
    }

    return {
      ...acc,
      [key]: joi
        .string()
        .label(key.charAt(0).toUpperCase() + key.slice(1))
        .required(),
    };
  }, {});

  return validate(joi.object(rules), values);
};

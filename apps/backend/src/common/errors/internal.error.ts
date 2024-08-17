import { BaseError } from './base-error.error';
import { ErrorObject } from './error-object.type';

export class InternalError extends BaseError {
  constructor(errorObject: ErrorObject) {
    super(errorObject);
  }
}

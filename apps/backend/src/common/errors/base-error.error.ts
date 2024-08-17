import { ErrorObject } from './error-object.type';

export class BaseError {
  constructor(public errorObject: ErrorObject) {}
}

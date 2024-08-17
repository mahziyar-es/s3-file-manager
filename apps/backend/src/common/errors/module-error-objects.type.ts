import { ErrorObject } from './error-object.type';

type ModuleErrorObject<T> = ErrorObject & {
  code: T;
};

export type ModuleErrorObjects<TypeOfModuleErrorCodesEnum> = {
  [K in keyof TypeOfModuleErrorCodesEnum]: ModuleErrorObject<
    TypeOfModuleErrorCodesEnum[K]
  >;
};

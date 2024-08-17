import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  NotFoundException,
  BadRequestException,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotFoundError } from '../errors/not-found.error';
import { ConflictError } from '../errors/conflict.error';
import { InternalError } from '../errors/internal.error';
import { ValidationError } from '../errors/validation.error';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (error instanceof NotFoundError) {
          throw new NotFoundException(error.errorObject);
        } else if (error instanceof ConflictError) {
          throw new ConflictException(error.errorObject);
        } else if (error instanceof InternalError) {
          throw new InternalServerErrorException(error.errorObject);
        } else if (error instanceof ValidationError) {
          throw new BadRequestException(error.errorObject);
        }
        return throwError(() => error);
      }),
    );
  }
}

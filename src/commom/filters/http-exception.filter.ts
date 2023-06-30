import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Request, Response } from 'express';

Catch(HttpException);
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const request = context.getRequest<Request>();
    const response = context.getResponse<Response>();

    console.log(exception);

    if (exception instanceof InternalServerErrorException) {
      return response.status(500).send({
        statusCode: 500,
        message: 'Erro interno',
        error: exception.name,
      });
    }

    if (
      exception.name === 'QueryFailedError' ||
      exception.name === 'TypeError'
    ) {
      return response.status(400).send({
        statusCode: 400,
        message: 'Bad Request',
        error: exception.name,
      });
    }
    return response.status(exception.getStatus()).send(exception);
  }
}

import { ObjectSchema } from "joi";
import { HttpException, HttpStatus } from "@nestjs/common";

export function validator<T>(scheam: ObjectSchema<T>, dto: T): void {
  const { error } = scheam.validate(dto, { abortEarly: false });

  if (error) {
    throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
  }
}

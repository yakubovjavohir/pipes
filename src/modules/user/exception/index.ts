import { HttpException, HttpStatus } from "@nestjs/common";

export class UserNotFound extends HttpException {
    constructor(){
        super("user not found", HttpStatus.NOT_FOUND)
    }
}

export class EmailExist extends HttpException {
    constructor(){
        super("user exist", HttpStatus.BAD_REQUEST)
    }
}
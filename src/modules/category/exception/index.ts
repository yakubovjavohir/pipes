import { HttpException, HttpStatus } from "@nestjs/common";

export class CategoryNotFound extends HttpException {
    constructor(){
        super("category not found", HttpStatus.NOT_FOUND)
    }
}

export class NameExist extends HttpException {
    constructor(){
        super("category exist", HttpStatus.BAD_REQUEST)
    }
}
export class CustomError extends Error {
    constructor(protected statusCode:number, message:string){
        super(message)
        this.statusCode = statusCode
    }
}
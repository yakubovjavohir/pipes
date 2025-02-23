import { Request } from "@nestjs/common";
declare module "express-serve-static-core" {
    interface Request {
      currentUser?: object;
    }
}

export interface ITypeConfig {
    PORT:number,
    DB_URL:string
}

export type ID = string
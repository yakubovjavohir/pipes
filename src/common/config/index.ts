import { config } from "dotenv";
config()
import {ITypeConfig} from "../types/index"

export const configDto:ITypeConfig = {
    PORT:Number(process.env.PORT),
    DB_URL:String(process.env.DB_URL)
}   
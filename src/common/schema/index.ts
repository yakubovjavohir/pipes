import * as Joi from "joi"
import { ITypeConfig } from "../types"


export const schemaDto = Joi.object<ITypeConfig, true>({
    PORT: Joi.number().min(1000).max(9999).required(),
    DB_URL: Joi.string().required()
})
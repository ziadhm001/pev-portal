import { Request } from "express"
import { FilterQuery } from "mongoose"
export interface IExtendedRequest extends Request {
    user?: {
        id: string
    }
}

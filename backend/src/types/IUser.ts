import { Document } from "mongoose"
export interface IUser extends Document {
    firstName?: string
    lastName?: string
    email?: string
    password?: string
    lastLoginDate?: Date
    lastLoginIpAddress?: string
    passwordResetToken?: string
    passwordResetExpires?: number
}

export interface IPayload {
    id: string
    email: string
    iat: number
    exp: number
}

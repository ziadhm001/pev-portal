import mongoose from "mongoose"
import { IUser } from "../types/IUser"

export const UserSchema = new mongoose.Schema<IUser>(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        lastLoginDate: { type: Date },
        lastLoginIpAddress: { type: String },
        passwordResetToken: { type: String },
        passwordResetExpires: { type: Number },
    },
    {
        timestamps: true
    }
)

export const UserModel: mongoose.Model<IUser> = mongoose.model(
    "User",
    UserSchema
)

export default UserModel

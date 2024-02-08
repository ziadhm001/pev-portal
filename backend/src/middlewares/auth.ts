import { Response, NextFunction } from "express"
import { IExtendedRequest } from "../types/IExtendedRequest"
import { IPayload } from "../types/IUser"
import UserModel from "../models/user"
import jwt from "jsonwebtoken"

export const authenticate = async (
    req: IExtendedRequest,
    res: Response,
    next: NextFunction
) => {
    const token = req.header("Authorization")?.split(" ")[1]

    if (!token) {
        return res.status(401).json({ error: "No token, authorization denied" })
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.REFRESH_TOKEN_SECRET as string
        ) as IPayload

        const user = await UserModel.findById(decoded.id)
        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }
        user.lastLoginDate = new Date()
        req.user = { id: decoded.id }
        next()
    } catch (error) {
        console.log("auth", error)

        if (error instanceof jwt.TokenExpiredError) {
            res.status(401).json({
                error: "Token expired",
                expiredAt: error.expiredAt
            })
        } else if (error instanceof jwt.JsonWebTokenError) {
            res.status(401).json({ error: "Invalid token" })
        } else {
            res.status(500).json({ error: "Server error" })
        }
    }
}

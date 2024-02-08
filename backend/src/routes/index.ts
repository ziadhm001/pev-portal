import express from "express"
import { IRoute } from "../types/IRoute"
import { authRoutes } from "./auth"
const apiRoutes = express.Router()

const defaultRoutes : IRoute[] = [
    {
        path: "/auth",
        handler: authRoutes
    }
]

defaultRoutes.forEach((route) => {
    apiRoutes.use(route.path, route.handler)
})

export default apiRoutes

import express from "express"
import { IRoute } from "../types/IRoute"

const apiRoutes = express.Router()

const defaultRoutes : IRoute[] = [

]

defaultRoutes.forEach((route) => {
    apiRoutes.use(route.path, route.handler)
})

export default apiRoutes

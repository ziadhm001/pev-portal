import { Application } from "express"

export interface IRoute {
    path: string
    handler: Application
}
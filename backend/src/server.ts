import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import compression from "compression"
import requestIp from "request-ip"
import { connectDB } from "./config/db"
import { configEnv } from "./config/env"
import { errorHandler, notFound } from "./middlewares/errorHandler"

import apiRoutes from "./routes"


configEnv()

const app = express()

// Connect to MongoDB
connectDB()

// Middlewares
app.use(bodyParser.json({ limit: "5mb" }))
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }))
app.use(cors())
app.use(morgan("combined"))
app.use(express.static("public"))
app.use(helmet())
app.use(compression())
app.use(requestIp.mw())

// API routes
app.use("/api", apiRoutes)

// Invalid API endpoint middleware
app.use(notFound)

// Error handling middleware
app.use(errorHandler)

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})


process.on("unhandledRejection", (err: Error, promise: Promise<any>) => {
    console.log("[UNHANDLED_REJECTION] Message", err.message)
    console.log("[UNHANDLED_REJECTION] Stack", err.stack)
})

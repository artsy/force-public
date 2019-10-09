import * as routes from "./routes"
import express from "express"

export const app = express()

app.set("view engine", "pug")
app.set("views", `${__dirname}/components/layout`)

app.get("/sale/:id", routes.index)
app.get("/sale/:id/confirm-registration", routes.index)
app.get("/sale/:id/registration-flow", routes.index)

app.get("/auction/:id", routes.index)
app.get("/auction/:id/confirm-registration", routes.redirectLive, routes.index)
app.get("/auction/:id/registration-flow", routes.redirectLive, routes.index)

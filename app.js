import dotenv from "dotenv"
import Servidor from "./src/server/server.js"

dotenv.config()

const server = new Servidor()

server.listen()
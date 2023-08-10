import { login } from "../controllers/auth.js";
import express from "express";


const authRouter = express.Router()


authRouter.post("/auth",login)

export default authRouter
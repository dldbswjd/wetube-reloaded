import express from "express";
import { edit, remove, logout, see } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/:id/edit", edit);
userRouter.get("/:id/remove", remove);
userRouter.get("/:id", see);

export default userRouter;

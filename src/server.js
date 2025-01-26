import express from "express";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

// console.log(process.cwd());
const app = express();
const logger = morgan("dev");

app.set("view engine", "Pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
// req.body 없음
app.use(express.urlencoded({ extend: true }));
// req.body 있음
app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;

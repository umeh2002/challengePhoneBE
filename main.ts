import cors from "cors";
import express, { Application, Request, Response } from "express";
import helmet from "helmet";
import router from "./router/contactRouter";

const main = (app: Application) => {
  app.use(express.json());
  app.use(cors());
  app.use(helmet());

  app.get("/", (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "welcome to my phone application 👌✌",
      });
    } catch (error:any) {
      return res.status(404).json({
        message: error.message,
      });
    }
  });
  app.use("/api", router)
};

export default main;

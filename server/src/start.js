import express from "express";
// Import this module to handle errors when using async functions for our route handlers
import "express-async-errors";
import path from "path";
import cors from "cors";
import logger from "loglevel";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { getRoutes } from "./routes";
import { errorMiddleware, setupCloseOnExit } from "./middleware/error";

dotenv.config();

function startServer({ port = process.env.PORT } = {}) {
  const app = express();
  app.use(morgan("dev"));
  app.use(cors());
  app.use(cookieParser());
  app.use(express.json());
  // all API routes are prefixed with /api/v1
  app.use("/api/v1", getRoutes());

  // Generic error handler if errors are missed by 'express-async-errors' middleware
  app.use(errorMiddleware);

  // When our project is pushed to production, we will serve // the react app using express.static() middleware
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.resolve(__dirname, "../client/build")));

    // Any request not caught by our API will be routed
    // to our built react app
    app.get("*", function (req, res) {
      res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
    });
  }

  // This block of code is made to reliably start and close our express app
  // It is written as a promise, which can be more easily tested
  return new Promise((resolve) => {
    const server = app.listen(port, () => {
      logger.info(`Listening on port ${server.address().port}`);

      const originalClose = server.close.bind(server);
      server.close = () => {
        return new Promise((resolveClose) => {
          originalClose(resolveClose);
        });
      };
      // This function properly closes the server when the program exits
      setupCloseOnExit(server);
      resolve(server);
    });
  });
}

export { startServer };

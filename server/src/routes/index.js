import express from "express";

import { getAuthRoutes } from "./auth";
import { getUserRoutes } from "./user";
import { getVideoRoutes } from "./video";

function getRoutes() {
  // All routes in our Node API are placed on this router
  const router = express.Router();

  // router.use() prefixes our route (i.e. /api/v1/auth)
  router.use("/auth", getAuthRoutes());
  router.use("/users", getUserRoutes());
  router.use("/videos", getVideoRoutes());

  return router;
}

export { getRoutes };

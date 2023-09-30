import { Elysia } from "elysia";
import { userRoutes } from "./auth";

export const masterRoutes = new Elysia().group("/api/v1", (app) =>
  app.use(userRoutes)
);

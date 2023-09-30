import {Elysia,t} from "elysia";
import { createUser } from "../controllers/user";
import { userRegisterType } from "../contracts/user";

export const userRoutes = new Elysia({ prefix: "/auth" })
  .post("/register", ({body,set}) => createUser(body,set),{body:userRegisterType}
  )
  .post("/login", () => "User Login");

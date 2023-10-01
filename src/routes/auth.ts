import { Elysia, t } from "elysia";
import { createUser, loginUser } from "../controllers/user";
import { userLoginType, userRegisterType } from "../contracts/user";
import {jwt} from '@elysiajs/jwt'
export const userRoutes = new Elysia({ prefix: "/auth" })
.use(jwt({
  name:'jwt',
  secret:Bun.env.JWT_SECRET
}))
  .post("/register", ({ body, set }) => createUser(body, set), {
    body: userRegisterType,
  })
  .post("/login", ({ body, set,jwt }) => loginUser(body, set,jwt), {
    body: userLoginType,
  });

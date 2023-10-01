import { JWTPayloadSpec } from "@elysiajs/jwt";
import { JWTType, SetType } from "../contracts/master";
import {
  UserLoginType,
  UserModelType,
  userRegisterType,
} from "../contracts/user";
import { User } from "../models/userModel";
export const createUser = async (data: UserModelType, set: SetType) => {
  try {
    const encryptedPassword = await Bun.password.hash(data.password, {
      algorithm: "bcrypt",
    });
    const user = await User.create({ ...data, password: encryptedPassword });
    return { _id: user._id };
  } catch (error: any) {
    set.status = 403;
    if (error.code == 11000) {
      return Object.keys(error.keyValue)[0] + " already exists.";
    } else {
      return error.message;
    }
  }
};

export const loginUser = async (data: UserLoginType, set: SetType,jwt: JWTType) => {
  try {
    const user = await User.findOne({ email: data.email });
    if (user) {
      if (await Bun.password.verify(data.password, user.password)) {
        set.status = 200;
        return {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
          token:await generateJWTToken(user._id,jwt)
        };
      } else {
        set.status = 400;
        return { message: "Invalid Password" };
      }
    } else {
      set.status = 400;
      return { message: "Email is not registred with us" };
    }
  } catch (error) {}
};

const generateJWTToken =async (id:string,jwt:JWTType) => {
  return await jwt.sign({id})
}
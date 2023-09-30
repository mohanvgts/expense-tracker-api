import { SetType } from "../contracts/master";
import { UserModelType, userRegisterType } from "../contracts/user";
import { User } from "../models/userModel";
export const createUser = async (data: UserModelType, set: SetType) => {
  try {
    const encryptedPassword = await Bun.password.hash(data.password,{
      algorithm:'bcrypt'
    });
    const user = await User.create({ ...data, password: encryptedPassword });
    return user;
  } catch (error: any) {
    set.status = 403;
    if (error.code == 11000) {
      return Object.keys(error.keyValue)[0] + " already exists.";
    } else {
      return error.message;
    }
  }
};

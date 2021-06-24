import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    let secretToken = "c125408f3f592505ff2c14fdf65db5c5";

    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne({
      email
    });

    if (!user) {
      throw new Error("Email/Password incorrect");
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect");
    }

    const token = sign({
      email: user.email
    },
      secretToken,
      {
        subject: user.id,
        expiresIn: "1d"
      });

    return token;
  }
}

export { AuthenticateUserService }
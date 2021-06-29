import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { hash } from "bcryptjs";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

class CreateUserService {
  async execute({ name, email, admin, password }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);

    if (!email || !password) {
      throw new Error("Email ou Senha com formato(s) incorreto(s)");
    }

    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

    const passwordHash = await hash(password, 8);

    if (userAlreadyExists) {
      throw new Error("Usuário já esta cadastrado");
    }

    const user = usersRepository.create({
      name,
      email,
      admin,
      password: passwordHash,
    });

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };

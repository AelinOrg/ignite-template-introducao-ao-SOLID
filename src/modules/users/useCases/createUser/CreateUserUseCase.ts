import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    // Complete aqui
    const emailAlreadyTaken = this.usersRepository.findByEmail(email);

    if (emailAlreadyTaken) throw new Error(`Email "${email}" already taken`);

    return this.usersRepository.create({ email, name });
  }
}

export { CreateUserUseCase };

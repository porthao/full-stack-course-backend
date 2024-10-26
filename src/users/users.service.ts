import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  

  getExample(): boolean {
    return false;
  }

  async create(user: User): Promise<User> {
    if (!user.firstname || !user.email || !user.password)
      throw new BadRequestException('Parameter is empty!.');

    const emailExist = await this.userRepository.findOneBy({
      email: user.email,
    });

    console.log({ emailExist });

    if (emailExist) throw new BadRequestException('Email already exist!.');

    const createUserData = await this.userRepository.save(user);

    return createUserData;
  }
}

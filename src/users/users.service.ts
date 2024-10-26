import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HelpersService } from 'src/helpers/helpers.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HelpersModule } from 'src/helpers/helpers.module';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly helpersService: HelpersService,
  ) {}

  getExample(): boolean {
    return false;
  }

  async create(user: User): Promise<User> {
    const hashPassword = await this.helpersService.hashPasswordFunction(
      user.password,
    );
    console.log({ hashPassword });

    return user;
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

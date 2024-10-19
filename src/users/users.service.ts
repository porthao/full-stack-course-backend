import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getExample(): boolean {
    return false;
  }

  create({ name, lastname }: { name: string; lastname: string }): {
    name: string;
    lastname: string;
  } {
    console.log({ name, lastname });
    return { name: name, lastname };
  }
}

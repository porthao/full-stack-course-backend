import { Injectable } from '@nestjs/common';
const bcrypt = require('bcrypt');

@Injectable()
export class HelpersService {
  async hashPasswordFunction(passord: string): Promise<string> {
    const saltRounds = 10;

    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(passord, salt);

    return hash;
  }
}

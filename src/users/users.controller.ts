import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  example(): boolean {
    return this.userService.getExample();
  }

  @Post('create')
  create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @Put('update/:id/:fullname')
  update(@Param() Param): { id: string } {
    console.log({ Param });
    return { id: '234' };
  }

  @Get('user')
  findOne(@Query() { id }: { id: string }): string {
    return id;
  }
}

// http://localhost:4000/api/v1/users/example

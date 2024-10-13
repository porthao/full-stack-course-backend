import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  example(): boolean {
    return false;
  }

  @Post('create')
  create(@Body() { name, lastname }: { name: string, lastname: string }): {
    name: string;
    lastname: string;
  } {
    console.log({ name, lastname });
    return { name: name, lastname };
  }

  @Put('update/:id/:fullname')
  update(
    @Param() Param, 
  ): { id: string} {
    console.log({Param})
    return { id: '234' };
  }

  @Get('user')
  findOne(@Query() { id }: { id: string }): string {
    return id;
  }
}

// http://localhost:4000/api/v1/users/example

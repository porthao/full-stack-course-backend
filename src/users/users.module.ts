import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HelpersModule } from 'src/helpers/helpers.module';
import { HelpersService } from 'src/helpers/helpers.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), HelpersModule],
  controllers: [UsersController],
  providers: [UsersService, HelpersService],
})
export class UsersModule {}

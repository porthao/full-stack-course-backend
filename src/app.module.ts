import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { User } from './users/users.entity';
import { HelpersModule } from './helpers/helpers.module';

@Module({
  imports: [
    // User,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    DatabaseModule,
    UsersModule,
    HelpersModule
  ],
  // controllers: [AppController, UsersController],
  // providers: [AppService, UsersService],
})
export class AppModule {}

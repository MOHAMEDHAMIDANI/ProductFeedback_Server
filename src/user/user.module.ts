import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './User.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // Register User entity here
    forwardRef(() => AuthModule), // Use forwardRef to handle circular dependency
  ],
  providers: [UserService],
  exports: [UserService, TypeOrmModule], // Export TypeOrmModule to make UserRepository available in AuthModule
  controllers: [UserController],
})
export class UserModule {}

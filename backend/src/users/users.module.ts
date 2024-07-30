import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabseModule } from 'src/databse/databse.module';

@Module({
  imports: [DatabseModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}

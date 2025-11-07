import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { EquimentModule } from './equiment/equiment.module';
import { BorrowRequestModule } from './borrow_request/borrow_request.module';
import { BorrowItemModule } from './borrow_item/borrow_item.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port:5432,
      username:'postgres',
      password:'123',
      database:'inventory',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize:true,
    }),
    UsersModule,
    EquimentModule,
    BorrowRequestModule,
    BorrowItemModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

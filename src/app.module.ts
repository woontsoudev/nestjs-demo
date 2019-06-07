import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesModule } from './heroes/heroes.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    HeroesModule,
    MongooseModule.forRoot(
      'mongodb+srv://woontsou:BO0iaZjfMPFXgJ2N@cluster0-qozva.mongodb.net/test?retryWrites=true&w=majority',
      { useNewUrlParser: true },
    ),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// BO0iaZjfMPFXgJ2N
// woontsou

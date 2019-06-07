import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroesService } from './heroes.service';
import { HeroesController } from './heroes.controller';
import { HeroeSchema } from '../schemas/heroe.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Heroe', schema: HeroeSchema }])],
  providers: [HeroesService],
  controllers: [HeroesController],
})
export class HeroesModule {}

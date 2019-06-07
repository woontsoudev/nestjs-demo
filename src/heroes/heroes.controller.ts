import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Query,
  Delete,
} from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { CreateHeroeDTO } from './dto/createHeroe.dto';
import { Heroe } from '../interfaces/heroe';

@Controller('heroes')
export class HeroesController {
  constructor(private heroesService: HeroesService) {}

  @Get()
  public async getHeroes(): Promise<Heroe[]> {
    const heroes = this.heroesService.getHeroes();
    return heroes;
  }

  @Get(':heroeId')
  async getHeroe(@Param('heroeId') heroeId): Promise<Heroe> {
    const heroe = this.heroesService.getHeroe(heroeId);
    return heroe;
  }

  @Post()
  async addHeroe(@Body() createHeroeDTO: CreateHeroeDTO): Promise<Heroe> {
    const heroe = this.heroesService.addHeroe(createHeroeDTO);
    return heroe;
  }

  @Delete()
  async deleteHeroe(@Query() query): Promise<Heroe> {
    const heroe = this.heroesService.deleteHeroe(query.heroeId);
    return heroe;
  }
}

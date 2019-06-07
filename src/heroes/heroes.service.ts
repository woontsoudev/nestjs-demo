import { Model } from 'mongoose';
import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HEROES } from '../mocks/heroes.mock';
import { Heroe } from '../interfaces/heroe';
import { CreateHeroeDTO } from './dto/createHeroe.dto';

@Injectable()
export class HeroesService {
  constructor(
    @InjectModel('Heroe') private readonly heroeModel: Model<Heroe>,
  ) {}

  public async getHeroes(): Promise<Heroe[]> {
    return await this.heroeModel
      .find()
      .exec()
      .then((heroes: Heroe[]) => {
        return heroes;
      })
      .catch(error => {
        throw new HttpException(error, 404);
      });
  }

  public async addHeroe(createHeroeDTO: CreateHeroeDTO): Promise<Heroe> {
    const createdHeroe = new this.heroeModel(createHeroeDTO);
    return await createdHeroe
      .save()
      .then((heroe: Heroe) => {
        return heroe;
      })
      .catch(error => {
        throw new HttpException(error, 404);
      });
  }

  public async getHeroe(heroeId: string): Promise<Heroe> {
    const heroe = await this.heroeModel
      .findById(heroeId)
      .then((heroe: Heroe) => {
        return heroe;
      })
      .catch(error => {
        throw new HttpException(error, 404);
      });

    return heroe;
  }

  public async deleteHeroe(heroeId: number): Promise<Heroe> {
    const heroe = await this.heroeModel
      .findByIdAndDelete(heroeId)
      .then((heroe: Heroe) => {
        return heroe;
      })
      .catch(error => {
        throw new HttpException(error, 404);
      });

    return heroe;
  }
}

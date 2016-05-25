import { Injectable } from '@angular/core';
import { HEROES } from './../../data/mock-heroes';

@Injectable()
export class HeroService {
  getHeroes() {
    return Promise.resolve(HEROES);
  }
}

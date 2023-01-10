import { Injectable } from '@angular/core';
import { Hero } from './src/app/hero';
import { HEROES } from './src/app/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
// TODO: send the message _after_ fetching the heroes
this.messageService.add('HeroService: fetched heroes');

    return of(HEROES); }


getHero(id: number): Observable<Hero> {
  const hero = HEROES.find(h => h.id === id)!
      // TODO: send the message _after_ fetching the hero
      this.messageService.add(`HeroService: fetched hero id=${id}`);
      return of(hero);
   
      }

  constructor(private messageService: MessageService) { }
}

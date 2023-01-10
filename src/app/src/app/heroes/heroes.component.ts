import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import { HeroService } from 'src/app/hero.service';
import { MessageService } from 'src/app/message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{

heroes: Hero[] | undefined;


constructor(private heroService: HeroService,private messageService: MessageService){}

getHeroes(): void { this.heroService.getHeroes()
  .subscribe(heroes => this.heroes = heroes); }


// selectedHero: Hero = {id:1, name:"Windstorm"};
// onSelect(hero: Hero): void {
// this.selectedHero = hero; 
// this.messageService.add(`HeroesComponent:
// Selected hero id=${hero.id}`);
// }

ngOnInit(): void {
    this.getHeroes();
}

}

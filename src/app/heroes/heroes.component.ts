import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../service/hero.service';
import {ActivatedRoute} from '@angular/router';
import {st} from '@angular/core/src/render3';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers:[{
    provide:HeroService, useClass:HeroService
  }]
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];
  public id:number;

  constructor(private heroService: HeroService, private routeInfo:ActivatedRoute) {

  }

  ngOnInit() {
    this.id = this.routeInfo.snapshot.queryParams['id'];
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);

    // this.heroService.getHero(1)
    //   .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}

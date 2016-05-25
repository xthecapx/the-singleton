import { RouteParams } from '@angular/router-deprecated';
import { Component, OnInit } from '@angular/core';
import { Hero } from './../../classes/hero/hero';
import { HeroService } from './../../services/hero.service';

@Component({
  selector: 'my-hero-detail',
  moduleId: module.id,
  templateUrl: 'hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {
  //@Input()
  hero: Hero;
  constructor(
    private heroService: HeroService,
    private routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.heroService.getHero(id)
      .then(hero => this.hero = hero);
  }

  goBack() {
    window.history.back();
  }
}

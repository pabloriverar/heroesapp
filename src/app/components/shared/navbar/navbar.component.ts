import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  heroes:any []=[]

  constructor(private router:Router,
              private _heroesService:HeroesService) { }

  ngOnInit(): void {
  }

  buscarHeroe(termino:string){
    // console.log(termino);
    this.router.navigate(['/buscar',termino]);
  }

}

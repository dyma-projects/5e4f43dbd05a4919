import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exerice1',
  templateUrl: './exerice1.component.html',
  styleUrls: ['./exerice1.component.css']
})
export class Exerice1Component implements OnInit {

  public tables: string[] = [];
  public element: string = 'zinc';
  public couleur: string = 'red';
  public valeur: number = 0;
  constructor() { }

  ngOnInit() {
  }

  upValeur(){
    this.valeur++;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carre',
  templateUrl: './carre.component.html',
  styleUrls: ['./carre.component.scss']
})
export class CarreComponent implements OnInit {

  constructor() { }

  public color: string ='';
  public carre: string = 'carre';
  ngOnInit(): void {
  }

  public changeColor(color: string) {
    this.color=color;
  }
}

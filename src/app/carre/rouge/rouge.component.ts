import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-rouge',
  templateUrl: './rouge.component.html',
  styleUrls: ['./rouge.component.scss']
})
export class RougeComponent implements OnInit {

  constructor() { }

  public carreRouge: string = 'carreRouge';
  public color: string = 'red';
  @Output() changeBgColorEvent: EventEmitter<string> = new EventEmitter<string>();


  ngOnInit(): void {
  }

  public getColor() {
    this.changeBgColorEvent.emit(this.color);
  }
}

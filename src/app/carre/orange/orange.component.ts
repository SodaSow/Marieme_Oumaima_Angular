import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-orange',
  templateUrl: './orange.component.html',
  styleUrls: ['./orange.component.scss']
})
export class OrangeComponent implements OnInit {

  constructor() { }
  public carreOrange: string = 'carreOrange';
  public color: string = 'orange';
  @Output() changeBgColorEvent: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  public getColor() {
    this.changeBgColorEvent.emit(this.color);
  }
}

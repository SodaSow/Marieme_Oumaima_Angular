import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-vert',
  templateUrl: './vert.component.html',
  styleUrls: ['./vert.component.scss']
})
export class VertComponent implements OnInit {

  constructor() { }

  public carreVert: string = 'carreVert';
  public color: string = 'green';
  @Output() changeBgColorEvent: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  public getColor() {
    this.changeBgColorEvent.emit(this.color);
  }
}

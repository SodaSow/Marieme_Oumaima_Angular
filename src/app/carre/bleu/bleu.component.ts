import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-bleu',
  templateUrl: './bleu.component.html',
  styleUrls: ['./bleu.component.scss']
})
export class BleuComponent implements OnInit {

  constructor() { }
  public carreBleu: string = 'carreBleu';
  public color: string = 'blue';
  @Output() changeBgColorEvent: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  public getColor() {
    this.changeBgColorEvent.emit(this.color);
  }

}

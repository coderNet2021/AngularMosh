import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  styles :[
    `
    .bi {
  color: red
}
    `
  ]
})
export class FavoriteComponent {
  @Input("is-favorite") isFavorite:boolean;
  @Output("change") clickcustom = new EventEmitter();
  constructor(){
    this.isFavorite=true;
  }
  onClick(){
    this.isFavorite =!this.isFavorite;
    this.clickcustom.emit({NewValue: this.isFavorite});
  }

}
export interface FavoriteChangedEventArguments{

  newValue : Boolean;
}

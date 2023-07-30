import { Component } from '@angular/core';
import { FavoriteChangedEventArguments } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   //title = 'AllExercices';
//   post = {
//     title : "Title",
//     isFavorite :true
//   }

//   //on defini un interface ou on peut le faire inline definition eventArgs: {newValue : boolean}
//   onFavoriteChanged(eventArgs:FavoriteChangedEventArguments){
//     console.log("test here", eventArgs);
//   }
// }

// likecomponent
// export class AppComponent{
//   tweet ={
//     body: '....',
//     likesCount:10,
//     isLiked :true
//   }
// }

export class AppComponent{
  tweet ={
    body: '....',
    likesCount:10,
    isLiked :true
  }
}

import { Component } from '@angular/core';
import { creatorCards } from './model/creator-cards';

@Component({
  selector: 'luna-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  creatorCards = creatorCards;

}

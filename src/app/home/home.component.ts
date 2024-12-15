import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [ CardComponent,
             CommonModule,
   ]
})
export class HomeComponent {
  candidates = [
    { id: 1, name: 'Olaf Scholz', votes: 0, img: '/assets/img/Scholz.jpg' },
    { id: 2, name: 'Robert Habeck', votes: 0, img: '/assets/img/Habeck.jpg' },
    { id: 3, name: 'Friedrich Merz', votes: 0, img: '/assets/img/Merz.jpg' },
    { id: 4, name: 'Alice Weidel', votes: 0, img: '/assets/img/Weidel.jpg' }
  ];
  
  incrementCount(event: any) {
    const candidate = this.candidates.find(c => c.id === event.id);
    if (candidate) {
      candidate.votes = event.newVotes;
    }
  }
}

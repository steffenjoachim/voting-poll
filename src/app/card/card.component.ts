import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() img: string = '';
  votes: number = 0;

  @Output() vote: EventEmitter<any> = new EventEmitter();

  incrementVotes() {
    this.votes++;
    // Das Event auslösen, wenn die Stimme erhöht wird
    this.vote.emit({ id: this.id, newVotes: this.votes });
  }
}
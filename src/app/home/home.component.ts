import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  incrementCount(event: any): void {
    // Prüfen, ob das Ziel ein Button ist
    if (event.target.classList.contains('vote-btn')) {
      // Das übergeordnete Section-Element finden
      const section = event.target.closest('.card');
      if (section) {
        // Aktuelle ID und Vote-Count herausfinden
        const id = section.id;
        const voteCountElement = section.querySelector('.vote-count');
        
        if (voteCountElement) {
          // Vote-Count inkrementieren
          let currentVotes = parseInt(voteCountElement.textContent || '0', 10);
          currentVotes++;
          voteCountElement.textContent = currentVotes.toString();

          console.log(`ID ${id}: Neuer Stand ${currentVotes}`);
        }
      }
    }
  }
}


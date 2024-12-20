import { Component, OnInit } from '@angular/core';
import { Firestore, query, collectionData, doc, updateDoc } from '@angular/fire/firestore';
import { collection, CollectionReference, DocumentData } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { CardComponent } from '../card/card.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CardComponent, HeaderComponent, FooterComponent, CommonModule],
})
export class HomeComponent implements OnInit {
  candidates$: Observable<any[]> = new Observable();

  constructor(private firestore: Firestore) {}

  ngOnInit(): void {
    const candidatesCollection: CollectionReference<DocumentData> = collection(this.firestore, 'candidates');
    this.candidates$ = collectionData(candidatesCollection, { idField: 'id' });
    this.candidates$.subscribe(data => {
      console.log('Candidates:', data);
    });
  }

  incrementCount(candidateId: string, currentVotes: number): void {
    const candidateDoc = doc(this.firestore, `candidates/${candidateId}`);
    updateDoc(candidateDoc, { votes: currentVotes + 1 })
      .then(() => console.log('Vote updated successfully'))
      .catch((err: unknown) => console.error('Error updating vote:', err));
  }
}

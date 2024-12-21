import { Injectable } from '@angular/core';
import { Firestore, collectionData, doc, updateDoc } from '@angular/fire/firestore';
import { collection, CollectionReference, DocumentData } from '@firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', 
})
export class CandidateService {
  private candidatesCollection: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.candidatesCollection = collection(this.firestore, 'candidates');
  }

  getCandidates(): Observable<any[]> {
    return collectionData(this.candidatesCollection, { idField: 'id' });
  }

  incrementVote(candidateId: string, currentVotes: number): Promise<void> {
    const candidateDoc = doc(this.firestore, `candidates/${candidateId}`);
    return updateDoc(candidateDoc, { votes: currentVotes + 1 });
  }
}


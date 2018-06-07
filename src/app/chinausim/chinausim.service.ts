import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ChinausimService {

  usimsCollection: AngularFirestoreCollection<any>;
  usimDocument:   AngularFirestoreDocument<any>;

  constructor(private afs: AngularFirestore) {
    this.usimsCollection = this.afs.collection('usims', (ref) => ref.orderBy('time', 'desc'));
  }

  getData(): Observable<any[]> {
    // ['added', 'modified', 'removed']
    return this.usimsCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          return { id: a.payload.doc.id, ...data };
        });
      })
    );
  }

  getUsim(id: string) {
    return this.afs.doc<any>(`usims/${id}`);
  }

  createUsim(content: string, name:string) {
    const usim = {
      content,
      hearts: 0,
      name,
      time: new Date().getTime(),
    };
    return this.usimsCollection.add(usim);
  }

  updateUsim(id: string, data: any) {
    return this.getUsim(id).update(data);
  }

  deleteUsim(id: string) {
    return this.getUsim(id).delete();
  }
}

import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
//import { Observable } from 'rxjs/Observable';

interface item {
  name: string;
}

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
  herolistsCollection: AngularFirestoreCollection<item>;
  constructor(private db: AngularFirestore) { }

  ngOnInit() {
  }

}

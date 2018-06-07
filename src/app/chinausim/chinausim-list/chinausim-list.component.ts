import { Component, OnInit } from '@angular/core';
import { ChinausimService } from '../chinausim.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'chinausim-list',
  templateUrl: './chinausim-list.component.html',
  styleUrls: ['./chinausim-list.component.scss']
})
export class ChinausimListComponent implements OnInit {

  usims: Observable<any[]>;
  content: string;
  name : string;

  constructor(private chinausimService: ChinausimService) { }

  ngOnInit() {
    this.usims = this.chinausimService.getData();
  }

  clickHandler() {
    this.chinausimService.createUsim(this.content, this.name);
    //console.log(this.name);
    this.content = '';
    this.name = '';
  }

}

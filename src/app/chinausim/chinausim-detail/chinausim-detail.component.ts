import { Component, Input } from '@angular/core';
import { ChinausimService } from '../chinausim.service';

@Component({
  selector: 'chinausim-detail',
  templateUrl: './chinausim-detail.component.html',
  styleUrls: ['./chinausim-detail.component.scss'],
})
export class ChinausimDetailComponent {

  @Input() usim: any;

  constructor(private chinausimService: ChinausimService) { }
  

  addHeartToUsim(val: number) {
    if (this.usim.id) {
      this.chinausimService.updateUsim(this.usim.id, { hearts: val + 1 });
    } else {
      console.error('Usim missing ID!');
    }
  }

  deleteUsim(id: string) {
    this.chinausimService.deleteUsim(id);
  }

}

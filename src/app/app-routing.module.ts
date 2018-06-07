import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import {    hGuard } from '@angular/core';

import { NoticeComponent } from './notice/notice.component';
import { AsiaComponent } from './asia/asia.component';
import { UsaComponent } from './usa/usa.component';
import { EuropeComponent } from './europe/europe.component';
import { EtcComponent } from './etc/etc.component';
import { CommunityComponent } from './community/community.component';

import { AsiaDetailComponent } from './asia-detail/asia-detail.component';
import { UsaDetailComponent } from './usa-detail/usa-detail.component';
import { EuropeDetailComponent } from './europe-detail/europe-detail.component';
import { EtcDetailComponent } from './etc-detail/etc-detail.component';
import { LondonVisaComponent } from './london-visa/london-visa.component';
import { LondonUsimComponent } from './london-usim/london-usim.component';
import { LondonTransComponent } from './london-trans/london-trans.component';
import { OhioTransComponent } from './ohio-trans/ohio-trans.component';
import { OhioVisaComponent } from './ohio-visa/ohio-visa.component';
import { OhioUsimComponent } from './ohio-usim/ohio-usim.component';
import { WritepageComponent } from './writepage/writepage.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { ChinausimListComponent } from './chinausim/chinausim-list/chinausim-list.component';

const routes: Routes = [
  { path: 'notice', component: NoticeComponent },
  { path: 'asia', component: AsiaComponent },
  { path: 'usa', component: UsaComponent },
  { path: 'europe', component: EuropeComponent },
  { path: 'etc', component: EtcComponent },
  { path: 'community', component: CommunityComponent },
  { path: '', redirectTo: '/notice', pathMatch: 'full' },
  { path: 'europe/london/visa', component: LondonVisaComponent},
  { path: 'europe/london/usim', component: LondonUsimComponent},
  { path: 'europe/london/trans', component: LondonTransComponent},
  { path: 'usa/ohio/visa', component: OhioVisaComponent},
  { path: 'usa/ohio/usim', component: OhioUsimComponent},
  { path: 'usa/ohio/trans', component: OhioTransComponent},
  { path: 'writepage', component: WritepageComponent},
  { path: 'notelist', component: NotesListComponent},
  { path: 'visalist', component: ChinausimListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { AsiaComponent } from './asia/asia.component';
import { NoticeComponent } from './notice/notice.component';
import { EuropeComponent } from './europe/europe.component';
import { EtcComponent } from './etc/etc.component';
import { CommunityComponent } from './community/community.component';
import { UsaComponent } from './usa/usa.component';
import { UsaDetailComponent } from './usa-detail/usa-detail.component';
import { EuropeDetailComponent } from './europe-detail/europe-detail.component';
import { EtcDetailComponent } from './etc-detail/etc-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { NotesModule } from './notes/notes.module';
import { ChinausimModule } from './chinausim/chinausim.module';
import { ServiceWorkerModule } from '@angular/service-worker';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LondonVisaComponent } from './london-visa/london-visa.component';
import { LondonUsimComponent } from './london-usim/london-usim.component';
import { LondonTransComponent } from './london-trans/london-trans.component';
import { OhioTransComponent } from './ohio-trans/ohio-trans.component';
import { OhioVisaComponent } from './ohio-visa/ohio-visa.component';
import { OhioUsimComponent } from './ohio-usim/ohio-usim.component';
import { TutorialComponent } from './tutorial/tutorial.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireFunctionsModule } from 'angularfire2/functions';
import { environment } from '../environments/environment';
import { WritepageComponent } from './writepage/writepage.component';


@NgModule({
  declarations: [
    AppComponent,
    AsiaComponent,
    NoticeComponent,
    EuropeComponent,
    EtcComponent,
    CommunityComponent,
    UsaComponent,
    UsaDetailComponent,
    EuropeDetailComponent,
    EtcDetailComponent,
    LondonVisaComponent,
    LondonUsimComponent,
    LondonTransComponent,
    OhioTransComponent,
    OhioVisaComponent,
    OhioUsimComponent,
    WritepageComponent,
    TutorialComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    FormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    NotesModule,
    ChinausimModule,
    YoutubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  title = 'Final Project';
}

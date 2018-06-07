import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenav} from '@angular/material/sidenav';
import {VERSION} from '@angular/material';
import {ElementRef, ViewEncapsulation, AfterViewInit} from '@angular/core';
import { NavItem } from '../nav-item';

@Component({
  selector: 'app-asia-detail',
  templateUrl: './asia-detail.component.html',
  styleUrls: ['./asia-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AsiaDetailComponent implements AfterViewInit{
  @ViewChild('sidenav') sidenav: MatSidenav;

  version = VERSION;
  navItems: NavItem[] = [
    {
      displayName: 'VISA',
      iconName: 'flight',
      route: '/asia/china/visa'
    },
    {
      displayName: 'USIM',
      iconName: 'sd_storage',
      route: '/asia/china/usim'
    },
    {
      displayName: 'TRANSPORTATION',
      iconName: 'commute',
      route: '/asia/china/trans'
    }
  ];

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  constructor(
    private route: ActivatedRoute,
    private location: Location ) {   
  }
  

  /*getAsia(): void {
    const id = +this.route.snapshot.paramMap.get('id);

  } */

  goBack(): void {
    this.location.back();
  }

  ngAfterViewInit() {
    this.sidenav = this.sidenav;
  }

}

import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material.module';


@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {
  player:YT.Player;
  private id: string = 'QwCPh4HDDsc';
  
  savePlayer(player){
    this.player = player;
    console.log('player instance',player);
  }
  onStateChange(event){
    console.log('player state',event.data);
  }
  constructor() { }

  ngOnInit() {
  }

}

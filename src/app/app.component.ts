import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'connectFour';
  choise=true;
  Players={
    player1: "player1",
    player2:"player2"
  };
  name;
  column=[0,1,2,3,4,5,6];
  temp=[35,36,37,38,39,40,41];
  element = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]
  SetPlayer(item){
    if(this.choise){
      let t = this.temp[item];
    while(this.element[t]!=""){
        t=t-7;
    }
    this.element[t]="set1";
    this.choise=!(this.choise);
    //console.log(t);
    this.name=this.Players.player2;
    }else{
      let t = this.temp[item];
    while(this.element[t]!=""){
        t=t-7;
    }
    this.element[t]="set";
    //console.log(t);
    this.name=this.Players.player1;
    this.choise=!(this.choise);
    }
  }
}


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
  win=false;
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
    this.winner(t,"set1");
    //console.log(t);
    this.name=this.Players.player1;
    }else{
      let t = this.temp[item];
    while(this.element[t]!=""){
        t=t-7;
    }
    this.element[t]="set";
    //console.log(t);
    this.winner(t,"set");
    this.name=this.Players.player2;
    this.choise=!(this.choise);
    }
  }
  winner(position,value){
    //console.log("hello");
    if(position%7<=3){
      let count=0;
      for(let i=0;i<4;i++){
        if(this.element[position+i]==value){
          count++;
          console.log("hello");
        }
      }
      if(count==4){
        this.win=true;
      }else{
        this.win=false;
      }
      //console.log(this.win);
    }

    if((position-3)%7<=3){
      let count=0;
      for(let i=0;i<4;i++){
        if(this.element[(position-3)+i]==value){
          count++;
        }
      }
      if(count==4){
        this.win=true;
      }else{
        this.win=false;
      }
      console.log(this.win);
    }


  }
}
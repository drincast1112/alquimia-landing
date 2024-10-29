import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  claseTotal: string = "bee-col bee-col-2 bee-col-w6";
  claseContenedor: string ="bee-row-content";
  claseBoton: string = "text-align: end";
  constructor(){

  }
  ngOnInit(){
    if(navigator.userAgent.match(/iPhone|iPod/i)){
      this.claseTotal = "bee-col bee-col-2 bee-col-w12";
      this.claseContenedor = "";
      this.claseBoton= "text-align: center";
    }

  }
}

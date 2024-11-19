import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  claseTotal: string = "bee-col bee-col-2 bee-col-w6";
  claseTotal2: string = "bee-col bee-col-1 bee-col-w7";
  claseTotal3: string = "bee-col bee-col-2 bee-col-w5";
  claseContenedor: string ="bee-row-content";
  claseBoton: string = "text-align: end";
  celular: boolean = false;


  constructor(){

  }
  ngOnInit(){
    if(navigator.userAgent.match(/iPhone|iPod/i)){
      this.celular = true;
      this.claseTotal = "bee-col bee-col-2 bee-col-w12";
      this.claseContenedor = "";
      this.claseTotal2 = "bee-col bee-col-1 bee-col-w12";
      this.claseTotal3 = "bee-col bee-col-2 bee-col-w12";
      this.claseBoton= "text-align: center";
    }

  }
}

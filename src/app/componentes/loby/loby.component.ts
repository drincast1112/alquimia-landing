import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../../servicios/fotos.service';

@Component({
  selector: 'app-loby',
  templateUrl: './loby.component.html',
  styleUrls: ['./loby.component.scss']
})
export class LobyComponent implements OnInit{
  images: any[] | undefined;
  position:any = "left";
  responsiveOptions: any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];
constructor(private photoService: PhotoService) {}

ngOnInit() {
  this.photoService.getImages().then((images) => (this.images = images));
}

  abrirWhatSapp(){
    window.open('https://w.app/X6kP7h', '_blank');
  }
}

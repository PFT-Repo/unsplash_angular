import { Component, OnInit } from '@angular/core';
import { UnsplashService } from './services/unsplash.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'unsplash_angular';
  images:any[] = [];
  constructor(private service : UnsplashService ){}
  ngOnInit(): void {
this.getPhotos();
  }
  getPhotos():void{
    this.service.photoQuery();
    setTimeout(() => {
      this.images = this.service.images;
    }, 1000); 
    console.log(this.images);
    
  }
}

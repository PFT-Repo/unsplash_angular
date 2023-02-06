import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  apiKey = process.env['UNSPLASH_API_KEY']? process.env['UNSPLASH_API_KEY'] : environment.unsplash.UNSPLASH_API_KEY;
  baseUrl = 'https://api.unsplash.com';
  images!: any[];

  constructor(private http: HttpClient) { }
  photoQuery() {
    const url = new URL(`${this.baseUrl}/photos/random/?count=12&&client_id=${this.apiKey}`);
    fetch(url).then(response => response.json()).then(data => this.getList(data)
    );
  }
  private getList(any: any) {
   
    this.images =  any;

  }
}

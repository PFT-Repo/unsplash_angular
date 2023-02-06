import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../app/environments/environment';
import { data } from '../offline';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  images: any[] = []
  apiKey = environment.unsplash.UNSPLASH_API_KEY;
  baseUrl = 'https://api.unsplash.com';

  constructor(private http: HttpClient) { }
  photoQuery() {
    let url = new URL(`${this.baseUrl}/photos/random/?count=12&&client_id=${this.apiKey}`);
    fetch(url).then(response => response.json()).then(data => this.getList(data)
    );
  }
  private getList(any: any) {
    this.images = any;

  }
}

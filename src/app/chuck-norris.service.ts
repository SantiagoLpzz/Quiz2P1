import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisService {
  private apiUrl1 = 'https://api.chucknorris.io/jokes/random';
  private apiUrl2 = 'https://api.chucknorris.io/jokes/categories';

  constructor(private http: HttpClient) { }

  getRandomJoke(): Observable<any> {
    return this.http.get(`${this.apiUrl1}`);
  }

  getCategories(): Observable<any>{
    return this.http.get(`${this.apiUrl2}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url = `https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json`;
  constructor(private http: HttpClient) { }

  public getGnomeData(): Observable<any> {
    return this.http.get(this.url);
  }
}

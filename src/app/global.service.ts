import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http:HttpClient) { }

getJson(){
  return this.http.get("https://api.openbrewerydb.org/breweries");
}

}

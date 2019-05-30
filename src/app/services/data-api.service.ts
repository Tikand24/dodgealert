import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RatingSummoner } from '../models/RatingSummoner';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  private url_api = "http://127.0.0.1:8000/api/";

  constructor(private http: HttpClient) { }

  getSummonerName(name: String){
    return this.http.get(this.url_api+"summoner/"+name);
  }
  getDataApiRiot(){
    return this.http.get(this.url_api+"seed-data");
  }
  getRatingsHonor(){
    return this.http.get(this.url_api+"rating-honor");
  }
  addRatingSummoner(ratingSummoner: RatingSummoner){
    return this.http.post(this.url_api+"rating-summoner",ratingSummoner);
  }
}

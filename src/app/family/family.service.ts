import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  constructor(private http:HttpClient) { }

  getFamilyData=()=>{
    console.log("Test dadaaa");
    return this.http.get("http://localhost:3000/getFamily?id=1");    
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private hC: HttpClient) { }
  
   public getNews(){
	   
    //return this.httpClient
	//.get('http://citibikenyc.com/stations/json');
	return this.hC.get('https://www.w3schools.com/angular/customers.php');
	//return this.hC.get('http://localhost:8199/hello');
  }
}

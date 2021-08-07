import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles;

  constructor(private apiService: ApiService) { }
  
  ngOnInit() {
	  
    this.apiService.getNews().subscribe((data)=>{
		
      //console.log(data.records);
	this.articles = data.records;
    //this.articles=data;
	
	});
  }
}

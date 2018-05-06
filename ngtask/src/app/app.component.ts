import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks = [];
  title = 'Restful Task API';
  constructor(private _httpService: HttpService) {

  }

  ngOnInit(){
    this.getTaskFromService();
  }

  getTaskFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log(data);
      this.tasks = data['data'];
    });
  }
}

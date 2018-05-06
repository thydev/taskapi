import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks = [];
  task = {};
  newTask: any;
  title = 'Restful Task API';
  constructor(private _httpService: HttpService) {

  }

  ngOnInit(){
    // this.getTaskFromService();
    this.newTask = { title: "", description: "" }
  }

  getTaskFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log(data);
      this.tasks = data['data'];
    });
  }

  getTaskById(id: string) {
    let obsTask = this._httpService.getTask(id);
    obsTask.subscribe(data => {
      console.log(data);
      this.task = data['data'];
    });
  }

  btnGetAllTask(): void{
    console.log("clicked")
    this.getTaskFromService();
  }

  btnShowTask(id: string): void {
    console.log(id);
    this.getTaskById(id);
  }

  addTask(aTask: any) {
    let obsTask = this._httpService.addTask(aTask);
    obsTask.subscribe(data => {
      console.log("back from creating", data);
    });
  }
  onSubmit() {
    // Code to send off the form data (this.newTask) to the Service
    this.addTask(this.newTask)
    // Reset this.newTask to a new, clean object.
    this.newTask = { title: "", description: "" }
  }
}
